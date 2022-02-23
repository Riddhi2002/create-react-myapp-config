import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function renderDish({ dish }) {
  if (dish == null) {
    return <div></div>;
  } else {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle> {dish.name}</CardTitle>
            <CardText> {dish.description} </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
function renderComments({ comments }) {
  const com = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }).format(new Date(comment.date))}
        </p>
      </li>
    );
  });
  if (comments == null) {
    return <div></div>;
  } else {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">{com}</ul>
      </div>
    );
  }
}

const DishDetail = (props) => {
  if (props.dish == null) {
    return <div></div>;
  }

  const dishItem = renderDish(props.dish);
  const dishComment = renderComments(props.dish.comments);

  return (
    <div className="container">
      <div className="row">
        {dishItem}
        {dishComment}
      </div>
    </div>
  );
};

export default DishDetail;
