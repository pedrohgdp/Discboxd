import SideBar from "@discboxd/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SideBar isMain={false} isSettings={false} isPrivateProfile={true} />
    </div>
  );
}
