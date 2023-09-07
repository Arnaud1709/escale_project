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

type footerProps = InferProps<typeof propTypes> & SpecificProps;

const Footer = (props: footerProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default withTranslation()(Footer);Footer