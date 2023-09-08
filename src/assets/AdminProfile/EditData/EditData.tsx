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

type editDataProps = InferProps<typeof propTypes> & SpecificProps;

const EditData = (props: editDataProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

EditData.propTypes = propTypes;
EditData.defaultProps = defaultProps;

export default withTranslation()(EditData);