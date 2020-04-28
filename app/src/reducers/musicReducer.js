export default function musicReducer(
  state = {
    videos: [],
    id: "",
  },
  action
) {

  switch (action.type) {
    case "GET_VIDEOS":
      return action.payload;

    case "SELECT_VIDEO":
      return action.payload;

    default:
      return state;
  }
}
