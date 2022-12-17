import React from "react";
import { Link } from "react-router-dom";

const LatestNew = ({ title, date, setPostId, id }) => {
  return (
    <Link
      to={`/post/${id}`}
      className="latest-new"
      onClick={() => setPostId(id)}
    >
      <h3 className="latest-new-date">{date}</h3>
      <h2 className="latest-new-title">{title}</h2>
    </Link>
  );
};

export default LatestNew;
