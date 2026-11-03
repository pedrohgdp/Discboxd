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
          <SideBar isMain={false} isSettings={false} isPrivateProfile={true} />
        </aside>
      </div>
    </div>
  );
}
