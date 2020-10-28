import React from "react";
import ReactDOM from 'react-dom';
import {Component} from 'react';

const Hi = () =>{
   return ( 
      <h1>반갑습니다.!</h1>
   );
}

ReactDOM.render(
  <Hi />,
  document.querySelector('#hello')
);