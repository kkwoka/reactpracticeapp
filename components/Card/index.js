import React, { useContext } from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";
import UserContext from '../../utils/UserContext';

function Card() {

  const { user, handleBtnClick } = useContext(UserContext);
  return (
    <div>
      <CardHeading title={user.title} />
      <CardImg image={user.image} />
      <CardBody language={user.language} />
      {!user.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: user.image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: user.image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="next"
      />
    </div>
  );
}

export default Card;
