"use client";
import { FC } from "react";
import Button from "../shared/Button";
import { useRouter } from "next/navigation";

const AddUser: FC = () => {
  const router = useRouter();
  const addUserWithoutRevalide = async () => {
    await fetch("https://66150eb92fc47b4cf27ddcd4.mockapi.io/api/v1/users", {
      method: "POST",
    });
    alert(
      "User added successfully! But you need to revalidate the list manually"
    );
  };

  const addUserWithRevalide = async () => {
    await fetch("/api/add-user", {
      method: "POST",
    });
    router.refresh();
    alert("User added successfully!");
  };

  return (
    <div className="flex justify-between">
      <Button onClick={addUserWithoutRevalide}>
        + Add New User (Without revalidation)
      </Button>
      <Button onClick={addUserWithRevalide}>
        + Add New User (With revalidation)
      </Button>
    </div>
  );
};

export default AddUser;
