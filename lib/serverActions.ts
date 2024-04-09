"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const RevalidateAll = () => {
  revalidatePath("/", "page");
  redirect("/");
};

export const RevalidateUsers = () => {
  revalidateTag("users_list");
  redirect("/");
};

export const RevalidateNotes = () => {
  revalidateTag("notes_list");
  redirect("/");
};
