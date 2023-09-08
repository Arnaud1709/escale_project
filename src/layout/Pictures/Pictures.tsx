import React from "react";
import './Pictures.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type picturesProps = InferProps<typeof propTypes> & SpecificProps;

const Pictures = (props: picturesProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

Pictures.propTypes = propTypes;
Pictures.defaultProps = defaultProps;

export default withTranslation()(Pictures);