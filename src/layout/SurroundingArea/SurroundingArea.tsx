import React from "react";
import './SurroundingArea.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type surroundingAreaProps = InferProps<typeof propTypes> & SpecificProps;

const SurroundingArea = (props: surroundingAreaProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

SurroundingArea.propTypes = propTypes;
SurroundingArea.defaultProps = defaultProps;

export default withTranslation()(SurroundingArea);