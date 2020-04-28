import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScore, submitQuestion } from "../../actions/quizActions";

export default function Answer({ text, correct, submited, index }) {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");

  useEffect(() => {
    if (correct && submited) {
        setColor("green");
    }
  }, [submited])

  const handleClick = () => {
    if (submited === undefined) {
      if (correct) {
        setColor("green");
        dispatch(setScore());
      } else {
        setColor("red");
      }
      dispatch(submitQuestion(index));
    }
  };

  return (
    <li
      className="collection-item"
      onClick={() => handleClick()}
      style={{ backgroundColor: color }}
    >
      {text}
    </li>
  );
}
