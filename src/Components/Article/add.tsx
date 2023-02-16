import React from "react";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import _ from "lodash";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
function LocationMarker({}) {
  const [polyline, setPolyline] = useState<any[]>([[23.798469, 90.4033241]]);
  // const polyline: any[] = [
  //   [23.798469, 90.4033241],
  //   [51.51, -0.1],
  //   [51.51, -0.12],
  // ];
  console.log(polyline);
  const limeOptions: any = { color: "lime" };
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e: any) {
      console.log(e.latlng);
      map.locate(e);

      const clonePolyline = _.cloneDeep(polyline);
      clonePolyline.push([e.latlng.lat, e.latlng.lng]);
      const l = [e.latlng.lat, e.latlng.lng];
      setPolyline(clonePolyline);
    },
    locationfound(e: any) {
      setPosition(e.latlng);

      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <>
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
      <Polyline pathOptions={limeOptions} positions={polyline} />
    </>
  );
}

const Add = () => {
  return (
    <MapContainer
      center={{ lat: 23.8103, lng: 90.4125 }}
      zoom={10}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Add;
