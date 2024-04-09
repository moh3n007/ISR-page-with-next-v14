import { FC } from "react";
import Button from "./shared/Button";
import { RevalidateNotes } from "@/lib/serverActions";
import AddNote from "./Notes/AddNote";

interface NoteProps {
  id: string;
  note: string;
}

const getNotes = async () => {
  return fetch("https://66150eb92fc47b4cf27ddcd4.mockapi.io/api/v1/notes", {
    next: {
      tags: ["notes_list"],
    },
  }).then((data) => data.json());
};

const Notes: FC = async () => {
  const notesData = (await getNotes()) as NoteProps[];

  return (
    <div className="flex flex-col gap-3">
      <form
        action={RevalidateNotes}
        className="flex items-center justify-between"
      >
        <h3 className="text-lg font-bold">Notes List</h3>
        <Button>Revalidate Notes</Button>
      </form>
      <AddNote />
      <div className="grid grid-cols-2 gap-4">
        {notesData.map((note) => (
          <div key={note.id} className="rounded bg-white p-4 shadow">
            <p>{note.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
