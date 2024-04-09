import { FC } from "react";
import Button from "./shared/Button";
import { RevalidateUsers } from "@/lib/serverActions";
import AddUser from "./Users/AddUser";

interface UserProps {
  id: string;
  name: string;
  email: string;
}

const getUsers = async () => {
  return fetch("https://66150eb92fc47b4cf27ddcd4.mockapi.io/api/v1/users", {
    next: {
      tags: ["users_list"],
    },
  }).then((data) => data.json());
};

const Users: FC = async () => {
  const usersData = (await getUsers()) as UserProps[];

  return (
    <div className="flex flex-col gap-3">
      <form
        action={RevalidateUsers}
        className="flex items-center justify-between"
      >
        <h3 className="text-lg font-bold">Users List</h3>
        <Button>Revalidate Users</Button>
      </form>
      <AddUser />
      <div className="grid grid-cols-2 gap-4">
        {usersData.map((user) => (
          <div key={user.id} className="rounded bg-white p-4 shadow">
            <p>{user.name}</p>
            <p className="text-sm">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
