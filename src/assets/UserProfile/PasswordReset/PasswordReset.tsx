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

type passwordResetProps = InferProps<typeof propTypes> & SpecificProps;

const PasswordReset = (props: passwordResetProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

PasswordReset.propTypes = propTypes;
PasswordReset.defaultProps = defaultProps;

export default withTranslation()(PasswordReset);