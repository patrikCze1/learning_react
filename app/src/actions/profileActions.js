const profiles = [
  {
    id: 1,
    firstName: "Joe",
    lastName: "Doe",
    tel: "123123123",
    age: 24,
    about: "asd asd ads asd ads",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Smith",
    tel: "333222111",
    age: 44,
    about: "asd asd ads asd ads",
  },
  {
    id: 3,
    firstName: "Joe",
    lastName: "Doe",
    tel: "554433221",
    age: 34,
    about: "asd asd ads asd ads",
  },
  {
    id: 4,
    firstName: "Joe",
    lastName: "Doe",
    tel: "987789123",
    age: 20,
    about: "asd asd ads asd ads",
  },
];

export const getProfiles = () => {
  return {
    type: "GET_PROFILES",
    profiles,
  };
};

export const addProfile = (profile) => {
  return {
    type: "ADD_PROFILE",
    profile,
  };
};

export const deleteProfile = (id) => {
  return {
    type: "DELETE_PROFILE",
    id,
  };
};
