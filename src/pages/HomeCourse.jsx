import React, { useEffect, useState } from 'react'
import worldMap from '../assets/worldMap1.png';
import search from '../assets/searchIcon.png';
import divider from "../assets/divider.svg";
import { SearchOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import HorizontalMarquee from '../components/HorizontalMarquee';
import CoursesSection from '../components/CoursesSection';
import Search from '../components/Search';


const HomeCourse = () => {
    const studentNumber = 343;
    const CourseNumber =64
    const dashboardTrainerNumber =33;
    const matches = useMediaQuery("(max-width:600px)");
    const mediumMatches = useMediaQuery("(max-width:1068px)");
    const matchesNavbar = useMediaQuery("(max-width:1023px)");

const [currentYear, setCurrentYear] = useState();

useEffect(() => {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  setCurrentYear(currentYear);
}, []);
  return (
    <div className="relative small:bg-black medium:bg-black">
    <Grid
      container
      className="small:pt-[2rem] bg-darkBackground flex justify-between items-center content-center h-full "
    >
      <Grid
        style={{
          backgroundImage: matches ? `url(${worldMap.src})` : "",
          backgroundPosition: matches ? "left" : "",
          backgroundSize: matches ? "cover" : "",
        }}
        item
        xs={12}
        sm={6}
        className="small:pb-[3rem]  pb-[7rem] pl-16 -mt-[2rem] small:mt-[0rem] small:pl-4  medium:mt-[0rem] large:mt-[0rem] medium:pl-10 large:pl-16 extraLarge:mt-[0rem] small:pt-0 pt-[3rem] extraLarge:pl-28"
      >
        <Typography className="text-7xl font-semibold text-white w-44 p-1 small:text-4xl medium:text-4xl ">
          Career Transformation
        </Typography>
        <Typography className="text-4xl text-white p-4 small:p-1 small:text-[1.5rem] medium:pl-2">
          begins here.
        </Typography>
        <TextField
          id="main-search-bar"
  
          sx={{
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                border: "none",
              },
            },
          }}
          className="bg-white small:w-[90%] w-5/6 m-4 rounded-lg small:mx-2 my-4 medium:ml-2"
          placeholder="Search topics, courses, etc.."
          InputProps={{
            endAdornment: (
              <img
                src={search}
                alt=" Landing Page"
                // onClick={() => router.push(`/search/${searchValue}`)}
                className="cursor-pointer "
              />
            ),
          }}
        />
        <Grid className="small:w-[90vw] small:flex small:flex-wrap small:gap-[0.5rem] p-4 small:mb-10 small:p-0 medium:pl-2">
       
        </Grid>

        <Grid className=" p-4 flex small:p-0 small:relative small:top-[127px]  small:justify-around medium:pl-2">
          <Typography className="text-3xl text-lightWhite flex flex-col items-center mr-4 small:text-2xl small:mr-2">
            +{studentNumber}
            <span className="text-[1rem] text-darkWhite font-light small:text-[1rem]">
              STUDENTS
            </span>
          </Typography>
          <img
        
            src={divider}
            alt=" Landing Page"
          />
          <Typography className="text-3xl text-lightWhite flex flex-col small:text-2xl items-center ml-6 mr-6 small:mr-2 small:ml-2">
            +{CourseNumber}{" "}
            <span className=" small:text-[1rem] text-[1rem] text-darkWhite font-light">
              COURSES
            </span>
          </Typography>
          <img
           
            src={divider}
            alt=" Landing Page"
          />
          <Typography className="text-3xl text-lightWhite flex flex-col items-center ml-4 small:text-2xl small:ml-2">
            +{dashboardTrainerNumber}{" "}
            <span className="text-[1rem] text-darkWhite font-light small:text-[1rem]">
              INSTRUCTORS
            </span>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        className="pt-8 hidden laptop:justify-end laptop:block absolute top-0 right-0"
      >
        <img
          className="pt-[6rem]"
          width={680}
          height={454}
          src="https://d1x74kvi62ltwo.cloudfront.net/assets/images/LandingImages/world.svg"
          alt="Landing Page"
        />
      </Grid>
      <Grid
        item
        xs={12}
        className="h-66 mb-16 laptop:mb-0 medium:mb-0 small:mb-12"
        sx={{
          zIndex: "0",
          background: matches
            ? ""
            : "linear-gradient(180deg, #0E1117 0%, rgba(14, 17, 23, 0.00) 100%)",
        }}
      >
        <HorizontalMarquee />
      </Grid>
    </Grid>

    <div className="bg-[#FBFBFF]">
      <Grid item xs={12} className=" h-full rounded-tl-[7.5rem]">
        <CoursesSection />
      </Grid>
    </div>



  </div>
  )
}

export default HomeCourse