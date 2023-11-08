import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import FrontHeaderBackground from "../../../assets/imgs/CourseCategoryimgs/FrontHeaderBackground.png";
// import img from "next/img";
// import MaskGroup from "../../../assets/imgs/CourseCategoryimgs/MaskGroup.png";
import hourGlass from "../assets/hourglass.svg";
import person from "../assets/person.svg";
import clearAll from "../assets/clear_all.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import sort from "../assets/sort.svg";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCourseById } from "../store/slice/course.slice";
import { addUserToCourse, getACourse } from "../db/firebase.db";
import { toast } from "react-toastify";
// import { capitalizeFirstLetter } from "@/utils";
// import a from "next/a";
// import axiosInstance from "../../../../axiosConfig";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const InnerCourse = (data) => {
  //   const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
  const matches = useMediaQuery("(max-width:600px)");
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "12px",
  };

  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState("");
  const [price, setPrice] = useState(null);
  const [show_live_prize, setShowLivePrize] = useState(false);
  const [courseData, setCourseData] = useState();
  const getStartDateOfUpcomingBatch = (batches) => {
    if (batches.length === 0) {
      return "-";
    }
    const recentBatch = batches[batches.length - 1];

    const date = new Date(recentBatch?.startDate);
    const year = date.getFullYear().toString();
    const month = date.getMonth();
    return `${date.getDate()}th ${monthNames[month]} '${year?.slice(2)} `;
  };
  const { id } = useParams();
  console.log("GOT id is:", id);
  const [open, setOpen] = React.useState(false);
  const handleOpenConfirmModal = () => setOpen(true);
  const handleCloseConfirmModal = () => setOpen(false);
  const [enrollStatus, setEnrollStatus] = useState(false);

  useEffect(() => {
    let userSaved = localStorage.getItem("token");
    const enrolledCourses = JSON.parse(userSaved)?.enrolledCourse;
    if (enrolledCourses) {
      if (enrolledCourses.includes(id)) {
        setEnrollStatus("Enrolled");
      } else {
        setEnrollStatus("Enroll");
      }
    } else {
      setEnrollStatus("Enroll");
    }
  }, []);

  async function getCourseDataByID(id) {
    const { data } = await getACourse(id);
    setCourseData(data);
  }
  async function handleEnroll() {
    const isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      handleOpenConfirmModal();
    } else {
      toast.error("Please Log in first");
    }
  }
  async function handleAccept() {
    let userSaved = localStorage.getItem("token");
    const email = JSON.parse(userSaved)?.email;
    const userId = JSON.parse(userSaved)?.id;
    const payload = {
      email,
      id,
      userId,
    };
    const { data } = await addUserToCourse(payload);
    toast.success(data);
    setEnrollStatus("Enrolled");
    handleCloseConfirmModal();

    if (userSaved) {
      let parsedData = JSON.parse(userSaved);
      // Check if 'enrolledCourse' key exists in the localStorage object
      if (parsedData.enrolledCourse) {
        // If 'enrolledCourse' key exists, push the new ID to the existing array
        parsedData.enrolledCourse.push(id);
      } else {
        // If 'enrolledCourse' key doesn't exist, create a new array with the new ID
        parsedData.enrolledCourse = [id];
      }

      localStorage.setItem("token", JSON.stringify(parsedData));
    } else {
      toast.error("Please Log in first");
    }
  }

  async function handleDeny() {
    handleCloseConfirmModal();
  }

  useEffect(() => {
    getCourseDataByID(id);
  }, [id]);

  // const [country, setCountry] = React.useState("");
  //   React.useEffect(() => {
  //     const fetchCountry = async () => {
  //       try {
  //         const response = await axiosInstance.get(
  //           `https://ipinfo.io/?token=9ecceabd15825b`
  //         );
  //         // console.log("useEffect run");
  //         // console.log("response" , response)
  //         // setCountryTocheck(response?.data?.country);
  //         console.log("CountryTocheck", response?.data?.country);
  //         if (response?.data?.country === "IN") {
  //           setCountry(response?.data?.country);
  //           setCountryCode("₹");
  //         } else {
  //           setCountryCode("$");
  //         }
  //         window.localStorage.setItem("country", response?.data?.country);
  //       } catch (error) {
  //         console.log("useEffect run error", error);
  //       }
  //     };
  //     fetchCountry();
  //   });

  //   const handlePrice = (data) => {
  //     data?.map((item, index) => {
  //       console.log("live is :", item);
  //       if (item?.name === "live") {
  //         setShowLivePrize(item?.publish);
  //         const fetchCountry = async () => {
  //           try {
  //             const response = await axiosInstance.get(
  //               `https://ipinfo.io/?token=9ecceabd15825b`
  //             );
  //             // console.log("useEffect run");
  //             // console.log("response" , response)
  //             // setCountryTocheck(response?.data?.country);
  //             console.log("CountryTocheck", response?.data?.country);
  //             if (response?.data?.country === "IN") {
  //               setCountry(response?.data?.country);
  //               setCountryCode("₹");
  //               setPrice(item?.inrAmount);
  //             } else {
  //               setCountryCode("$");
  //               setPrice(item?.dollorAmount);
  //             }
  //             window.localStorage.setItem("country", response?.data?.country);
  //           } catch (error) {
  //             console.log("useEffect run error", error);
  //           }
  //         };
  //         fetchCountry();
  //         // if (country === "IN") {
  //         //   // setCountryCode("₹");
  //         // setPrice(item?.inrAmount);
  //         // } else {
  //         // setPrice(item?.dollorAmount);
  //         //   // setCountryCode("$");
  //         // }
  //       }
  //     });
  //   };

  //   useEffect(() => {
  //     // axiosInstance
  //     //   .get(`https://ipinfo.io/?token=9ecceabd15825b`)
  //     //   .then((res) => setCountryCode(res?.data?.country));

  //     handlePrice(data?.data?.trainingPlans);
  //   }, []);

  // console.log(
  //   "data in the header ->",
  //   data?.data?.courseMedia.split("/").slice(-1)[0].split(".")[0]
  // );

  return (
    <div>
      <div
        style={{ position: "relative" }}
        className="bg-[#04060A] small:h-[auto] h-[58rem] flex medium:h-fit"
        sx={{
          background:
            "linear-gradient(180deg, #0E1116 0%, #25282D 34.85%, #FFF 100%)",
        }}
      >
        <div
          style={{ zIndex: "1" }}
          className="small:pl-[2rem] small:h-[100%] small:pb-[5rem] small:pr-[1.5rem] small:w-[100%] h-[65rem]  w-[68vw] flex flex-col pl-[5rem] pt-[3rem] medium:w-[60vw]"
        >
          <p
            style={{ fontWeight: "400", fontSize: "1rem", lineHeight: "150%" }}
            className=" small:text-[0.85rem]  text-[#808080] pb-4 small:pb-[0rem]"
          >
            <a href={"/"}>
              Home /
              <a href={`/category/${courseData?.slugName}`}>
                {courseData?.category} /
              </a>{" "}
            </a>
            <span style={{ color: "white" }}>{courseData?.name}</span>
          </p>
          {matches ? (
            <>
              <div>
                <img
                  className="small:hidden"
                  //   draggable="false"
                  src={data?.data?.courseMedia}
                  width={400}
                  height={200}
                  style={{
                    borderRadius: "1rem",
                    // paddingRight:"2rem"
                  }}
                  alt={
                    data?.data?.courseMedia
                      ?.split("/")
                      .slice(-1)[0]
                      .split(".")[0]
                  }
                />
              </div>
            </>
          ) : null}

          <div className="text-base w-[70%] pt-3 pb-1 text-blue">
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "2rem",
                lineHeight: "3.25rem",
                wordWrap: "break-word", // Add this line to enable word wrapping
              }}
              variant="h6"
              className="small:text-[0.8rem]"
            >
              <span style={{ textTransform: "Uppercase" }}>
                {courseData?.name}
              </span>
            </Typography>
          </div>

          <div className="text-base pb-4 text-lightWhite">
            <Typography
              sx={{
                fontWeight: 600,
                // fontSize: "2.5625rem",
                lineHeight: "3.25rem",
              }}
              variant="h3"
              className="small:text-[1.4rem] small:w-[100%] w-[80%] small:leading-[2rem] text-[1.25rem] medium:text-[24px] medium:leading-7"
            >
              {courseData?.about}
            </Typography>
          </div>

          {matches ? (
            <div className="pb-[7rem] pt-[1.5rem] w-[90%] flex small:pb-[2rem] small:pt-[0.3rem]">
              <div className="small:flex-row small:gap-3 small:flex-wrap  flex flex-wrap  ">
                <div className="flex gap:10px">
                  <div className="small:w-[9.5rem] flex items-center mt-[10px]">
                    <img
                      src={hourGlass}
                      //   draggable="false"
                      className="small:w-[1.5rem] small:h-[1.5rem] h-[1.25rem] w-[1.2rem] mr-2"
                      alt=" Course Page"
                    />
                    <div className="text-lightWhite pl-[0.5rem] large:mr-[0.8rem] extraLarge:mr-[3rem] pr-[2rem]">
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          lineHeight: "1.8rem",
                          color: "#F2F2F2",
                          lineHeight: "130%",
                        }}
                        variant="h6"
                        className="small:text-[0.82rem]"
                      >
                        +{courseData?.HoursRequired} Hours
                      </Typography>
                      <Typography
                        variant="h7"
                        style={{
                          fontWeight: "500",
                          lineHeight: "150%",
                          fontSize: ".8rem",
                        }}
                        className="small:text-[0.77rem] text-[#808080]"
                      >
                        Practical&nbsp;Session
                      </Typography>
                    </div>
                  </div>

                  <div className="small:w-[9.5rem] flex items-center mt-[10px]">
                    <img
                      src={person}
                      className="small:w-[1.5rem] small:h-[1.5rem] h-[1.25rem] w-[1.2rem] mr-2"
                      alt="sdfdsf Alliance Course Page"
                      //   draggable="false"
                    />
                    <div className="text-lightWhite pl-[0.5rem] large:mr-[0.8rem] extraLarge:mr-[3rem] pr-[2rem] small:pr-0">
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          lineHeight: "2rem",
                          color: "#F2F2F2",
                          lineHeight: "130%",
                        }}
                        variant="h6"
                        className="small:text-[0.82rem]"
                      >
                        {courseData?.studentsEnroled}
                      </Typography>
                      <Typography
                        variant="h7"
                        style={{
                          fontWeight: "500",
                          lineHeight: "150%",
                          fontSize: ".8rem",
                        }}
                        className="small:text-[0.77rem] text-[#808080]"
                      >
                        Students&nbsp;Enrolled
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="flex gap:10px">
                  <div className="small:w-[9.5rem] flex items-center mt-[10px]">
                    <img
                      src={sort}
                      //   draggable="false"
                      className="small:w-[1.5rem] small:h-[1.5rem] h-[1.25rem] w-[1.2rem] mr-2"
                      alt="sdfdsf Alliance Course Page"
                    />
                    <div className="text-lightWhite pl-[0.5rem] large:mr-[0.8rem] extraLarge:mr-[3rem] pr-[2rem]">
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          lineHeight: "2rem",
                          color: "#F2F2F2",
                          lineHeight: "130%",
                        }}
                        variant="h6"
                        className="small:text-[0.82rem]"
                      >
                        {courseData?.courseLevel}
                      </Typography>
                      <Typography
                        variant="h7"
                        style={{
                          fontWeight: "500",
                          lineHeight: "150%",
                          fontSize: ".8rem",
                        }}
                        className="small:text-[0.77rem] text-[#808080]"
                      >
                        Level
                      </Typography>
                    </div>
                  </div>

                  <div className="small:w-[9.5rem] flex items-center mt-[10px]">
                    <img
                      //   draggable="false"
                      src={clearAll}
                      className="small:w-[1.5rem] small:h-[1.5rem] h-[1.25rem] w-[1.2rem] mr-2"
                      alt="sdfdsf Alliance Course Page"
                    />
                    <div className="text-lightWhite border-[#A6A6A6] large:mr-[0.8rem] extraLarge:mr-[3rem]  pl-[0.5rem] pr-[2rem]">
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          lineHeight: "2rem",
                          color: "#F2F2F2",
                          lineHeight: "130%",
                          lineHeight: "130%",
                        }}
                        variant="h6"
                        className="small:text-[0.82rem]"
                      >
                        {courseData?.numberOfModules}
                      </Typography>
                      <Typography
                        variant="h7"
                        style={{
                          fontWeight: "500",
                          lineHeight: "150%",
                          fontSize: ".8rem",
                        }}
                        className="small:text-[0.77rem] text-[#808080]"
                      >
                        Modules
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div>
            <p
              style={{
                fontWeight: "400",
                lineHeight: "180%",
                fontSize: "1rem",
                wordWrap: "break-word",
              }}
              className="small:text-[0.8rem] small:text-justify large:leading-6 medium:leading-6 small:leading-6 leading-9 small:w-[85vw] w-[50vw] pb-[1rem] medium:mb-[2rem] text-[#E6E6E6] medium:min-h-fit max-h-[400px]"
            >
              {data?.data?.courseDesc &&
                data?.data?.courseDesc?.split("\n")?.map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    <br />
                  </React.Fragment>
                ))}
            </p>
            {matches ? (
              <></>
            ) : (
              <div className="pb-[4rem] pt-[1.5rem] w-[90%] flex medium:pt-12  medium:w-full">
                <div className="small:flex-row small:gap-3 small:flex-wrap  flex flex-wrap medium:flex-wrap medium:gap-4  medium:items-start ">
                  <div className="small:w-[9.5rem] flex items-center mt-[10px] medium:flex-1">
                    <img
                      src={hourGlass}
                      draggable="false"
                      className="small:w-[1.5rem] small:h-[1.5rem] h-[1.25rem] w-[1.2rem] mr-2"
                      alt="sdfdsf Alliance Inner Course Page"
                    />
                    <div className="text-lightWhite pl-[0.5rem] large:mr-[0.8rem] extraLarge:mr-[3rem] pr-[2rem]">
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          lineHeight: "1.8rem",
                          color: "#F2F2F2",
                          lineHeight: "130%",
                        }}
                        variant="h6"
                        className="small:text-[0.82rem]"
                      >
                        +{courseData?.HoursRequired} Hours
                      </Typography>
                      <Typography
                        variant="h7"
                        style={{
                          fontWeight: "500",
                          lineHeight: "150%",
                          fontSize: ".8rem",
                        }}
                        className="small:text-[0.77rem] text-[#808080]"
                      >
                        Practical&nbsp;Session
                      </Typography>
                    </div>
                  </div>

                  <div className="small:w-[9.5rem] flex items-center mt-[10px] medium:flex-1">
                    <img
                      src={person}
                      className="small:w-[1.5rem] small:h-[1.5rem] h-[1.25rem] w-[1.2rem] mr-2"
                      alt="sdfdsf Alliance Inner Course Page"
                      //   draggable="false"
                    />
                    <div className="text-lightWhite pl-[0.5rem] large:mr-[0.8rem] extraLarge:mr-[3rem] pr-[2rem]">
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          lineHeight: "2rem",
                          color: "#F2F2F2",
                          lineHeight: "130%",
                        }}
                        variant="h6"
                        className="small:text-[0.82rem]"
                      >
                        {courseData?.studentsEnroled}
                      </Typography>
                      <Typography
                        variant="h7"
                        style={{
                          fontWeight: "500",
                          lineHeight: "150%",
                          fontSize: ".8rem",
                        }}
                        className="small:text-[0.77rem] text-[#808080]"
                      >
                        Students&nbsp;Enrolled
                      </Typography>
                    </div>
                  </div>

                  <div className="small:w-[9.5rem] flex items-center mt-[10px] medium:flex-1">
                    <img
                      src={sort}
                      //   draggable="false"
                      className="small:w-[1.5rem] small:h-[1.5rem] h-[1.25rem] w-[1.2rem] mr-2"
                      alt="sdfdsf Alliance Inner Course"
                    />
                    <div className="text-lightWhite pl-[0.5rem] large:mr-[0.8rem] extraLarge:mr-[3rem] pr-[2rem]">
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          lineHeight: "2rem",
                          color: "#F2F2F2",
                          lineHeight: "130%",
                        }}
                        variant="h6"
                        className="small:text-[0.82rem]"
                      >
                        {courseData?.courseLevel}
                      </Typography>
                      <Typography
                        variant="h7"
                        style={{
                          fontWeight: "500",
                          lineHeight: "150%",
                          fontSize: ".8rem",
                        }}
                        className="small:text-[0.77rem] text-[#808080]"
                      >
                        Level
                      </Typography>
                    </div>
                  </div>

                  <div className="small:w-[9.5rem] flex items-center mt-[10px] medium:flex-1">
                    <img
                      draggable="false"
                      src={clearAll}
                      className="small:w-[1.5rem] small:h-[1.5rem] h-[1.25rem] w-[1.2rem] mr-2"
                      alt="sdfdsf Alliance Inner Courses"
                    />
                    <div className="text-lightWhite border-[#A6A6A6] large:mr-[0.8rem] extraLarge:mr-[3rem]  pl-[0.5rem] pr-[2rem]">
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          lineHeight: "2rem",
                          color: "#F2F2F2",
                          lineHeight: "130%",
                          lineHeight: "130%",
                        }}
                        variant="h6"
                        className="small:text-[0.82rem]"
                      >
                        {courseData?.numberOfModules}
                      </Typography>
                      <Typography
                        variant="h7"
                        style={{
                          fontWeight: "500",
                          lineHeight: "150%",
                          fontSize: ".8rem",
                        }}
                        className="small:text-[0.77rem] text-[#808080]"
                      >
                        Modules
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <div className="small:flex-col small:gap-2 medium:mt-[-3rem] large:mt-[-2.5rem] flex justify-space items-center"> */}
          <div className="small:flex-col small:gap-2 large:mt-[-0.5rem] extraLarge:-mt-8 flex justify-space  items-end small:justify-center small:items-center">
            <Button
              // href="#section5"
              //   onClick={() => scrollToSection("section5")}
              style={{ borderRadius: ".5rem" }}
              className="small:w-[100%] h-[4rem] large:mt-[2rem] w-[18.5rem] p-[0.5rem 2rem] text-[1rem] hover:bg-[#487BFB] bg-blue z-50 small:mb-[1rem]"
              variant="contained "
              onClick={handleEnroll}
              disabled={enrollStatus === "Enroll" ? false : true}
            >
              <span
                style={{
                  fontWeight: "400",
                  textTransform: "none",
                  color: "#ffffff",
                }}
                className="small:text-[1rem] medium:text-[.85rem]"
              >
                {/* course/react-js-certification-training-course */}
                {enrollStatus}
                {show_live_prize && price > 0 ? (
                  <span>{` FOR ${countryCode}  ${price}`} </span>
                ) : (
                  " "
                )}
              </span>
            </Button>

            {data?.data?.batch?.length > 0 ? (
              <>
                <Divider
                  orientation="vertical"
                  className="border-[#808080] border-[1.5px] h-4/5 ml-[2rem]"
                />

                <div className="small:ml-0 small:pl-0 pl-[2rem]">
                  {/* <Typography
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: ".5rem",
                      fontWeight: "400",
                      color: "#E6E6E6",
                    }}
                    className="small:text-[1rem] tracking-tighter medium:text-[15px]"
                  >
                    Next Batch Starting on{" "}
                    {getStartDateOfUpcomingBatch(data?.data?.batch)}
                  </Typography> */}
                  {/* <Typography
                    style={{
                      color: "#E6E6E6",
                      fontSize: "0.9rem",
                      textDecoration: "underline",
                      fontWeight: "400",
                    }}
                    className="small:text-[0.75rem]  medium:text-[11px]  text-[#E6E6E6]"
                  >
                    <a href="#section5" className="cursor-pointer">
                      See More Batches
                    </a>
                  </Typography> */}
                </div>
              </>
            ) : null}
            {matches ? (
              <>
                <div>
                  <img
                    draggable="false"
                    src={data?.data?.courseMedia}
                    width={400}
                    height={200}
                    style={{
                      borderRadius: "1rem",
                      // paddingRight:"2rem"
                    }}
                    alt={
                      data?.data?.courseMedia
                        ?.split("/")
                        .slice(-1)[0]
                        .split(".")[0]
                    }
                  />
                </div>
              </>
            ) : null}
          </div>
        </div>

        {matches ? null : (
          <>
            <img
              className="small:h-[15rem] medium:h-[15rem] medium:w-[13rem] medium:right-[4rem] large:right-[3rem] top-[6rem] mt-[4rem] right-[6rem] absolute large: h-[17rem]"
              draggable="false"
              src={data?.data?.courseMedia}
              width={400}
              height={200}
              style={{
                borderRadius: "1rem",
              }}
              alt={
                data?.data?.courseMedia?.split("/").slice(-1)[0].split(".")[0]
              }
            />
          </>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleCloseConfirmModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between items-center mb-2">
            <Typography
              id="modal-modal-title text-2xl font-medium "
              variant="h6"
              component="h2"
            >
              Confirmation
            </Typography>
          </div>
          <Divider />

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are You sure to Enroll in {courseData?.name} Course ?
          </Typography>

          <div className="w-full flex gap-2 mt-8">
            <button
              className="bg-[#ea6b6b] cursor-pointer flex flex-[1] text-white px-6 py-2 text-center font-medium text-xl rounded-md"
              onClick={handleDeny}
            >
              No
            </button>
            <button
              className="bg-blue rounded-md cursor-pointer text-white flex flex-[1] px-6 py-2 text-center font-medium text-xl"
              onClick={handleAccept}
            >
              Yes
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default InnerCourse;
