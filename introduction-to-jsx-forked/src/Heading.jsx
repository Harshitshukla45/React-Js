import React from "react";

function Headings() {
  const date = new Date(2022, 11, 28, 22);
  const currentTime = date.getHours();

  var greeting;
  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "su-prabhaat";
    customStyle.color = "green";
  } else if (currentTime < 18) {
    greeting = "su-dopahar";
    customStyle.color = "red";
  } else {
    greeting = "shubh-ratri";
    customStyle.color = "blue";
  }

  return (
    <div>
      <h1 style={customStyle}>{greeting}</h1>
    </div>
  );
}
export default Headings;
