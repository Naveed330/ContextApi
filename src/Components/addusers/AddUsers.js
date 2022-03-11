import React, { useContext, useState } from "react";
import "./Addusers.css";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../useContext/GlobalState";
import { v4 as uuid } from "uuid";
const AddUsers = () => {
  const { AddHandler } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const Navigate = useNavigate();
  const ClickAddHandler = () => {
    const Newuser = {
      id: uuid(),
      name,
    };
    AddHandler(Newuser);
    Navigate("/");
  };
  const ChangeHanlder = (e) => {
    console.log("Eeeee", e);
    setName(e.target.value);
  };
  return (
    <>
      <h1>ADD Users</h1>
      <div className="container">
        <div className="row main_row">
          <div className="col-md-6 col-sm-12">
            <div class="p-4">
              <input
                type="text"
                value={name}
                onChange={ChangeHanlder}
                class="form-control"
                placeholder="Enter Users"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div>
              <Link onClick={ClickAddHandler} className="Link_submit" to="/">
                Submit
              </Link>
              <Link className="Link_Cancel" to="/">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUsers;
