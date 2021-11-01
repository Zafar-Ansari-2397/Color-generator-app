import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  let bcg = rgb.join(",");
  //   ist way -
  // this is the function which is convert rgb value to hex value and in this function we pass our all rgb color with spread operator

  //  2nd way -
  //  pass the hex value as a prop in the color.hex and than u this in where u want this way when u dont want to use any ohter function like rgbToHex. this the simplest way.
  //   but in this if u want # symbol y have to set manually in the ist ways u dont have to set manually it is the   minor diiff in two ways

  // const hex = rgbToHex(...rgb);

  // set # symbol manually -
  const hexValue = `#${hexColor}`;
  console.log(bcg);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);
  return (
    <>
      <article
        className={`color ${index > 10 && "color-light"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        <p className='percent-value'>{weight}%</p>
        <p className='percent-value'>{hexValue}</p>
        {alert && <p className='alert'>Copied to Clipboard</p>}
      </article>
    </>
  );
};

export default SingleColor;
