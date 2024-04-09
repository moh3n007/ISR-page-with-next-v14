import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const res = await fetch(
      "https://66150eb92fc47b4cf27ddcd4.mockapi.io/api/v1/users",
      {
        method: "POST",
      }
    ).then((data) => data.json());
    if (!!res.id) {
      revalidateTag("users_list");
    }
    return Response.json({ res });
  } catch (error) {
    return Response.json(
      { revalidated: true, now: Date.now() },
      { status: 500 }
    );
  }
}
