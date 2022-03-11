import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, BrowserRouter as Router } from "react-router-dom";
import { GlobalContext } from "../useContext/GlobalState";
import { useParams } from "react-router-dom";
import "./EditUsers.css";
const EditUsers = (props) => {
  const params = useParams();
  const { users, EditHandler } = useContext(GlobalContext);
  const [EditData, setEditData] = useState(
    users.filter((itm) => itm.id === params.id)[0]
  );

  const Navigate = useNavigate();
  console.log("mmm:", users, typeof params.id);
  const EditChangeHandler = (e) => {
    setEditData({ ...EditData, [e.target.name]: e.target.value });
  };

  const EditClickHandler = () => {
    users.map((itm) => {
      if (itm.id === (params.id)) {
        itm.name = document.getElementById("edit").value;
      }
      return itm;
    });
    Navigate("/");
  };

  useEffect(() => {
    console.log("EditData", EditData);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row main_row">
          <div className="col-md-6 col-sm-12">
            <div class="p-4">
              <input
                id="edit"
                type="text"
                name="name"
                onChange={EditChangeHandler}
                value={EditData.name}
                className="form-control"
                placeholder="Enter Users"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div>
              <Link onClick={EditClickHandler} className="Link_submit" to="/">
                Edit User
              </Link>
              <Link className="Link_Cancel" to="/">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUsers;

// useEffect(() => {
//   const userId = EditData;
//   const selecteduser = users.find((user) => user.id === Number(userId));
//   setEditData(selecteduser);
// }, [EditData, users]);
