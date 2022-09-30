import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("New Language or Text");
    axios.post("https://translation.googleapis.com/language/translate/v2", {
      param: {
        q: text,
        target: language.value,
        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
      },
    });
  }, [language, text]);
  return <div></div>;
};

export default Convert;
