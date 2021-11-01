import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  let bcg = rgb.join(",");

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
