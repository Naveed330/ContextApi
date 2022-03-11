export default (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => {
          return user.id != action.payload;
        }),
      };
    case "ADD_USERS":
      return {
        users: [action.payload, ...state.users],
      };
    case "EDIT_USER":
      const updateduser = action.payload;
      console.log("updateduser",updateduser);
      const newuser = state.users.map((user) => {
        if (user.id === updateduser.id) {
          return updateduser;
        }
        return user;
      });
      return {
        users: newuser,
      };
    default:
      return state;
  }
};
