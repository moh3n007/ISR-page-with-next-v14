"use client";
import { FC } from "react";
import AddNoteWithoutRevalidation from "./AddNote/AddNoteWithoutRevalidation";
import AddNoteWithRevalidation from "./AddNote/AddNoteWithRevalidation";

const AddNote: FC = () => {
  return (
    <div className="flex justify-between">
      <AddNoteWithoutRevalidation />
      <AddNoteWithRevalidation />
    </div>
  );
};

export default AddNote;
