import React from "react";
import "./Comments.css";

const Comments = props => (
  <div className="form-group">
    <input className="form-control input-lg" type="text" {...props} />
  </div>
);

export default Comments;
