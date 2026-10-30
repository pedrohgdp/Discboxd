import Publication from "@discboxd/components/Publication";
import SideBar from "@discboxd/components/SideBar";
import { Main } from "next/document";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-1 flex flex-col">
        <Publication imgSource="/ba.jpg"/>
      </main>

    </div>

  );
}
