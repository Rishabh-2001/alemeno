import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = ({ categories }) => {
  const matches = useMediaQuery("(max-width:600px)");

  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    setCurrentYear(currentYear);
  }, []);

  return (
    <>
      <Grid
        className="h-20 flex small:gap-4 justify-center items-center medium:px-8"
        sx={{ backgroundColor: "#04060A !important" }}
      >
        {matches ? null : (
          <>
            <Typography className="pr-8 text-greyestGrey text-sm medium:text-[.8rem] medium:pr-3">
              `Copyright © {currentYear} ABC Corp. All rights Reserved`
            </Typography>
            <Typography className="pr-8 text-greyestGrey font-semibold">
              |
            </Typography>
          </>
        )}
        <a href="#">
          <Typography className="small:text-[0.8rem] small:pr-0 small:text-center pr-8 text-greyestGrey text-sm cursor-pointer medium:text-[.8rem] medium:pr-3">
            Refund & Reschedule Policy
          </Typography>
        </a>
        <a href="#" target="_blank">
          <Typography className="small:text-[0.8rem] small:pr-0 pr-8 text-greyestGrey text-sm cursor-pointer medium:text-[.8rem] medium:pr-3">
            Privacy Policy
          </Typography>
        </a>
        <a href="#" target="_blank">
          <Typography className="small:text-[0.8rem] small:pr-0 pr-8 text-greyestGrey text-sm cursor-pointer medium:text-[.8rem] medium:pr-3">
            Terms of Use
          </Typography>
        </a>
      </Grid>
    </>
  );
};

export default Footer;
