import React, { createContext, useReducer } from "react";
import appReducers from "./appReducers";
const initialState = {
  users: [],
};
export const GlobalContext = createContext(initialState);
const GlobalState = ({ children }) => {
  console.log("children", children);
  const [state, dispatch] = useReducer(appReducers, initialState);

  //   Delete Functioanlity
  const DeleteUsers = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  //   ADD_User_Functionality
  const AddHandler = (user) => {
    console.log("ADDuser", user);
    dispatch({
      type: "ADD_USERS",
      payload: user,
    });
  };

  //   Edit_User_Handler Functionality
  const EditHandler = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };
  return (
    <div>
      <GlobalContext.Provider
        value={{
          users: state.users,
          DeleteUsers: DeleteUsers,
          AddHandler: AddHandler,
          EditHandler: EditHandler,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalState;
