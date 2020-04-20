export default function profiles(state = [], action) {
  console.log(action);
  console.log(state);
  
  switch (action.type) {
    case "ADD_PROFILE":
      return [...state, action];

    case "GET_PROFILES":
      return action.profiles;

    case "DELETE_PROFILE":
      return Object.assign([], state.filter(profile => profile.id != action.id));
      
    default:
      return state;
  }
}
