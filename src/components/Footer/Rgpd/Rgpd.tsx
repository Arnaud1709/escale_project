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

type rgpdProps = InferProps<typeof propTypes> & SpecificProps;

const Rgpd = (props: rgpdProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

Rgpd.propTypes = propTypes;
Rgpd.defaultProps = defaultProps;

export default withTranslation()(Rgpd);