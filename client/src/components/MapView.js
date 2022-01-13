import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import Search from './Search'
import 'leaflet/dist/leaflet.css'
import { useLocation } from 'react-router-dom'
import L from 'leaflet'
import userPosition from '../assets/youarehere.png';
import './MapView.css'


const MapView = () => {

  const location = useLocation();

  const [state] = useState({
    currentLocation: { lat: location.state.latitude || 41.3879, lng: location.state.longitude || 2.16992 },
    zoom: 20
  })

  let youAreHere = L.icon({
    iconUrl: userPosition,
  });

  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom} zoomControl={false}>
      <Search className="searchComponent" />
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
      <Marker position={state.currentLocation} icon={youAreHere} />

    </MapContainer>
  )
}

export default MapView
