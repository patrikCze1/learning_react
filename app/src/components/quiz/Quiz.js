import React, { useEffect } from "react";
import Menu from "./Menu";
import Loading from "../Loading";
import Question from "./Question";
import CategoryForm from "./CategoryForm";
import { shallowEqual, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchQuestions, getCategories } from "../../actions/quizActions";

function Quiz(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizReducer);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (state.category)
      dispatch(fetchQuestions(state.category));
  }, [state.category])

  if (state.loading) {
    return <Loading />;
  }

  return (
    <div>
      <Menu {...state} />
      <CategoryForm {...state} />

      {
        state.questions.map((question, index) => (
          <Question {...question} index={index} key={index} />
        ))
      }
      
    </div>
  );
}

export default Quiz;
