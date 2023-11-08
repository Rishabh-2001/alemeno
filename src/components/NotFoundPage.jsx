// import Image from "next/image";
import React, { useEffect, useState } from "react";
import NotFound from "../assets/NotFound.svg";
import { Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <img  alt="DevLabs Alliance No Course Found" src={NotFound} style={{ display: "math" }} />
          <div>
            <Typography sx={{ color: "#333333", fontSize: "1.75rem" }}>
              No Course Found
            </Typography>
            <Typography sx={{ color: "#333333", fontSize: "1rem" }}>
              We&apos;re constantly updating our course offerings to provide you
            </Typography>
            <Typography sx={{ color: "#333333", fontSize: "1rem" }}>
              with the best learning opportunities.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
