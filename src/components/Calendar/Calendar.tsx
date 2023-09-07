import React from "react";
import './Calendar.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';
import { DateRangeCalendar } from "@mui/x-date-pickers-pro";

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type calendarProps = InferProps<typeof propTypes> & SpecificProps;

const Calendar = (props: calendarProps) => {
    const {

    } = props;

    return (
        <DateRangeCalendar />
    );
};

Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

export default withTranslation()(Calendar);