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

type headerProps = InferProps<typeof propTypes> & SpecificProps;

const Header = (props: headerProps) => {

    const {

    } = props;

    return (
      <div></div>
    );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withTranslation()(Header);