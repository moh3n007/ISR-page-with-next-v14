import Button from "@/components/shared/Button";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

const AddNoteWithRevalidation: FC = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const addNoteWithRevalide = async () => {
    await fetch("/api/add-note", {
      method: "POST",
    });
    setLoading(false);
    alert("Note added successfully!");
    router.refresh();
  };

  return (
    <Button
      onClick={() => {
        setLoading(true);
        addNoteWithRevalide();
      }}
      disabled={loading}
    >
      {loading ? "...loading" : "+ Add New Note (With revalidation)"}
    </Button>
  );
};

export default AddNoteWithRevalidation;
