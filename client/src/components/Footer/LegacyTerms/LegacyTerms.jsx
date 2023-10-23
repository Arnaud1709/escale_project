import React from "react";
import "./LegacyTerms.style";
import { withTranslation } from "react-i18next";
import legacytermsStyles from "./LegacyTerms.style";

const LegacyTerms = () => {
  const{rootStyle} = legacytermsStyles
  return (
    <div style={rootStyle}>
      <h1>Mentions légales</h1>
      <p>
        Le site www.escale70.fr est la propriété de ®.<br/>
        <br/>
        Identification de l'éditeur<br/>
        L'éditeur du site www.escale70.fr est ®.<br/>
        <br/>
        Coordonnées<br/>
        Ferme du pont du gros noyer<br/>
        70500 Gevigney-et-Mercey<br/>
        Tél : 0671102975<br/>
        Email : : alban.causin@wanadoo.fr<br/>
        Ou via notre formulaire de contact <br/>
        <br/>
        Forme juridique <br/>
        Représentant légal : Alban CAUSIN<br/>
        <br/>
        Usage du site<br/>
        Le site www.escale70.fr a pour fonction de vous proposer un séjour en chambre d'hôtes. Une utilisation de ce site, frauduleuse ou qui contreviendrait aux présentes mentions légales, pourra entraîner le refus par SAS Gîtes de France, à tout moment, de l'accès aux services proposés sur ledit Site.<br/>
        <br/>
        Responsabilité de l'éditeur<br/>
        L'édition d'informations en ligne obéit aux mêmes règles légales que l'édition traditionnelle. Le contenu du site est donc régi par la loi qui confère au lecteur divers droits et devoirs. L'éditeur du site s'engage à respecter scrupuleusement les règles éditoriales en vigueur à savoir : disposer du droit de diffuser sur son site le contenu proposé, assurer au mieux la vérification de la validité des informations portées à la connaissance du public. Toutefois des erreurs ou omissions indépendantes de la volonté de l'éditeur du présent site peuvent toutefois se glisser dans les pages de son site. Autoriser le lecteur à imprimer tout ou partie du contenu proposé sur le site pour son usage strictement personnel. <br/>
        <br/>
        Responsabilité de l'utilisateur internaute<br/>
        L'utilisateur du site s'engage pour sa part à respecter les règles de propriété intellectuelle des divers contenus proposés sur le site c'est-à-dire : A ne pas reproduire, résumer, modifier, altérer ou rediffuser, sans autorisation préalable de l'éditeur, quelque article, titre, application, logiciel, logo, marque, information ou illustration, pour un usage autre que strictement privé, ce qui exclut toute reproduction à des fins professionnelles ou de diffusion en nombre. A ne pas copier tout ou partie du site sur un autre site ou un réseau interne. La violation de ces dispositions impératives soumet le contrevenant, et toutes personnes responsables, aux peines pénales et civiles prévues par la loi.<br/>
        <br/>
        Usage de la langue française - Application du droit français et compétences juridictionnelles<br/>
        Conformément à la loi 94-665 du 04 août 1994, les offres présentées sur le présent site à destination de la clientèle française, sont rédigées en langue française. Des traductions commerciales en langues étrangères peuvent toutefois être accessibles. En cas de doute quant à la version à retenir, la version en langue française prime sur toutes les traductions commerciales rédigées dans une autre langue. Le contenu du présent site est régi par la loi française y compris en ce qui concerne la définition des compétences juridictionnelles.<br/>
      </p>
    </div>
  );
};
export default withTranslation()(LegacyTerms);
