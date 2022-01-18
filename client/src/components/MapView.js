import 'leaflet/dist/leaflet.css'
import './MapView.css'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import userPosition from '../assets/youarehere.png';
import shopPosition from '../assets/purple_pin_shadow.png';
import { getShopsByKeyword } from '../ApiClient'
import Search from './Search'
import ShopDetails from './ShopDetails'


const MapView = () => {

  const location = useLocation();
  const [shopList, setShopList] = useState([]);
  const [shopDetails, setShopDetails] = useState({
    show: false,
    isFullyUnfolded: false,
    styles: { transform: 'translateY(100%)' },
    shop: {}
  })
  const [initialLocation] = useState({
    currentLocation: { lat: location.state.latitude || 41.3879, lng: location.state.longitude || 2.16992 },
    zoom: 17
  })

  let youAreHere = L.icon({
    iconUrl: userPosition,
    iconSize: [30, 30],
  });

  const shopPin = L.icon({
    iconUrl: shopPosition,
    iconSize: [39, 50]
  })

  async function filterShops(keyword) {
    const shops = await getShopsByKeyword(keyword);
    setShopList(shops);
    setShopDetails({
      ...shopDetails,
      show: false,
      styles: { transform: 'translateY(100%)' },
      shop: {}
    })
  }

  const showDetails = (id) => {
    setShopDetails({
      ...shopDetails,
      show: true,
      styles: { transform: 'translateY(70%)' },
      shop: shopList.filter(shop => shop.id === id),
    })
  }
  //Can't make this work - will try in the future
  // const hideDetails = (e) => {
  //   e.preventDefault();
  //   setShopDetails({
  //     ...shopDetails,
  //     styles: { transform: 'translateY(100%)' },
  //     show: false,
  //     shop: {}
  //   });
  // }

  return (
    <MapContainer className="mapContainer" center={initialLocation.currentLocation} zoom={initialLocation.zoom} zoomControl={false}>
      <Search className="searchComponent" filterShops={filterShops} />
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
      <Marker position={initialLocation.currentLocation} icon={youAreHere} />
      {shopList.map(shop => <Marker
        key={shop.id}
        position={{ lat: `${shop.latitude}`, lng: `${shop.longitude}` }}
        icon={shopPin}
        eventHandlers={{ click: () => { showDetails(shop.id) } }} />)}
      <ShopDetails shopDetails={shopDetails} setShopDetails={setShopDetails} />
    </MapContainer>
  )
}

export default MapView
