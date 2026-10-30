import Publication from "@discboxd/components/Publication";
import SideBar from "@discboxd/components/SideBar";
import TopBar from "@discboxd/components/TopBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800">

      <div className="fixed top-0 left-0 z-50 w-full">
        <TopBar />
      </div>

      <div className="flex min-h-screen pt-[50px]">

        <aside className="fixed left-0 top-[70px] h-full">
          <SideBar />
        </aside>

        <main className="flex flex-1 flex-col items-center p-6">
          <div>
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