import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../store/slice/user.slice";

const Profile = () => {
  const [mapData, setMapData] = useState([]);
  const dispatch = useDispatch();

  const userData = useSelector((store) => store?.user?.userData);
  console.log("XXX", userData);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("token"))?.id;
    dispatch(getUserById(id));
  }, []);

  return (
    <div className="bg-white">
      <div className="w-4/5 mx-auto py-4">
        <div className="p-6 bg-gray-800">
          <h2 className=" text-3xl font-medium mb-4">My Profile: </h2>
          <Divider />
          <div className="mb-4">
            <Typography variant="h6" gutterBottom className="">
              Name: {userData?.userData?.name}
            </Typography>
            <Typography variant="h6" gutterBottom className="">
              Email: {userData?.userData?.email}
            </Typography>
            <Typography variant="h6" gutterBottom className="">
              Phone Number: {userData?.userData?.phoneNumber}
            </Typography>
          </div>
        </div>
        <h2 className=" text-3xl font-medium mb-4">My Courses: </h2>
        <div className="flex ">
          {userData?.enrolledCourseData?.length > 0 ? (
            userData?.enrolledCourseData?.slice(0, 6)?.map((myData, index) => (
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
                className="medium:max-w-[50%] px-2  "
              >
                <CourseCard myData={myData} />
              </Grid>
            ))
          ) : (
            <div>
              <h2 className="text-2xl text-black">
                You haven't enrolled in any Course
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
