import Button from "@/components/shared/Button";
import { FC, useState } from "react";

const AddNoteWithoutRevalidation: FC = () => {
  const [loading, setLoading] = useState(false);

  const addNoteWithoutRevalide = async () => {
    await fetch("https://66150eb92fc47b4cf27ddcd4.mockapi.io/api/v1/notes", {
      method: "POST",
    });
    setLoading(false);

    alert(
      "Note added successfully! But you need to revalidate the list manually"
    );
  };

  return (
    <Button
      onClick={() => {
        setLoading(true);
        addNoteWithoutRevalide();
      }}
      disabled={loading}
    >
      {loading ? "...loading" : "+ Add New Note (Without revalidation)"}
    </Button>
  );
};

export default AddNoteWithoutRevalidation;
