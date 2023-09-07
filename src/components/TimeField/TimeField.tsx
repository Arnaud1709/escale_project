import React from "react";
import './TimeField.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';
import { TimePicker } from "@mui/x-date-pickers-pro";

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type timeFieldProps = InferProps<typeof propTypes> & SpecificProps;

const TimeField = (props: timeFieldProps) => {
    const {

    } = props;

    return (
        <TimePicker />
    );
};

TimeField.propTypes = propTypes;
TimeField.defaultProps = defaultProps;

export default withTranslation()(TimeField);