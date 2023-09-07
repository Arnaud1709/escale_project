import React from "react";
import './DateField.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';
import { MultiInputDateRangeField } from "@mui/x-date-pickers-pro";

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type dateFieldProps = InferProps<typeof propTypes> & SpecificProps;

const DateField = (props: dateFieldProps) => {
    const {

    } = props;

    return (
        <MultiInputDateRangeField />
    );
};

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;

export default withTranslation()(DateField);