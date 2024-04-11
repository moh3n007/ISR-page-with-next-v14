"use client";

import Button from "@/components/shared/Button";
import { FC, useState } from "react";

const AddUserWithoutRevalidation: FC = () => {
  const [loading, setLoading] = useState(false);

  const addUserWithoutRevalide = async () => {
    await fetch("https://66150eb92fc47b4cf27ddcd4.mockapi.io/api/v1/users", {
      method: "POST",
    });
    setLoading(false);

    alert(
      "User added successfully! But you need to revalidate the list manually"
    );
  };

  return (
    <Button
      onClick={() => {
        setLoading(true);
        addUserWithoutRevalide();
      }}
      disabled={loading}
    >
      {loading ? "...loading" : "+ Add New User (Without revalidation)"}
    </Button>
  );
};

export default AddUserWithoutRevalidation;
