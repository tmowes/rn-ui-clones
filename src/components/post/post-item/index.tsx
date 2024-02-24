import { colors } from '@/styles/colors'
import { Feather } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'

import { PostItemProps } from './types'

export function PostItem(props: PostItemProps) {
  const { post } = props

  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    if (post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height)
      })
    }
  }, [post.image])

  return (
    <View className="flex-1 p-1">
      <Image className="rounded-3xl" source={{ uri: post.image }} style={{ aspectRatio }} />

      <View className="text-sm color-white font-bold">
        <Text className="flex-row items-center justify-between mt-2 color-white">
          {post.title}
        </Text>
        <Feather name="more-horizontal" size={16} color={colors.white} />
      </View>
    </View>
  )
}
