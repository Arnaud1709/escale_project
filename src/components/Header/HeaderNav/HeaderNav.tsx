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

type headerNavProps = InferProps<typeof propTypes> & SpecificProps;

const HeaderNav = (props: headerNavProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

HeaderNav.propTypes = propTypes;
HeaderNav.defaultProps = defaultProps;

export default withTranslation()(HeaderNav);