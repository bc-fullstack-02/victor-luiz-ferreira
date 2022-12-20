import { useState, useEffect } from "react"
import { UserCircle, ChatCentered, Heart } from "phosphor-react"
import api from "../../services/api"
import Heading from "../Heading"
import Text from "../Text"
import { getAuthHeader } from "../../services/auth"
import { Post } from "../../Model/Post"
import PostItem from "../PostItem"

interface FeedProps {
    posts: Post[];
    handleLike: (postId: string) => void
}

function Feed({posts, handleLike}: FeedProps) {
    const user = localStorage.getItem('user')
    const name = localStorage.getItem('name')
   
   

   console.log(posts)
    
    return (
        <div className="basis-5/6 overflow-y-auto scrool-smooth text-white">
            <header className="border-b mt-4">
                <Text size="lg" className="font-extrabold ml-5">Página Inicial</Text>
                <div className="flex flex-row items-center ml-5 my-4">
                    <UserCircle size={40} weight='light' fill="" />
                    <Text className="font-extrabold ml-2">{user}</Text>
                </div>
                
            </header>

            <main>
                {posts && 
                    posts.slice(0).reverse().map((post: Post) => (
                        
                       <PostItem post={post} handleLike={handleLike} />
                ))}
            </main>
            
        </div>
    )
}

export default Feed