const initialState = {
  questions: [],
  categories: [],
  category: "",
  loading: true,
  score: 0,
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_QUESTIONS":
      return Object.assign({}, state, {
        questions: action.questions,
        category: action.category,
        loading: false,
        score: 0,
      });

    case "SET_SCORE":
      state.score = state.score + 1;
      return Object.assign({}, state);

    case "SUBMIT_QUESTION":
      state.questions[action.index].submited = true;
      return Object.assign({}, state);

    case "GET_CATEGORIES":
      return Object.assign({}, state,{
        categories: action.categories,
        loading: false,
      });

    case "SET_CATEGORY":
      return Object.assign({}, state, {category: action.category})

    default:
      return state;
  }
}
