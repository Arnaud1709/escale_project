import React, { useState } from "react";
import homeStyles from "./Home.style";
import { useTranslation, withTranslation } from "react-i18next";
import logmentPictures from "../../utilities/img/logment/home.jpg";
import { Container, useMediaQuery } from "@mui/material";

const Home = () => {
  const [hoveredItemIndex1, setHoveredItemIndex1] = useState(-1);
  const [hoveredItemIndex2, setHoveredItemIndex2] = useState(-1);
  const { t } = useTranslation();
  const homeDescribe = t("homeDescribe");

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
    { name: t("field") },
    { name: t("terrace") },
    { name: t("salon") },
    { name: t("kitchen") },
    { name: t("shower") },
    { name: t("swimmingPool") },
  ];
  const itemArray2 = [
    { name: t("parking") },
    { name: t("breakfast") },
    { name: t("wifi") },
    { name: t("ulmWelcome") },
    { name: t("carWelcome") },
    { name: t("bikeWelcome") },
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
    containerStyle,
    halfTopDiv,
    halfTopDivSmallScreen,
    topDiv,
    topDivSmallScreen,
  } = homeStyles;

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
    <Container style={containerStyle}>
      <div style={topDivStyle}>
        <div style={halfTopStyle}>
          <div style={picturesBodyStyle}>
            <img
              style={homePicturesStyle}
              src={logmentPictures}
              alt="Home"
            ></img>
          </div>
        </div>
        <div style={halfTopStyle}>
          <div style={descriptionStyle}>
            {homeDescribe.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={dataArrayStyle}>
        <div style={dataArrayLineStyle}>
          {itemArray.map((item, index) => (
            <div
              style={
                index === hoveredItemIndex1 ? dataArrayItemHover : dataArrayItem
              }
              onMouseEnter={() => handleMouseEnter1(index)}
              onMouseLeave={handleMouseLeave}
              key={item.name}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div style={dataArrayLineStyle}>
          {itemArray2.map((item, index) => (
            <div
              style={
                index === hoveredItemIndex2 ? dataArrayItemHover : dataArrayItem
              }
              onMouseEnter={() => handleMouseEnter2(index)}
              onMouseLeave={handleMouseLeave}
              key={item.name}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default withTranslation()(Home);
