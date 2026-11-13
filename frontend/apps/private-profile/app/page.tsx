import ProfileHeader from "@/Components/ProfileHeader";
import Publication from "@discboxd/components/Publication";
import TopBar from "@discboxd/components/TopBar";
import Crop from "@/Components/Crop";

export default function PrivateProfile() {
  return (
    <div className="flex flex-col text-white min-h-screen bg-slate-800">

      <div className="fixed top-0 left-0 z-50 w-full">
        <TopBar isMain={false} isPrivateProfile={true} />
      </div>

      <div className="flex min-h-screen pt-[50px]">

        <main className="flex min-w-0 flex-1 flex-col items-center p-6">

          <div className="w-full max-w-4xl pt-2 pl-1">
          
            <ProfileHeader profilePhotoUrl={undefined} bannerUrl={undefined} name="Pedro" bio="Music internet nerd!"></ProfileHeader>
            
            {/*Publications*/}
            <div className="flex flex-col items-center">

              <Publication
                imgAlbumSource="/ba.jpg"
              />

              <Publication
                imgAlbumSource="/ba.jpg"
              />

              
              <Publication
                imgAlbumSource="/ba.jpg"
              />

              
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
