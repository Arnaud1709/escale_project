import React from "react";
import "./Rgpd.style";
import { withTranslation } from "react-i18next";
import rgpdStyles from "./Rgpd.style";

const Rgpd = () => {
  const {rootStyle} = rgpdStyles;
  return (
    <div style={rootStyle}>
      <h1>Politique de Confidentialité de l'Escale en Conformité avec le RGPD</h1>
      <p>
        Chez l'Escale, nous nous engageons à protéger votre vie privée et à respecter le Règlement Général sur la Protection des Données (RGPD) de l'Union européenne. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web et nos services de location de chambres d'hôte. En utilisant notre site, vous consentez à la collecte et à l'utilisation de vos données conformément à cette politique.
        <br/>
        <br/>
        1. Informations que nous collectons<br/>
        Lorsque vous utilisez notre site web ou nos services, nous collectons les types de données suivants :<br/>
        Données personnelles : telles que votre nom, votre adresse e-mail, votre numéro de téléphone, et d'autres informations de contact que vous nous fournissez volontairement lorsque vous créez un compte ou effectuez une réservation.<br/>
        Données de paiement : lorsque vous effectuez une réservation, nous collectons les informations de paiement nécessaires pour traiter votre réservation, telles que les détails de votre carte de crédit ou d'autres informations de paiement. Ces informations sont cryptées et traitées de manière sécurisée.
        Données de réservation : cela inclut les détails de vos réservations, y compris les dates de séjour, les préférences d'hébergement et toute autre information liée à votre séjour.<br/>
        Données de navigation : nous collectons automatiquement des informations sur votre utilisation de notre site web, telles que votre adresse IP, votre navigateur, les pages que vous avez consultées et les temps de visite.<br/>
        <br/>
        2. Utilisation de vos informations<br/>
        Nous utilisons vos données personnelles pour les finalités suivantes :<br/>
        Traitement des réservations : nous utilisons vos informations pour traiter vos réservations, vous envoyer des confirmations, des rappels et vous fournir des informations importantes concernant votre séjour.<br/>
        Amélioration de nos services : nous utilisons les données de navigation pour comprendre comment nos visiteurs utilisent notre site web et pour améliorer notre contenu et notre convivialité.<br/>
        Communication avec vous : nous pouvons utiliser vos coordonnées pour vous envoyer des informations relatives à votre réservation, des offres spéciales et des informations sur nos services.<br/>
        <br/>
        3. Partage de vos informations<br/>
        Nous ne vendons pas, ne louons pas et ne partageons pas vos données personnelles avec des tiers, sauf dans les circonstances suivantes :<br/>
        Fournisseurs de services tiers : nous pouvons partager vos informations avec des tiers tels que les processeurs de paiement et les fournisseurs de services de réservation pour faciliter vos transactions et vos réservations.<br/>
        Conformité légale : nous pouvons divulguer vos informations lorsque cela est nécessaire pour nous conformer à des obligations légales, protéger nos droits légaux ou répondre à des demandes de gouvernements ou d'autorités judiciaires.<br/>
        <br/>
        4. Sécurité de vos informations<br/>
        Nous mettons en place des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute divulgation, toute altération ou toute destruction.<br/>
        <br/>
        5. Vos droits en vertu du RGPD<br/>
        En vertu du RGPD, vous avez certains droits sur vos données personnelles, notamment le droit d'accéder à vos données, de les corriger, de les supprimer et de vous opposer à leur traitement. Vous pouvez également retirer votre consentement à tout moment lorsque le traitement repose sur le consentement.<br/>
        <br/>
        6. Modifications de notre politique de confidentialité<br/>
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette politique pour rester informé des changements éventuels.<br/>
        Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou souhaitez exercer vos droits en vertu du RGPD, n'hésitez pas à nous contacter à l'adresse suivante : [Votre adresse e-mail de contact].<br/>
        Nous vous remercions d'avoir choisi l'Escale pour votre hébergement et nous nous engageons à protéger vos données personnelles conformément au RGPD.<br/>
      </p>
    </div>
  );
};
export default withTranslation()(Rgpd);
