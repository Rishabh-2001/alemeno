import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import BookImage from "../assets/BookImage.svg";


const CourseCard = ({ courseCategory, myData }) => {
  const [uniqueId, setUniqueId] = React.useState("19838929188");
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    setTitle(myData?.name);
    setUniqueId(myData?.ID);
  }, [myData?.name, myData?.ID]);

  function truncated(str, maxLength) {
    if (str?.length > maxLength) {
      return str.slice(0, maxLength - 1) + "...";
    }
    return str;
  }
  // console.log("CDAta", courseCategory, myData)

  return (
    <Card className="small:w-[92%]  w-[96%]  h-auto  shadow-md mt-3  rounded-lg medium:w-full medium:h-full medium:flex medium:flex-col medium:justify-evenly medium:items-stretch ">
      <div className="bg-black h-24 ">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            // paddingRight: "10px",
            // paddingTop: "10px",
          }}
        >
          <Button className="bg-lightGrey text-white w-[150px] h-8 hover:bg-lightGrey dm-sans">
            New Course
          </Button>
        </div>
      </div>
      <div className="bg-blue h-2" />
      <CardContent className="pr-[1rem] pl-[1rem] ">
        <Typography
          sx={{
            padding: "0rem 1rem 0rem 0rem",
          }}
          className="text-md h-[1rem] small:h-[1.5rem]  medium:h-[1.5rem]  text-blue font-bold text-sm dm-sans uppercase"
        >
          {myData?.category
            ? truncated(myData?.category, 30)
            : truncated(myData?.category, 30)}
        </Typography>
        <Typography className="text-xl h-[3rem] text-moreBlue font-bold mt-[.7rem]">
          {myData?.name
            ? truncated(myData?.name, 40)
            : "Your Course Title will be Visible Here"}
        </Typography>
        <Grid className="flex content-center mt-[2rem] mb-[1.25rem]">
          <div style={{ marginTop: ".3rem", marginRight: ".3rem" }}>
            <img
              //   draggable="false"
              src={BookImage}
              alt="Dsdfsd"
            />
          </div>
          <Typography className="text-greyestGrey small:h-[2rem]  dm-sans">
            {myData?.courseType}
          </Typography>
        </Grid>
        <Grid className="flex content-center mb-[0.5rem]">
          <ClearAllIcon className="text-greyestGrey" />
          <Typography className="text-greyestGrey dm-sans">
            {myData?.numberOfModules || 0} Modules
          </Typography>
        </Grid>
      </CardContent>
      <Grid className="flex justify-center mb-5 ">
        <a
          href={`/courses/${myData?.ID}`}
          className="w-full flex justify-center"
        >
          <Button
            // size="large"
            sx={{
              padding: "9px 8px",
              fontWeight: "600",
              border: "1px solid #1A5AFA",
              width: "90%",
              display: "flex",
              textTransform: "none",
              borderRadius: "0.5rem",
            }}
            className="hover:bg-blue hover:text-white cursor-pointer"
          >
            <span
              style={{
                marginRight: "0.55rem",
                position: "relative",
                top: "-.05rem",
              }}
            >
              <AddIcon />
            </span>
            <span style={{ fontWeight: "700" }}> Explore </span>
          </Button>
        </a>
      </Grid>
    </Card>
  );
};

export default CourseCard;
