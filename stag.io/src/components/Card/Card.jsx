import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

import "./Card.css";

const Card = (props) => {
  console.log(props);
  const navigate = useNavigate();

  function renderTag() {
    let myTags = [];
    myTags = props.tags.split("#").slice(1);
    if (myTags.length >= 3) {
      return (
        <div className="right-container">
          <span className="tag">{myTags[0]}</span>
          <span className="tag">{myTags[1]}</span>
          <span className="tag">{myTags[2]}</span>
        </div>
      );
    }
    if (myTags.length == 2) {
      return (
        <div>
          <span className="tag">{myTags[0]}</span>
          <span className="tag">{myTags[1]}</span>
        </div>
      );
    }
    return <span className="tag">{myTags[0]}</span>;
  }

  return (
    <div
      className="card-container"
      onClick={() => {
        navigate("/DescricaoVaga", { state: props });
      }}
    >
      <div className="left-container">
        <div className="title_card">{props.tituloVaga}</div>
        <div className="company">{props.nomeEmpresa}</div>
      </div>
      {renderTag()}
    </div>
  );
};

export default Card;
