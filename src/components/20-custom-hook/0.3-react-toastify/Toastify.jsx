import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Toastify.module.css";

function Toastify() {
  const handleAddNewItem = (e) => {
    toast.success("Your New Item is created.");
  };
  const handleDeleteNewItem = (e) => {
    toast.warn("Item deleted successfully");
  };
  return (
    <div className={styles["home-container"]}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        pauseOnHover
        theme="light"
      />
      <div className="newItemWrapper">
        <button className={styles["submit"]} onClick={handleAddNewItem}>
          Add New Item
        </button>
      </div>{" "}
      <div className="newItemWrapper">
        <button className={styles["submit"]} onClick={handleDeleteNewItem}>
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default Toastify;
