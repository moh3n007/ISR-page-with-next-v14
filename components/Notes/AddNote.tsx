"use client";
import { FC } from "react";
import Button from "../shared/Button";
import { useRouter } from "next/navigation";

const AddNote: FC = () => {
  const router = useRouter();
  const addNoteWithoutRevalide = async () => {
    await fetch("https://66150eb92fc47b4cf27ddcd4.mockapi.io/api/v1/notes", {
      method: "POST",
    });
    alert(
      "Note added successfully! But you need to revalidate the list manually"
    );
  };

  const addNoteWithRevalide = async () => {
    await fetch("/api/add-note", {
      method: "POST",
    });
    router.refresh();
    alert("Note added successfully!");
  };

  return (
    <div className="flex justify-between">
      <Button onClick={addNoteWithoutRevalide}>
        + Add New Note (Without revalidation)
      </Button>
      <Button onClick={addNoteWithRevalide}>
        + Add New Note (With revalidation)
      </Button>
    </div>
  );
};

export default AddNote;
