import Publication from "@discboxd/components/Publication";
import TopBar from "@discboxd/components/TopBar";

export default function Home() {
  return (
    <div className="flex flex-col text-white items-center min-h-screen bg-slate-800">

      <div className="fixed top-0 left-0 z-50 w-full">
        <TopBar isMain={true} isPrivateProfile={false }/>
      </div>

      <div className="flex w-full min-h-screen pt-[60px]">

        <main className="flex flex-1 w-full min-w-0 flex-col">
          <div className="pt-1 px-4 pl-1">

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