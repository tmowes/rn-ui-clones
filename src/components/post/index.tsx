import { ScrollView, View } from 'react-native'

import { PostItem } from './post-item'
import { PostsProps } from './types'

export function Posts(props: PostsProps) {
  const { posts } = props

  function postsByColumn(column: 'right' | 'left') {
    const rest = column === 'left' ? 0 : 1
    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => <PostItem key={post.id} post={post} />)
  }

  return (
    <ScrollView contentContainerClassName="pt-4" showsVerticalScrollIndicator={false}>
      <View className="flex-row flex-1">
        <View className="flex-1">{postsByColumn('left')}</View>
        <View className="flex-1">{postsByColumn('right')}</View>
      </View>
    </ScrollView>
  )
}
