import React from "react";
import './Contact.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type contactProps = InferProps<typeof propTypes> & SpecificProps;

const Contact = (props: contactProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default withTranslation()(Contact);