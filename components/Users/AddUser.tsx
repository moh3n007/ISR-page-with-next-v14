"use client";
import { FC } from "react";
import AddUserWithoutRevalidation from "./AddUser/AddUserWithoutRevalidation";
import AddUserWithRevalidation from "./AddUser/AddUserWithRevalidation";

const AddUser: FC = () => {
  return (
    <div className="flex justify-between">
      <AddUserWithoutRevalidation />
      <AddUserWithRevalidation />
    </div>
  );
};

export default AddUser;
