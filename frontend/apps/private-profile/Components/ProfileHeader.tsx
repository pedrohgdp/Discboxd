
type ProfileProps = {
    bannerUrl: string
    profilePhotoUrl: string
    name: string
    bio: string
}

export default function ProfileHeader( {bannerUrl, profilePhotoUrl, name, bio} : ProfileProps){
    return (
        <h1>Ola</h1>
    );
}