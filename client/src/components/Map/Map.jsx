import React, { useEffect, useRef, useState } from "react";
import MapStyles from "./Map.style";
import { withTranslation } from "react-i18next";
import L from "leaflet";

const Map = ({ geoJSONData }) => {
  const { mapBox } = MapStyles;
  const mapRef = useRef(null);
  const [geoJSONLayer, setGeoJSONLayer] = useState(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView(
        [47.79752728980125, 5.915300626863029],
        16
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        mapRef.current
      );
    }

      if (geoJSONData) {
        if (geoJSONLayer) {
          geoJSONLayer.removeFrom(mapRef.current);
        }
  
        const newGeoJSONLayer = L.geoJSON(geoJSONData, {
          style: function (feature) {
            return { fillColor: "blue", color: "white", weight: 2 };
          },
        }).addTo(mapRef.current);
  
        setGeoJSONLayer(newGeoJSONLayer);
        mapRef.current.fitBounds(newGeoJSONLayer.getBounds());
      }
    }, [geoJSONData]);

  return <div id="map" style={mapBox}></div>;
};

export default withTranslation()(Map);
