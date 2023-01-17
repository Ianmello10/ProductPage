import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { GrFormClose } from "react-icons/gr";

import { FreeMode, Thumbs } from "swiper";
import imgSlide from "../assets/ecommerce-product-page-main/images/image-product-1.jpg";
import imgSlide2 from "../assets/ecommerce-product-page-main/images/image-product-2.jpg";
import imgSlide3 from "../assets/ecommerce-product-page-main/images/image-product-3.jpg";
import imgSlide4 from "../assets/ecommerce-product-page-main/images/image-product-4.jpg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styled from "styled-components";

function SlideProducts() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [modal, setModal] = useState(false);

  const images = [imgSlide, imgSlide2, imgSlide3, imgSlide4];
  const images2 = [imgSlide, imgSlide2, imgSlide3, imgSlide4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const modalClick = () => {
    setModal(true);
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleClick2 = (index) => {
    setCurrentIndex2(index);
  };

  return (
    <ContainerSlide className="containerSlide">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="imgProduto" src={imgSlide} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgProduto" src={imgSlide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgProduto" src={imgSlide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="imgProduto" src={imgSlide4} />
        </SwiperSlide>
      </Swiper>

      <div className="SlideShow">
        <img
          onClick={modalClick}
          className="teste"
          src={images[currentIndex]}
          alt=""
        />

        <div className="containerGallery">
          {images.map((img, index) => (
            <>
              <img
                className="img-select"
                key={index}
                src={img}
                onClick={() => handleClick(index)}
              />
            </>
          ))}
        </div>
      </div>

      {modal && (
        <div className="backDrop">
          <div className="SlideShow SlideShow2">
            <div className="modal">
              <GrFormClose className="close" onClick={() => setModal(false)} />

              <img className="teste2" src={images2[currentIndex2]} alt="" />
            </div>

            <div className="containerGallery2">
              {images2.map((img, index) => (
                <>
                  <img
                    className="img-select2"
                    key={index}
                    src={img}
                    onClick={() => handleClick2(index)}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </ContainerSlide>
  );
}

export default SlideProducts;

const ContainerSlide = styled.div`
  width: 100%;
  height: 370px;
  margin-top: 0px;

  .teste {
    display: none;
  }

  .containerGallery {
    display: none;
  }

  .swiper {
    width: 100%;
    height: 100%;

    .imgProduto {
      width: 100%;
      object-fit: cover;
    }

    .swiper-button-prev {
      font-size: 10px;
      color: black;
      width: 35px;
      height: 35px;
      background-color: white;
      border-radius: 999px;
    }

    .swiper-button-next {
      color: black;
      border-radius: 900px;
      background-color: white;
      width: 35px;
      height: 35px;
    }
    .swiper-pagination-bullet {
      background-color: black;
    }
  }

  @media (min-width: 825px) {
    .swiper {
      display: none;
    }

    .close {
      z-index: 100;
      position: absolute;
      right: 0;
      top: 0;
      margin-right: 485px;
      margin-top: 70px;
      width: 42px;
      height: 42px;
      color: #ffa600;
      cursor: pointer;
    }

    .modal {
    }

    .backDrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .SlideShow2 {
      margin: auto;
      width: 50%;

      .teste2 {
        display: block;
        width: 40%;
        margin: 120px auto;
        height: 345px;
        border-radius: 6px;
      }

      .containerGallery2 {
        display: flex;
        justify-content: space-between;
        margin: -60px auto;
        width: 45%;

        .img-select2 {
          width: 110px;
          height: 100px;
          border-radius: 6px;
          cursor: pointer;
        }
      }
    }

    display: flex;

    height: auto;

    .SlideShow {
      width: 80%;
    }

    .teste {
      display: block;
      width: 100%;
      margin-top: 20px;
      height: 400px;
      cursor: pointer;

      border-radius: 6px;
    }

    .containerGallery {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      width: 100%;

      .img-select {
        width: 110px;
        height: 100px;
        border-radius: 6px;
        cursor: pointer;
      }
    }
  }
`;
