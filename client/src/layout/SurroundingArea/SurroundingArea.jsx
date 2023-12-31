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
  const [clickedItemIndex1, setClickedItemIndex1] = useState(-1);
  const [clickedItemIndex2, setClickedItemIndex2] = useState(-1);
  
  const { t, i18n } = useTranslation();

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

  const [selectedGeoJSON, setSelectedGeoJSON] = useState(home);

  const handleButtonClick = (index) => {
    setClickedItemIndex1(index);
    setClickedItemIndex2(-1);
    if (index === 0) {
      setSelectedGeoJSON(jussey);
    } else if (index === 1) {
      setSelectedGeoJSON(charbonette);
    } else if (index === 2) {
      setSelectedGeoJSON(bougeyCastle);
    }
  };

  const handleButtonClick2 = (index) => {
    setClickedItemIndex2(index);
    setClickedItemIndex1(-1);
    if (index === 0) {
      setSelectedGeoJSON(vesoul);
    } else if (index === 1) {
      setSelectedGeoJSON(bourbonne);
    } else if (index === 2) {
      setSelectedGeoJSON(deerDomain);
    }
  };

  const itemArray = [
    { name: t("jussey"), data: jussey, distance: t("distanceJussey"), bike: t("travelTimeBikeJussey"), car: t("travelTimeCarJussey"), walk: t("travelTimeWalkJussey"), description: t("jusseyDescribe")},
    { name: t("charbonette"), data: charbonette, distance: t("distanceCharbonnette"), bike: t("travelTimeBikeCharbonette"), car: t("travelTimeCarCharbonnette"), walk: t("travelTimeWalkCharbonnette"), description: t("charbonetteDescribe") },
    { name: t("bougeyCastle"), data: bougeyCastle, distance: t("distanceBougey"), bike: t("travelTimeBikeBougey"), car: t("travelTimeCarBougey"), walk: t("travelTimeWalkBougey"), description: t("bougeyDescribe")  },
  ];
  const itemArray2 = [
    { name: t("vesoul"), data: vesoul, distance: t("distanceVesoul"), bike: t("travelTimeBikeVesoul"), car: t("travelTimeCarVesoul"), walk: t("travelTimeWalkVesoul"), description: t("vesoulDescribe")  },
    { name: t("bourbonne"), data: bourbonne, distance: t("distanceBourbonne"), bike: t("travelTimeBikeBourbonne"), car: t("travelTimeCarBourbonne"), walk: t("travelTimeWalkBourbonne"), description: t("bourbonneDescribe")  },
    { name: t("deerDomain"), data: deerDomain, distance: t("distanceDeer"), bike: t("travelTimeBikeDeer"), car: t("travelTimeCarDeer"), walk: t("travelTimeWalkDeer"), description: t("deerDescribe")  },
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
          {itemArray.map((item, index) => {
             if (index === clickedItemIndex1 && clickedItemIndex1 !== -1) {
              return (
                <div key={item.name}>
                  <h2>{item.name}</h2>
                  <p>{item.distance}</p>
                  <p>{item.walk}</p>
                  <p>{item.bike}</p>
                  <p>{item.car}</p>
                  <p>{item.description}</p>
                </div>
              );
            };
            return null
            })}
          {itemArray2.map((item, index) => {
             if (index === clickedItemIndex2 && clickedItemIndex2 !== -1) {
              return (
                <div key={item.name}>
                  <h2>{item.name}</h2>
                  <p>{item.distance}</p>
                  <p>{item.walk}</p>
                  <p>{item.bike}</p>
                  <p>{item.car}</p>
                  <p>{item.description}</p>
                </div>
              );
            }
              return null
            })}
            {
              (clickedItemIndex1 === -1 && clickedItemIndex2 === -1) ? (
                <p key="moreLocationInfo">{t("moreLocationInfo")}</p>
              ) : null
            }
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
              onMouseEnter={() => handleMouseEnter1(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleButtonClick(index)}
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
              component="button"
              onMouseEnter={() => handleMouseEnter2(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleButtonClick2(index)}
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
