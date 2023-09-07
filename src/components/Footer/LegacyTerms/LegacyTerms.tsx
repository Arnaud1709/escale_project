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

type legacyTermsProps = InferProps<typeof propTypes> & SpecificProps;

const LegacyTerms = (props: legacyTermsProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

LegacyTerms.propTypes = propTypes;
LegacyTerms.defaultProps = defaultProps;

export default withTranslation()(LegacyTerms);