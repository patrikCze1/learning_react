const requestQuestions = (category) => {
  return {
    type: "REQUEST_QUESTIONS",
    category,
  };
};

function receiveQuestions(category, json) {
  return {
    type: "RECEIVE_QUESTIONS",
    category,
    questions: Object.assign([], json),
  };
}

export function invalidateCategory(category) {
  return {
    type: "INVALIDATE_CATEGORY",
    category,
  };
}

export function fetchQuestions(category) {
  return function (dispatch) {
    dispatch(requestQuestions(category));

    return fetch(
      `http://cocktail-trivia-api.herokuapp.com/api/category/${category}`
    )
      .then(
        (res) => res.json() //,
        // Do not use catch
        //(error) => console.log("An error occurred.", error)
      )
      .then((json) =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveQuestions(category, json))
      );
  };
}

export function setScore() {
  return {
    type: "SET_SCORE",
  };
}

export function setCategory(category) {
    return {
      type: "SET_CATEGORY",
      category,
    };
  }

export function submitQuestion(index) {
  return {
    type: "SUBMIT_QUESTION",
    index,
  };
}

const categories = ['animals', 'art', 'film', 'history', 'sports', 'vehicles'];

export function getCategories() {
    return {
      type: "GET_CATEGORIES",
      categories,
    };
  }
