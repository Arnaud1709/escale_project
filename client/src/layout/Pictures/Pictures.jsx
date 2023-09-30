import React, {useState} from "react";
import { useTranslation, withTranslation } from "react-i18next";
import picturesStyles from "./Pictures.style";
import { ImageList, ImageListItem, ImageListItemBar, Dialog, Container } from "@mui/material";

import Airstrip1 from "../../utilities/img/airstrip/airstrip1.jpg";
import Airstrip2 from "../../utilities/img/airstrip/airstrip2.JPG";
import Airstrip3 from "../../utilities/img/airstrip/airstrip3.JPG";
import Airstrip4 from "../../utilities/img/airstrip/airstrip4.JPG";
import Airstrip5 from "../../utilities/img/airstrip/airstrip5.JPG";
import Airstrip8 from "../../utilities/img/airstrip/airstrip8.JPG";
import Airstrip9 from "../../utilities/img/airstrip/airstrip9.JPG";
import Airstrip10 from "../../utilities/img/airstrip/airstrip10.JPG";
import Airstrip11 from "../../utilities/img/airstrip/airstrip11.JPG";
import Airstrip12 from "../../utilities/img/airstrip/airstrip12.JPG";
import Airstrip13 from "../../utilities/img/airstrip/airstrip13.JPG";
import Airstrip14 from "../../utilities/img/airstrip/airstrip14.JPG";
import Airstrip15 from "../../utilities/img/airstrip/airstrip15.png";

import Logment1 from "../../utilities/img/logment/home.jpg";
import Logment2 from "../../utilities/img/logment/salon.jpg";
import Logment3 from "../../utilities/img/logment/cuisine1.jpg";
import Logment4 from "../../utilities/img/logment/cuisine2.jpg";
import Logment5 from "../../utilities/img/logment/sam.jpg";
import Logment6 from "../../utilities/img/logment/sdb1.jpg";
import Logment7 from "../../utilities/img/logment/sdb2.jpg";
import Logment8 from "../../utilities/img/logment/chambre1.jpg";
import Logment9 from "../../utilities/img/logment/chambre2.jpg";

import Plane from "../../utilities/img/airstrip/plane.jpg";
import Hangar from "../../utilities/img/airstrip/hangar.JPG";
import Hangar2 from "../../utilities/img/airstrip/hangar2.JPG";
import Hangar3 from "../../utilities/img/airstrip/hangar3.JPG";
import Hangar4 from "../../utilities/img/airstrip/hangar4.JPG";


const Pictures = () => {
  const {t, i18n} = useTranslation();
  const {photoGallery, imageList, containerStyle} = picturesStyles;

  const [zoomedOpen, setZoomedOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setZoomedOpen(true);
  };

  const handleCloseZoomed = () => {
    setSelectedImage(null);
    setZoomedOpen(false);
  };


  const airstripPictures = [
    {alt:t("airstrip1"), src: Airstrip1},
    {alt:t("airstrip2"), src: Airstrip2},
    {alt:t("airstrip3"), src: Airstrip3},
    {alt:t("airstrip4"), src: Airstrip4},
    {alt:t("airstrip5"), src: Airstrip5},
    {alt:t("airstrip6"), src: Airstrip8},
    {alt:t("airstrip7"), src: Airstrip9},
    {alt:t("airstrip8"), src: Airstrip10},
    {alt:t("airstrip9"), src: Airstrip11},
    {alt:t("airstrip10"), src: Airstrip12},
    {alt:t("airstrip11"), src: Airstrip13},
    {alt:t("airstrip12"), src: Airstrip14},
  ];

  const logmentPictures = [
    {alt:t("lodging"), src: Logment1},
    {alt:t("salon"), src: Logment2},
    {alt:t("kitchen1"), src: Logment3},
    {alt:t("kitchen2"), src: Logment4},
    {alt:t("lunchroom"), src: Logment5},
    {alt:t("bathroom1"), src: Logment6},
    {alt:t("bathroom2"), src: Logment7},
    {alt:t("bedroom1"), src: Logment8},
    {alt:t("bedroom2"), src: Logment9},
  ];

  const hangarPictures = [
    {alt:t("airstrip15"), src: Airstrip15},
    {alt:t("plane"), src: Plane},
    {alt:t("hangar"), src: Hangar},
    {alt:t("hangar2"), src: Hangar2},
    {alt:t("hangar3"), src: Hangar3},
    {alt:t("hangar4"), src: Hangar4},
  ];

  return (
    <div>
      <Container style={containerStyle}>
        <h3>{t("airstripPhotos")}</h3>
        <ImageList cols={12} gap={8} style={imageList} loading="lazy">
          {airstripPictures.map((image, index) => (
            <ImageListItem key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={photoGallery}
                onClick={() => handleImageClick(image)}
              />
              <ImageListItemBar title={image.alt} />
            </ImageListItem>
          ))}
        </ImageList>

        <h3>{t("lodgingPhotos")}</h3>
        <ImageList cols={3} gap={8} style={imageList} loading="lazy">
          {logmentPictures.map((image, index) => (
            <ImageListItem key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={photoGallery}
                onClick={() => handleImageClick(image)}
              />
              <ImageListItemBar title={image.alt} />
            </ImageListItem>
          ))}
        </ImageList>

        <h3>{t("hangarPhotos")}</h3>
        <ImageList cols={3} gap={8} style={imageList} loading="lazy">
          {hangarPictures.map((image, index) => (
            <ImageListItem key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={photoGallery}
                onClick={() => handleImageClick(image)}
              />
              <ImageListItemBar title={image.alt} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <Dialog
        open={zoomedOpen}
        onClose={handleCloseZoomed}
        maxWidth="lg"
        PaperProps={{
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          },
        }}
      >
        {selectedImage && (
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            style={{ maxHeight: "80vh", maxWidth: "80vw" }}
          />
        )}
      </Dialog>
    </div>
  );
};

export default withTranslation()(Pictures);
