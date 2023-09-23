import React, { useState, useEffect } from "react";
import airstripDataStyles from "./AirstripData.style";
import { useTranslation, withTranslation } from "react-i18next";
import { Container, useMediaQuery } from "@mui/material";
import Map from "../../components/Map";
import airstripDataGeoJSON from "../../utilities/geojson/airstrip.json";

const AirstripData = () => {
  const { t, i18n } = useTranslation();
  const homeDescribe = t("homeDescribe");

  const {
    homePictures,
    homePicturesSmallScreen,
    picturesBody,
    picturesBodySmallScreen,
    description,
    descriptionSmallScreen,
    dataArray,
    dataArraySmallScreen,
    dataArrayItemHover,
    dataArrayLine,
    dataArrayLineSmallScreen,
    dataArrayItem,
    rootStyle,
    halfTopDiv,
    halfTopDivSmallScreen,
    topDiv,
    topDivSmallScreen,
  } = airstripDataStyles;

  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const halfTopStyle = isSmallScreen ? halfTopDivSmallScreen : halfTopDiv;
  const topDivStyle = isSmallScreen ? topDivSmallScreen : topDiv;
  const homePicturesStyle = isSmallScreen
    ? homePicturesSmallScreen
    : homePictures;
  const picturesBodyStyle = isSmallScreen
    ? picturesBodySmallScreen
    : picturesBody;
  const descriptionStyle = isSmallScreen ? descriptionSmallScreen : description;
  const dataArrayStyle = isSmallScreen ? dataArraySmallScreen : dataArray;
  const dataArrayLineStyle = isSmallScreen
    ? dataArrayLineSmallScreen
    : dataArrayLine;

  return (
    <Container style={rootStyle}>
      <div style={topDivStyle}>
        <div style={halfTopStyle}>
          <div style={picturesBodyStyle}>
            <Map
              style={homePicturesStyle}
              geoJSONData={airstripDataGeoJSON}
            ></Map>
          </div>
        </div>
        <div style={halfTopStyle}>
          <div style={descriptionStyle}>
            <p>{t("airstripInfo")}</p>
          </div>
        </div>
      </div>
      <div style={dataArrayStyle}>
        <div style={dataArrayLineStyle}>
          {t("moreInfo")} {t("infoLink")}
        </div>
      </div>
    </Container>
  );
};

export default withTranslation()(AirstripData);
