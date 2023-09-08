import React from "react";
import './Calendar.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type reservationProps = InferProps<typeof propTypes> & SpecificProps;

const Reservation = (props: reservationProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

Reservation.propTypes = propTypes;
Reservation.defaultProps = defaultProps;

export default withTranslation()(Reservation);