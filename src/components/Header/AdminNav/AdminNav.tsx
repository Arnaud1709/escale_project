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

type adminNavProps = InferProps<typeof propTypes> & SpecificProps;

const AdminNav = (props: adminNavProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

AdminNav.propTypes = propTypes;
AdminNav.defaultProps = defaultProps;

export default withTranslation()(AdminNav);