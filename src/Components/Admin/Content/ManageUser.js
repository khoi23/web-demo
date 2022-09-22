import React from "react";
import ModalCreateUser from "./ModalCreateUser";

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
        <div>
          Table User
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
