import { Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import bgNewImage from "../assets/bgNewImage.png";
// import search_outerPage_bg from "../../../assets/images/search_outerPage_bg.svg";

import search_SmallWhiteCurve from "../assets/search_SmallWhiteCurve.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
// import Link from "next/link";

const FrontHeader = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const matchesImage = useMediaQuery("(max-width:1068px)");
  const [categoryArray, setCategoryArray] = useState([
    {
      id: 1,
      name: "SDET",
      slugName: "sdet",
    },
    {
      id: 2,
      name: "DSA",
      slugName: "dsa",
    },
    {
      id: 3,
      name: "React",
      slugName: "react",
    },
  ]);
  const categories = useSelector((store) => store?.course?.categories);


  function convertString(inputString) {
    // Split the input string into an array of words
    const words = inputString.toLowerCase().split(" ");

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the modified array back into a string with spaces
    const result = words.join(" ");
    return result;
  }


  return (
    <div
      style={{
        // backgroundImage: `url(${search_outerPage_bg.src})`,
        width: "100%",

      }}
      className="small:h-[104%] search_outer_bg medium:h-[59rem] h-[42rem] bg-[#04060A] relative "
    >
      {matchesImage ? (
        <></>
      ) : (
        <>
          <img
            // draggable="false"
            src={bgNewImage}
            alt="Dev Courses"
            className="absolute   -top-[14rem] w-[100%]"
          />
        </>
      )}

      {/* w-[100vw] */}
      <div
        className="    "
        style={{ position: !matches && "absolute", zIndex: "2" }}
      >
        <div className="small:w-[100vw] small:pl-[1rem] small:pt-[2.5rem] w-[80vw] flex flex-col pl-[5rem] pt-[5rem] small:z-10">
          <div className="text-base pb-4 text-lightWhite">
            <Typography
              sx={{
                fontWeight: 600,
                lineHeight: "3.25rem",
              }}
              className="small:text-[1.5rem] text-[2.5rem]"
            >
              Explore All Courses
            </Typography>
          </div>

          <div>
            <p
              style={{
                fontWeight: "400",
                lineHeight: "150%",
                fontSize: "1rem",
              }}
              className="small:text-[14px] leading-[150%] small:w-[88%] pb-[1.5rem] text-[#CCCCCC] text-[1rem]"
            >
              Transform your learning journey with our unique and diverse array
              of courses. Get your hands on the cutting-edge technology of the
              industry, along with the essentials to excel in them. Dive into
              the world of possibilities and take your skills to new heights
              with DevLabs Alliance.
            </p>
          </div>

          <div className="small:mt-[3rem] mt-[3rem]">
            <Typography className="small:text-[1.25rem] text-[1.75rem] text-[#fff] font-semibold">
              All Categories :
            </Typography>
          </div>
        </div>

        <div className=" search_buttons small:mx-0 small:flex small:flex-wrap gap-2 p-0 mt-6 pb-10 small:pl-[1rem] ml-[5rem]">
          {categories?.map((items) => (
            <a key={items?.id} href={`category/${items?.key}`}>
              <Button
                variant="outlined"
                className="small:rounded-lg small:text-[14px] rounded-lg uppercase small:mr-0 small:mb-0 text-[#BFBFBF] border-[#808080] mr-4 mb-5 "
              >
                {convertString(items?.name)}
              </Button>
            </a>
          ))}
        </div>
      </div>

      <img
        src={search_SmallWhiteCurve}
        alt="img"
        style={{ zIndex: "1" }}
        className=" bottom-[-2rem] absolute w-[100%] "
      />
    </div>
  );
};
export default FrontHeader;
