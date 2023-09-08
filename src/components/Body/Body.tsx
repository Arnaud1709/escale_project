import React from "react";
import './Body.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type bodyProps = InferProps<typeof propTypes> & SpecificProps;

const Body = (props: bodyProps) => {
    const {

    } = props;

    return (
        <div></div>
    );
};

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default withTranslation()(Body);