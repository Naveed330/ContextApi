import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../useContext/GlobalState";
const Home = () => {
  const { users,DeleteUsers } = useContext(GlobalContext);
  console.log("users", users);
  return (
    <div>
      <div className="container">
        <div className="row mt-5 main_row_class">
          <div className="col-md-6">
            <table class="table table_class_main">
              <thead>
                <tr>
                  <th scope="col">Users</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <strong>{user.name}</strong>
                    </td>
                    <td>
                      <Link
                        to={`/EditUsers/${user.id}`}
                        className="Edit_link_class"
                      >
                        Edit
                      </Link>
                      <button type="button" className="Delete_link_class" onClick={()=>DeleteUsers(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
