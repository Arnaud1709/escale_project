import React from "react";
import './Calendar.style'
import { withTranslation } from "react-i18next";
import PropTypes, { InferProps } from 'prop-types';
import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";

const propTypes = {

};

const defaultProps = {

};

type SpecificProps = {

};

type footerProps = InferProps<typeof propTypes> & SpecificProps;

const Footer = (props: footerProps) => {
    const {

    } = props;

    return (
        <footer>
            <Grid container>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <Button variant="text">Le logement</Button>
                    <Button variant="text">Photo</Button>
                    <Button variant="text">Autour de nous</Button>
                    <Button variant="text">Mentions Légales</Button>
                    <Button variant="text">RGPD</Button>

                </Grid>
                <Grid item xs={3}>
                    <h2>Nous contacter: <br/></h2>
                    <p>
                        Mail: <br/>
                        Numéro: 0671102975 <br/>
                        Disponible tous les jours de 8h à 17h <br/>
                    </p>
                </Grid>

            </Grid>
        </footer>
    );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default withTranslation()(Footer);Footer