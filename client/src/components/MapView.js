import 'leaflet/dist/leaflet.css'
import './MapView.css'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import userPosition from '../assets/youarehere.png';
import { getShopsByKeyword } from '../ApiClient'
import Search from './Search'
import ShopDetails from './ShopDetails'


const MapView = () => {

  const location = useLocation();
  const [shopList, setShopList] = useState([]);
  const [shopDetails, setShopDetails] = useState({
    show: false,
    styles: { transform: 'translateY(100%)' },
    shop: {}
  })
  const [state] = useState({
    currentLocation: { lat: location.state.latitude || 41.3879, lng: location.state.longitude || 2.16992 },
    zoom: 20
  })

  let youAreHere = L.icon({
    iconUrl: userPosition,
  });

  async function filterShops(keyword) {
    const shops = await getShopsByKeyword(keyword);
    setShopList(shops);
  }

  const populateDetails = (id) => {
    setShopDetails({
      show: true,
      styles: { transform: 'translateY(70%)' },
      shop: shopList.filter(shop => shop.id === id),
    })
  }

  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom} zoomControl={false}>
      <Search className="searchComponent" filterShops={filterShops} />
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
      <Marker position={state.currentLocation} icon={youAreHere} />
      {shopList.map(shop => <Marker
        key={shop.id}
        position={{ lat: `${shop.latitude}`, lng: `${shop.longitude}` }}
        icon={youAreHere}
        eventHandlers={{ click: (e) => { populateDetails(shop.id) } }} />)}
      <ShopDetails shopDetails={shopDetails} />
    </MapContainer>
  )
}

export default MapView
