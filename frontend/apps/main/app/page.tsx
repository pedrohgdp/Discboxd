import Publication from "@discboxd/components/Publication";
import SideBar from "@discboxd/components/SideBar";
import TopBar from "@discboxd/components/TopBar";

export default function Home() {
  return (
    <div className="flex flex-col text-white min-h-screen bg-slate-800">

      <div className="fixed top-0 left-0 z-50 w-full">
        <TopBar />
      </div>

      <div className="flex min-h-screen pt-[60px]">

        <aside className="sticky top-[50px] h-[calc(100vh-50px)] shrink-0 pt-4">
          <SideBar isMain={true} isSettings={false} isPrivateProfile={false} />
        </aside>

        <main className="flex flex-1 flex-col">
          <div className="pt-1 pl-1">

            <Publication
              imgAlbumSource="/ba.jpg"
              imgUser="/1793204087029.jpg"
              userName="Pedro"
            />

          </div>

        </main>
      </div>
    </div>
  );
}