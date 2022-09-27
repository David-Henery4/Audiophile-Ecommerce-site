import React from 'react'
import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <div className="back-btn-wrap">
      <Link to="/">
      <button className="back-btn-wrap__btn btn-back-basic">Go Back</button>
      </Link>
    </div>
  );
}

export default BackBtn