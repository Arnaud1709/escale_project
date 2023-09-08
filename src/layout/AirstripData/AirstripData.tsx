import React from "react";
import './AirstripData.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type airstripDataProps = InferProps<typeof propTypes> & SpecificProps;

const AirstripData = (props: airstripDataProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

AirstripData.propTypes = propTypes;
AirstripData.defaultProps = defaultProps;

export default withTranslation()(AirstripData);