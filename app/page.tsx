import Notes from "@/components/Notes";
import Users from "@/components/Users";
import Button from "@/components/shared/Button";
import { RevalidateAll } from "@/lib/serverActions";

export default function Home() {
  return (
    <div className="flex flex-col pt-6 gap-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">
          ISR Page | On-demand Revalidation
        </h1>
        <h2 className="text-2xl">Mohsen Lotfi</h2>
        <form action={RevalidateAll}>
          <Button>Revalidate the path</Button>
        </form>
      </div>
      <div className="container flex flex-col mx-auto gap-6">
        <Users />
        <Notes />
      </div>
    </div>
  );
}
