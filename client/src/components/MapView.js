import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import Search from './Search'
import 'leaflet/dist/leaflet.css'
import { useLocation } from 'react-router-dom'
import L from 'leaflet'
import userPosition from '../assets/youarehere.png';
import './MapView.css'
import getShopsByKeyword from '../ApiClient'


const MapView = () => {

  const location = useLocation();
  const [shopList, setShopList] = useState([]);

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

  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom} zoomControl={false}>
      <Search className="searchComponent" filterShops={filterShops} />
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
      <Marker position={state.currentLocation} icon={youAreHere} />
      {shopList.map(shop => <Marker key={shop.id} position={{ lat: `${shop.latitude}`, lng: `${shop.longitude}` }} icon={youAreHere} />)}

    </MapContainer>
  )
}

export default MapView
