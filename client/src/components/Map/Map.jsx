import React, { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next"; // Importe la fonction de traduction
import L from "leaflet"; // Importe la bibliothèque Leaflet pour les cartes interactives
import MapStyles from "./Map.style"; // Importe les styles CSS du composant Map

/**
 * Composant représentant une carte interactive affichant des données GeoJSON.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.geoJSONData - Les données GeoJSON à afficher sur la carte.
 * @returns {JSX.Element} Le composant Map.
 */
const Map = ({ geoJSONData }) => {
  const { mapBox } = MapStyles; // Destructure les styles du fichier MapStyles
  const mapRef = useRef(null); // Référence pour la carte Leaflet
  const [geoJSONLayer, setGeoJSONLayer] = useState(null); // État pour gérer la couche GeoJSON sur la carte

  useEffect(() => {
    /**
     * Initialise la carte Leaflet.
     */
    const initializeMap = () => {
      if (!mapRef.current) {
        // Crée une nouvelle carte si elle n'existe pas déjà
        mapRef.current = L.map("map").setView(
          [47.79752728980125, 5.915300626863029],
          16
        );
        // Ajoute une couche de tuiles OpenStreetMap à la carte
        L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ).addTo(mapRef.current);
      }
    };

    /**
     * Met à jour la couche GeoJSON sur la carte.
     */
    const updateGeoJSONLayer = () => {
      if (geoJSONData) {
        // Supprime la couche GeoJSON existante de la carte, le cas échéant
        if (geoJSONLayer) {
          geoJSONLayer.removeFrom(mapRef.current);
        }

        // Crée une nouvelle couche GeoJSON avec les données fournies
        const newGeoJSONLayer = L.geoJSON(geoJSONData, {
          style: function (feature) {
            return { fillColor: "blue", color: "blue", weight: 2 };
          },
        }).addTo(mapRef.current);

        // Ajuste le zoom et la position de la carte pour afficher toutes les données GeoJSON
        mapRef.current.fitBounds(newGeoJSONLayer.getBounds());

        // Met à jour l'état avec la nouvelle couche GeoJSON
        setGeoJSONLayer(newGeoJSONLayer);
      }
    };

    // Initialise la carte et met à jour la couche GeoJSON lorsque les données changent
    initializeMap();
    updateGeoJSONLayer();
  }, [geoJSONData]);

  // Rendu du composant Map avec un conteneur div pour la carte
  return <div id="map" style={mapBox}></div>;
};

// Enrichit le composant Map avec la fonction de traduction (i18n)
export default withTranslation()(Map);
