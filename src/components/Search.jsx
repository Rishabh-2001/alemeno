import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
// import FrontHeader from "@/components/search/frontHeader/frontHeader";
// import Header from "@/components/landingPage/header";
// import Footer from "@/components/landingPage/footer/Footer";
import CoursesSection from "./CoursesSection";
// import Image from "next/image";
// import bgImage from "../../assets/images/LandingImages/advisorSectionImages/bgImage.svg";

import useMediaQuery from "@mui/material/useMediaQuery";

import searchWhiteCurve from "../assets/Searh_WhiteCurve.png";
// import Head from "next/head";
import { ClimbingBoxLoader } from "react-spinners";
import FrontHeader from "./FrontHeader";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../store/slice/course.slice";
import SearchCourseSection from "./SearchCourseSection";

const Search = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [offerStrip, setOfferStrip] = useState(true);

  const matches = useMediaQuery("(max-width:600px)");
  const matchesNavbar = useMediaQuery("(max-width:1023px)");
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const allData = useSelector((store) => store?.course?.courseData);
  const categories = useSelector((store) => store?.course?.categories);
  const [mapData, setMapData] = useState(allData);

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  useEffect(() => {
    setMapData(allData);
  }, [allData]);

  function getFilteredCourse(allData, key) {
    return allData?.filter((data) => data?.category === key);
  }

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <ClimbingBoxLoader color="#000000" />
        </div>
      ) : (
        <>
          <Grid container>
            <Grid className="" item xs={12}>
              <FrontHeader />
            </Grid>

            <Grid item xs={12} className=" relative pb-5 bg-[#FBFBFE]">
              <div className=" ">
                {categories?.map((items) => {
                  return (
                    items && (
                      <SearchCourseSection
                        key={items?.ID}
                        courseHeading={items?.name}
                        items={getFilteredCourse(allData, items?.name)}
                      />
                    )
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Search;
