"use client";

import Button from "@/components/shared/Button";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

const AddUserWithRevalidation: FC = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const addUserWithRevalide = async () => {
    await fetch("/api/add-user", {
      method: "POST",
    });
    setLoading(false);
    alert("User added successfully!");
    router.refresh();
  };

  return (
    <Button
      onClick={() => {
        setLoading(true);
        addUserWithRevalide();
      }}
      disabled={loading}
    >
      {loading ? "...loading" : "+ Add New User (With revalidation)"}
    </Button>
  );
};

export default AddUserWithRevalidation;
