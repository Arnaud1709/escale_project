import React, { useEffect, useRef } from "react";
import MapStyles from "./Map.style";
import { withTranslation } from "react-i18next";
import L from "leaflet";

const Map = ({ geoJSONData }) => {
  const { mapBox } = MapStyles;
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView(
        [47.79752728980125, 5.915300626863029],
        16,
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        mapRef.current,
      );

      if (geoJSONData) {
        L.geoJSON(geoJSONData).addTo(mapRef.current);
      }
    }
  }, [geoJSONData]);

  return <div id="map" style={mapBox}></div>;
};

export default withTranslation()(Map);
