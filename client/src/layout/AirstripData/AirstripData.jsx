import React from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { Container, useMediaQuery } from "@mui/material";
import Map from "../../components/Map";
import airstripDataGeoJSON from "../../utilities/geojson/airstrip.json";
import airstripDataStyles from "./AirstripData.style";

const AirstripData = () => {
  const { t } = useTranslation();
  const airstripInfo = t("airstripInfo")
  const {
    rootStyle,
    halfTopDiv,
    halfTopDivSmallScreen,
    linkStyle,
    topDiv,
    topDivSmallScreen,
    picturesBody,
    picturesBodySmallScreen,
    description,
    descriptionSmallScreen,
    dataArray,
    dataArraySmallScreen,
    dataArrayLine,
    dataArrayLineSmallScreen,
  } = airstripDataStyles;

  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const halfTopStyle = isSmallScreen ? halfTopDivSmallScreen : halfTopDiv;
  const topDivStyle = isSmallScreen ? topDivSmallScreen : topDiv;
  const picturesBodyStyle = isSmallScreen
    ? picturesBodySmallScreen
    : picturesBody;
  const descriptionStyle = isSmallScreen ? descriptionSmallScreen : description;
  const dataArrayStyle = isSmallScreen ? dataArraySmallScreen : dataArray;
  const dataArrayLineStyle = isSmallScreen ? dataArrayLineSmallScreen : dataArrayLine;

  return (
    <Container style={rootStyle}>
      <div style={topDivStyle}>
        <div style={halfTopStyle}>
          <div style={picturesBodyStyle}>
            <Map geoJSONData={airstripDataGeoJSON}></Map>
          </div>
        </div>
        <div style={halfTopStyle}>
          <div style={descriptionStyle}>
          {airstripInfo.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={dataArrayStyle}>
        <div style={dataArrayLineStyle}>
          <p>{t("moreAirstripInfo")}<a href="https://basulm.ffplum.fr/PDF/LF7033.pdf" style={linkStyle}>{t("infoLink")}</a></p> 
        </div>
      </div>
    </Container>
  );
};

export default withTranslation()(AirstripData);
