import 'leaflet/dist/leaflet.css'
import {MapContainer,TileLayer} from 'react-leaflet'

function MyMap(){
  return(
    <MapContainer
  className="full-height-map"
  center={[19.0760, 72.8777]} 
  // zoom={13}
  // minZoom={3}
  // maxZoom={19}
  // maxBounds={[[-85.06, -180], [85.06, 180]]}
  zoom={13}
  minZoom={3}
  // maxZoom={19}
  maxBounds={[[-85.06, -180], [85.06, 180]]}
  scrollWheelZoom={true}>
    
  <TileLayer
    attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
    // url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <TileLayer
  url="https://ows.terrestris.de/osm/service"
  layers="OSM-WMS"
  format="image/png"
  transparent={true}
/>

</MapContainer>

  );
}

export default MyMap;