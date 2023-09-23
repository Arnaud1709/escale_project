import React, { useState, useEffect } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { Button, Container, useMediaQuery } from "@mui/material";
import Map from "../../components/Map";
import bougeyCastle from "../../utilities/geojson/surroundingArea/bougeyCastle.json";
import charbonette from "../../utilities/geojson/surroundingArea/charbonette.json";
import deerDomain from "../../utilities/geojson/surroundingArea/deerDomain.json";
import home from "../../utilities/geojson/surroundingArea/home.json";
import jussey from "../../utilities/geojson/surroundingArea/jussey.json";
import vesoul from "../../utilities/geojson/surroundingArea/vesoul.json";
import bourbonne from "../../utilities/geojson/surroundingArea/bourbonne.json";
import surrondingAreaStyles from "./SurroundingArea.style";
import { GeoJSON } from "leaflet";

const SurroundingArea = () => {
  const [hoveredItemIndex1, setHoveredItemIndex1] = useState(-1);
  const [hoveredItemIndex2, setHoveredItemIndex2] = useState(-1);
  const { t, i18n } = useTranslation();
  const homeDescribe = t("homeDescribe");

  const [selectedGeoJSON, setSelectedGeoJSON] = useState(home);

  const handleMouseEnter1 = (index) => {
    setHoveredItemIndex1(index);
  };

  const handleMouseEnter2 = (index) => {
    setHoveredItemIndex2(index);
  };

  const handleMouseLeave = () => {
    setHoveredItemIndex1(-1);
    setHoveredItemIndex2(-1);
  };

  const itemArray = [
    { name: t("jussey"), data: jussey },
    { name: t("charbonette"), data: charbonette },
    { name: t("bougeyCastle"), data: bougeyCastle },
  ];
  const itemArray2 = [
    { name: t("vesoul"), data: vesoul },
    { name: t("bourbonne"), data: bourbonne },
    { name: t("deerDomain"), data: deerDomain },
  ];

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
  } = surrondingAreaStyles;

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
            <Map style={homePicturesStyle} geoJSONData={selectedGeoJSON}></Map>
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
          {itemArray.map((item, index) => (
            <Button
              style={
                index === hoveredItemIndex1 ? dataArrayItemHover : dataArrayItem
              }
              onClick={() => setSelectedGeoJSON(item.data)}
              onMouseEnter={() => handleMouseEnter1(index)}
              onMouseLeave={handleMouseLeave}
              key={item.name}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div style={dataArrayLineStyle}>
          {itemArray2.map((item, index) => (
            <Button
              style={
                index === hoveredItemIndex2 ? dataArrayItemHover : dataArrayItem
              }
              onClick={() => setSelectedGeoJSON(item.data)}
              component="button"
              onMouseEnter={() => handleMouseEnter2(index)}
              onMouseLeave={handleMouseLeave}
              key={item.name}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default withTranslation()(SurroundingArea);
