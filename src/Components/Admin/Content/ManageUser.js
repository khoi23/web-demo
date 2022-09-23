import React from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = () => {
  return (
    <div className="manage-users-container">
      <div className="manage-users-title">
        <h2>Manage User</h2>
      </div>
      <div className="manage-users-content">
        <div>
          <button>Add New User</button>
        </div>
        <div>Table User</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
