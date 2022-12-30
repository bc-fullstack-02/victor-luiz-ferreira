import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'
import { Context as PostContext } from '../../context/AuthContext'
import { UserCircle, Chat, Heart } from 'phosphor-react-native'
import { Post } from '../../@types/post'

import { styles } from './styles'
import { Spacer } from '../Spacer'

interface PostItemProps {
  post: Post
}

export function PostItem({ post }: PostItemProps) {
  const { likePost, unlikePost } = useContext(PostContext)
  const { profile } = useContext(AuthContext)

  function handleLikePress() {
    if(post.likes.includes(profile)) {
      unlikePost && unlikePost({postId: post._id})
    } else{
      likePost && likePost({postId: post._id})
    }
  }

  return(
      <View style={styles.post}>
          <View style={styles.postHeading}>
            <UserCircle color='white' size={48} weight='thin' />
            <Text style={styles.postUserText}>{post.profile.name}</Text>
          </View>
          <Spacer>
          {post.image ? (
            <Image source={{
              //uri: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-LAUNCH-INTEL-TOUT.jpg"
            }} 
            style={styles.image}></Image> 
          ) : (   
            <View style={styles.contentBody}>
              <Text style={styles.contentText}>{post.description}</Text>
            </View>
          )}
          </Spacer>
          <View style={styles.footer}>
            <Chat size={24} color='white' weight='thin' />
            <Text style={styles.number}>{post.comments.length}</Text>
            <TouchableOpacity onPress={handleLikePress}>
              {post.likes.includes(profile) ? (
                <Heart size={24} color='white' weight='fill' />
              ) : (
                <Heart size={24} color='white' weight='thin' />
                )}
            </TouchableOpacity>
            <Text style={styles.number}>{post.likes.length}</Text>
          </View>
        </View>
        
  )
}

