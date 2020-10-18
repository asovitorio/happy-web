import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/pages/orphanagesMap.css'
import mapMarkerImg from '../images/map-marker.svg'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
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
           center={[-23.6451006,-46.7768741]}
           zoom={15}
           style={{width:'100%', height:'100%'}}
           >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                 
           </Map>
            <Link to='' className ="create-orphanage">
            < FiPlus size={32} color='#fff'/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;