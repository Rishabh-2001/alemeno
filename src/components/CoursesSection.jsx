import { Box, Grid, Tab, Typography, useMediaQuery } from "@mui/material";

import React, { useEffect, useState } from "react";
import people from "../assets/landingPeople.png";
import CourseCard from "./CourseCard";
import arrow_forward from "../assets/arrow_forward.png";
// import axiosInstance from "../../../../axiosConfig";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import NotFoundPage from "./NotFoundPage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../store/slice/course.slice";

const CoursesSection = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();

  const [value, setValue] = useState("1");
  const allData = useSelector((store) => store?.course?.courseData);
  const categories = useSelector((store) => store?.course?.categories);
  const [mapData, setMapData] = useState(allData);

  console.log(">>>", allData);
  useEffect(() => {
    dispatch(getCourses());
  }, []);

  useEffect(() => {
    setMapData(allData);
  }, [allData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchCategoryCourse = (categoryId) => {
    if (categoryId === "all") {
      setMapData(allData);
    } else {
      const newData = allData.filter((allD) => allD?.category === categoryId);
      setMapData(newData);
    }
  };

  return (
    <>
      <Grid container className="flex  bg-white " sx={{ zIndex: "0" }}>
        <Grid
          item
          xs={6}
          className=" p-4 laptop:p-20  flex items-end bg-white  medium:py-6   medium:bg-black "
        >
          <Typography
            sx={{ top: "-12rem" }}
            className="pb-[6rem] text-[2.5rem] font-bold text-black relative laptop:top-12 laptop:text-[2.5rem] small:text-[1.5rem] small:-top-24 small:pl-3 medium:text-[2.2rem] medium:top-24 medium:pl-6"
          >
            Trending Courses
          </Typography>
        </Grid>
        <img
          height={320}
          width={1360}
          src={people}
          className="bg-black -mt-[20rem] mb-[0rem] w-full small:h-[8rem] medium:-mt-[12.5rem]"
          alt="DevLabs Alliance Course Section"
        />
      </Grid>

      {categories?.length === 0 ? (
        <NotFoundPage />
      ) : (
        <div className=" m-auto flex flex-col">
          <Box className="relative">
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                variant="scrollable"
                textColor="inherit"
                className="-mt-[6.5rem] small:-mt-[12rem] w-[40%] pl-[3rem] small:pl-[1.5rem] medium:pl-0 small:w-[90%] medium:mt-[1.5rem] medium:w-[90%] "
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "black",
                  },
                }}
              >
                <Tab
                  label="All"
                  value="1"
                  className="px-10 small:px-4"
                  sx={{ textTransform: "none" }}
                  onClick={() => fetchCategoryCourse("all")}
                />
                {categories?.map((category, index) => {
                  return (
                    <Tab
                      key={index}
                      label={
                        <span
                          style={{
                            fontWeight: "500",
                            textTransform: "none",
                          }}
                        >
                          {category?.name}
                        </span>
                      }
                      value={index + 2}
                      className="px-10 small:px-4"
                      sx={{ textTransform: "none" }}
                      onClick={() => fetchCategoryCourse(category?.name)}
                    />
                  );
                })}
              </TabList>
              {categories?.map((category, index) => {
                return (
                  <TabPanel key={index + 1} value={index + 2}>
                    <Grid
                      container
                      className=" extraLarge:w-[91rem] m-[auto] flex gap-0 small:w-full medium:w-full medium:px-0 medium:mx-0 "
                      spacing={1}
                      sx={{
                        display: "flex",
                        flexDirection: matches ? "column" : "row",
                        // justifyContent: "space-around",
                        gap: "40px",
                        padding: matches ? "0rem" : "0 4rem 0 4rem",
                        marginBottom: "3rem",
                      }}
                      // className="small:flex-col small:flex flex justify-around flex-col"
                    >
                      {matches ? (
                        <div className=" small:w-full  -z-0 ">
                          <Swiper
                            slidesPerView={matches ? 1.2 : 3}
                            // modules={[Autoplay, Navigation]}
                            className="mySwiper "
                            // loop="true"
                          >
                            {mapData?.length === 0 ? (
                              <div className="w-full">
                                <NotFoundPage />
                              </div>
                            ) : (
                              mapData?.slice(0, 6)?.map((myData, index) => (
                                <SwiperSlide key={index}>
                                  <CourseCard myData={myData} />
                                </SwiperSlide>
                              ))
                            )}
                          </Swiper>
                        </div>
                      ) : (
                        <>
                          {mapData?.length > 0 ? (
                            <>
                              {mapData?.slice(0, 6)?.map((myData, index) => {
                                return (
                                  <Grid
                                    key={index}
                                    style={{
                                      marginBottom: "2rem",
                                      paddingTop: "0.5rem",
                                      paddingLeft: "0.4rem",
                                    }}
                                    item
                                    xs={12} // Full width on mobile
                                    md={4} // 1/3 width on laptops
                                    className="medium:max-w-[50%] px-2"
                                  >
                                    <CourseCard myData={myData} />
                                  </Grid>
                                );
                              })}
                            </>
                          ) : (
                            <div className="w-full">
                              <NotFoundPage />
                            </div>
                          )}
                        </>
                      )}
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      className="flex justify-center pb-24 small:justify-start small:items-center cursor-pointer small:pb-8"
                    >
                      <a href="/courses">
                        <Typography className="text-2xl font-semibold text-blue pr-4 hover:cursor-pointer tracking-[0.3rem] small:tracking-normal small:text-lg">
                          View All Courses
                        </Typography>
                      </a>
                      <img
                        // draggable="false"
                        src={arrow_forward}
                        className="hover:cursor-pointer small:w-[24px] small:h-[24px]"
                        alt="sfdsfs"
                      />
                    </Grid>
                  </TabPanel>
                );
              })}

              <TabPanel
                className="medium:flex medium:justify-center  small:bg-[#FBFBFF] small:justify-start "
                value="1"
              >
                <Grid
                  container
                  spacing={1}
                  className="medium:w-full extraLarge:w-[91rem] m-[auto]  gap-0 small:w-full medium:px-0 medium:mx-0"
                  sx={{
                    display: "flex",
                    flexDirection: matches ? "column" : "row",
                    // justifyContent: "space-around",
                    padding: matches ? "0" : "0 4rem 0 4rem",
                    marginBottom: "3rem",
                  }}
                >
                  {matches ? (
                    <div className=" small:w-full -z-0 small:bg-[#FBFBFF] ">
                      <Swiper
                        slidesPerView={matches ? 1.2 : 3}
                        //   modules={[Autoplay, Navigation]}
                        className="mySwiper "
                        loop="true"
                      >
                        {mapData?.slice(0, 6)?.map((myData, index) => (
                          <SwiperSlide
                            className="small:pb-[1.5rem]"
                            key={index}
                          >
                            <CourseCard myData={myData} />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  ) : (
                    <>
                      {mapData &&
                        mapData?.slice(0, 6)?.map((myData, index) => {
                          return (
                            <Grid
                              key={index}
                              style={{
                                marginBottom: "2rem",
                                paddingTop: "0.5rem",
                                paddingLeft: "0.4rem",
                              }}
                              item
                              xs={12} // Full width on mobile
                              md={4} // 1/3 width on laptops
                              className="medium:max-w-[50%] px-2"
                            >
                              <CourseCard myData={myData} />
                            </Grid>
                          );
                        })}
                    </>
                  )}

                  <Grid
                    item
                    xs={12}
                    className="flex justify-center small:justify-start small:items-center pb-20 small:pb-8"
                  >
                    <a href="/courses">
                      <Typography className="text-2xl font-semibold text-blue pr-4 hover:cursor-pointer tracking-[0.3rem]  small:tracking-normal small:text-lg">
                        View All Courses
                      </Typography>
                    </a>
                    <img
                      //   draggable="false"
                      src={arrow_forward}
                      className="hover:cursor-pointer  small:w-[24px] small:h-[24px]"
                      alt="DevLabs Alliance Course Section"
                    />
                  </Grid>
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      )}
    </>
  );
};

export default CoursesSection;
