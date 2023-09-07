import React from "react";
import './Calendar.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type mapProps = InferProps<typeof propTypes> & SpecificProps;

const Map = (props: mapProps) => {
    const {

    } = props;

    return (
        <MapContainer>
              <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
        </MapContainer>
    );
};

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default withTranslation()(Map);