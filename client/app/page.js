import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
Search
      </div>
      <div className="col-span-2">
Google Map
      </div>
    </div>
  );
}
