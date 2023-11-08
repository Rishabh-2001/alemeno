import React from "react";
import Image1 from "../assets/typescript.png";
import Image2 from "../assets/r.png";
import Image3 from "../assets/programming.png";
import Image4 from "../assets/programming-programming-language-python-programming-logo-hd-wallpaper-preview.jpg";
// import Image5 from "../assets/php-programming-language.png";
import Image6 from "../assets/mysql.png";
import Image7 from "../assets/java.png";
import Image8 from "../assets/java-script.png";
import Image9 from "../assets/css-file.png";
import Image10 from "../assets/c-sharp.png";
// import Image11 from "../assets/c-logo.png";
import Image12 from "../assets/react.png";
import Image13 from "../assets/php.png";
import Image14 from "../assets/node-js.png";
import Image15 from "../assets/mysql-512.png";
import Image16 from "../assets/c-.png";
// import Image18 from "../assets/";
// import Image19 from "../assets/MarqueeImages/Image19.svg";
// import Image20 from "../assets/MarqueeImages/Image20.svg";
// import Image21 from "../assets/MarqueeImages/Image21.svg";
// import Image22 from "../assets/MarqueeImages/Image22.svg";
// import Image23 from "../assets/MarqueeImages/Image23.svg";
// import Image24 from "../assets/MarqueeImages/Image24.svg";
// import Image25 from "../assets/MarqueeImages/Image25.svg";
// import Image26 from "../assets/MarqueeImages/Image26.svg";
// import Image27 from "../assets/MarqueeImages/Image27.svg";


import Marquee from "react-fast-marquee";
import useMediaQuery from "@mui/material/useMediaQuery";

const HorizontalMarquee = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const tabMatches= useMediaQuery('(min-width: 750px) and (max-width: 1060px)')

  const colors = [
    Image1,
    Image2,
    Image3,
    Image4,
   
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    // Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,

  
  ];
  return (
    <div className="mt-3 mb-3 py-2 medium:mb-0 small:py-6 small:mt-4 medium:py-2  ">
      <Marquee duration={20}>
        {colors?.map((item, index) => (
          <div
            key={index}
            style={{
              margin: "0px",
              height: matches ? "12rem": "4rem",
              width: "16.6rem",
              display: "flex",
              justifyContent: "center",
            }}
            className="medium:h-[4rem]  small:h-[13rem]  "
          >
            <img  src={item} alt=" partners" width={matches ?60 :80} height={matches? 60 :80} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HorizontalMarquee;
