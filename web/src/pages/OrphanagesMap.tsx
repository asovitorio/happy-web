import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/orphanagesMap.css'
import mapMarkerImg from '../images/map-marker.svg'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mapIcon from '../utils/mapicon'

const OrphanagesMap = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <strong>Capital</strong>
                </footer>
            </aside>
            <Map
                center={[-23.6451006, -46.7768741]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

                <Marker
                    icon={mapIcon}
                    position={[-23.6451006, -46.7768741]}
                >
                <Popup closeButton={false} minWidth={240} maxWidth={248} className="map-popup">
                    Lar das Meninas
                    <Link to="/orphanages/1">
                        <FiArrowRight size={20} color="#FFF" />
                    </Link>
                 </Popup>
                </ Marker>
            </Map>

            <Link to='/orphanages/create' className="create-orphanage">
                < FiPlus size={32} color='#fff' />
            </Link>
        </div>
    )
}

export default OrphanagesMap;