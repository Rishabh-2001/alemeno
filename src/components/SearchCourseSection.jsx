import CourseCard from "./CourseCard";
import { Grid, Typography, Button, useMediaQuery } from "@mui/material";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SearchCourseSection = ({ courseHeading, items }) => {
  //   const router = useRouter();
  const matches = useMediaQuery("(max-width:600px)");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1068, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1.2,
    },
  };

  return (
    <>
      <div className="py-[0.5rem] ">
        <div className="small:pl-[1rem] h-[auto]  pl-[5rem] pt-[2rem] small:mt-[3rem] w-[100%] flex bg-[#FBFBFE]">
          <div className="search_carosel_heading small:flex-col  flex  small:pl-0">
            <Typography
              sx={{
                fontWeight: 600,
                lineHeight: "3.25rem",
              }}
              className=" small:text-[1.4rem] small:font-bold text-[1.75rem] small:mb-[-1rem] small:leading-0 pb-2"
            >
              {courseHeading}
            </Typography>
            <Typography className="small:ml-0  small:self-start text-[1rem] small:text-[1rem] text-[#666666] ml-2 self-center">
              {`Total courses: ${items?.length}`}
            </Typography>
          </div>
        </div>
        <div className="">
          <div className="small:pl-0 small:pt-4  search_carousel small:justify-start small:pr-2  h-[25rem]  flex justify-center  my-own-custom-container pl-[5rem] pr-[5rem] bg-[#FBFBFE]    ">
            <Carousel
              // className="w-[100vw] flex gap-2 "
              className="w-[100vw] flex gap-2 small:pb-12 small:pl-4 "
              customTransition="all 1s linear"
              swipeable={true}
              draggable={true}
              arrows={true}
              focusOnSelect={true}
              showDots={matches ? true : false}
              slidesToSlide={1}
              responsive={responsive}
              renderArrowsWhenDisabled={false}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass=" carousel-item-padding-40-px"
            >
              {items?.map((item, index) => {
                return (
                  <>
                    <Grid key={index} xs={11} sm={11} md={11}>
                      <CourseCard
                        courseCategory={courseHeading}
                        myData={item}
                      />
                    </Grid>
                  </>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCourseSection;
