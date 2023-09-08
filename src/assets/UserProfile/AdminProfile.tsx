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

type adminProfileProps = InferProps<typeof propTypes> & SpecificProps;

const AdminProfile = (props: adminProfileProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

AdminProfile.propTypes = propTypes;
AdminProfile.defaultProps = defaultProps;

export default withTranslation()(AdminProfile);