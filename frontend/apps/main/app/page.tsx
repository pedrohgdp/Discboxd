import Publication from "@discboxd/components/Publication";
import SideBar from "@discboxd/components/SideBar";
import TopBar from "@discboxd/components/TopBar";
import { Main } from "next/document";
import path from "path";

const buttons = [{text: "My profile", path: "http://localhost:3001"}]

export default function Home() {
  return (
    <div className="flex min-h-screen">

      <TopBar />

      <SideBar buttons={buttons}/>

      <main className="flex-1 flex flex-col">
        <Publication imgAlbumSource="/ba.jpg" imgUser="/1793204087029.jpg" userName="Pedro"/>
      </main>

    </div>

  );
}
