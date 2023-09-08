import React from "react";
import './MainPage.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type MainPageProps = InferProps<typeof propTypes> & SpecificProps;

const MainPage = (props: MainPageProps) => {
    const {

    } = props;

    return (
        <div> </div>
    );
};

MainPage.propTypes = propTypes;
MainPage.defaultProps = defaultProps;

export default withTranslation()(MainPage);