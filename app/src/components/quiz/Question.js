import React from "react";
import Answer from "./Answer";

const Question = ({ text, answers, submited, index, }) => {
  return (
    <div>
      <p>{text}</p> 
      <ul className="collection">
        {answers.map((answer, key) => (
          <Answer key={key} {...answer} index={index} submited={submited} />
        ))}
      </ul>
    </div>
  );
};

export default Question;
