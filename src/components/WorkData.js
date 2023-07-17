import React, { useState } from 'react';
import "./WorkStyle.css";

function WorkData(props) {
  return (
    <div className="w-card">
      <div className="w-image">
        <a href={props.projectUrl}>
          <img alt="Loading..." src={props.image}/>
        </a>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default WorkData;
