import { useState, useEffect } from "react";
import api from "../../services/api";
import { UserCircle } from "phosphor-react";
import Heading from "../Heading";
import Button from "../Button";
import { getAuthHeader } from "../../services/auth";

interface Profile {
    _id: string;
    name: string;
    followers: string[];
}

function Profiles() {
    const user = localStorage.getItem('user')
    const name = localStorage.getItem('name')
    const profileId = localStorage.getItem('profile')
    const authHeader = getAuthHeader()

    const [profiles, setProfiles] = useState<Profile[]>([])

    const getProfiles = async () => {
        try {
            const response = await api.get('/profiles', authHeader)
            setProfiles(response.data)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getProfiles()
    }, [])

    console.log(profiles)

    async function handleFollow(profileId: string) {
        try {
            await api.post(`/profiles/${profileId}/follow`, null, authHeader)
            getProfiles()
        } catch(err) {
            console.error(err)
        }
    }

    async function handleUnfollow(profileId: string) {
        try {
            await api.post(`/profiles/${profileId}/unfollow`, null, authHeader)
            getProfiles()
        } catch(err) {
            console.error(err)
        }
    }


    return (
        <div className="basis-5/6 overflow-y-auto scrool-smooth text-white">
            <header className="px-5 py-3 border-b border-lineBg flex items-center ">
                <UserCircle size={40} weight='light' fill="" />
                <Heading size="xs" className="ml-2">{name}</Heading>
                <Heading  className="ml-2 text-sm">{`@${user}`}</Heading>
            </header>
            {profiles.map(profile => (
                <section className=" flex flex-col gap-2 px-5 py-3 border-b text-white" key={profile._id}>
                    <header className="flex items-center mr-2">
                        <UserCircle size={40} weight='light' fill="" />
                        <Heading size="xs" className="ml-2">{profile.name}</Heading>
                        {/* <Heading  className="ml-2 text-sm">{`@${profile.user.user}`}</Heading> */}
                    </header>
                    <div>
                        
                        {profile.followers.includes(profileId) === true ? 
                            <div className="flex items-center gap-3">
                                <button onClick={() => handleFollow(profile._id)} className="w-40 py-2 rounded-xl font-semibold text-md  focus:ring-2 ring-secondary hover:opacity-80" disabled >
                                    Seguir
                                </button>

                                <button onClick={() => handleUnfollow(profile._id)} className="w-40  border-secondary bg-gradient-to-r from-secondaryLight via-secondary to-secondaryDark hover:bg-gradient-to-br py-2 rounded-xl font-semibold text-md  focus:ring-2 ring-secondary">
                                    Deixar de seguir
                                </button>
                            </div>
                        : 
                            <div className="flex items-center gap-3">
                                <button onClick={() => handleFollow(profile._id)} className="w-40  border-secondary bg-gradient-to-r from-secondaryLight via-secondary to-secondaryDark hover:bg-gradient-to-br py-2 rounded-xl font-semibold text-md  focus:ring-2 ring-secondary text-white">
                                    Seguir
                                </button>

                                <button onClick={() => handleUnfollow(profile._id)} className="w-40  bg-lineBg py-2 rounded-xl font-semibold text-md  focus:ring-2 ring-secondary hover:opacity-80 text-black" disabled >
                                    Deixar de seguir
                                </button>
                                
                            </div>
                        }
                       
                    </div>
                    
                    
                </section>
                
            ))}
        </div>
    )
}

export default Profiles;