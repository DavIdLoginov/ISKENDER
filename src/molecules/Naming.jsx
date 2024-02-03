import React from "react";

const Naming = ({ title, podTitle }) => {
  return (
    <>
      {podTitle !== "" ? (
        <div className="title__cont">
          <h3 className="section__title">{title}</h3>
          <a href="/">{podTitle}</a>
        </div>
      ) : (
        <h3 className="section__title section__title-one">{title}</h3>
      )}
    </>
  );
};

export default Naming;
