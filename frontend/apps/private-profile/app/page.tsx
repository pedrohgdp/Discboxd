import ProfileHeader from "@/Components/ProfileHeader";
import Publication from "@discboxd/components/Publication";
import SideBar from "@discboxd/components/SideBar";
import TopBar from "@discboxd/components/TopBar";
import Crop from "@/Components/Crop";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800">

      <div className="fixed top-0 left-0 z-50 w-full">
        <TopBar />
      </div>

      <div className="flex min-h-screen pt-[50px]">
        <aside className="fixed left-0 top-[70px] h-full">
          <SideBar isMain={false} isSettings={false} isPrivateProfile={true} />
        </aside>

        <main className="ml-[54px] flex flex-1 flex-col items-center p-6">

          <div className="w-full max-w-4xl pt-4">
          
            <ProfileHeader></ProfileHeader>
            
            <div className="mt-6">
              <Publication
                imgAlbumSource="/ba.jpg"
              />

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
