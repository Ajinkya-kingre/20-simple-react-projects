import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../image-slider/style.css";

export default function ImgSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImgaes(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrMsg(error.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrSlide(currSlide === 0 ? images.length - 1 : currSlide - 1);
  }

  function handleNext() {
    setCurrSlide(currSlide === images.length - 1 ? 0 : currSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImgaes(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading Data! Please Wait.</div>;
  }

  if (errMsg !== null) {
    return <div>Error occured! {errMsg} </div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
              className={
                currSlide === index ? "curr-Image" : "currImage hide-curr-img"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="cirlce-indicatior">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currSlide === index
                    ? "current-indicatior"
                    : "currect-indicatior inactive-indicatior"
                }
                onClick={() => setCurrSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
