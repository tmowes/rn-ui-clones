import { useState } from 'react'
import { View } from 'react-native'

import { Filters } from '@/components/filter'
import { Posts } from '@/components/post'

import { Avatar } from '@/components/avatar'
import { MenuButton } from '@/components/drawer/menu-button'
import { Input } from '@/components/input'
import { FILTERS } from '@/data/filters'
import { POSTS } from '@/data/posts'

export default function Meetings() {
  const [filter, setFilter] = useState(FILTERS[0])
  return (
    <View className="flex-1 bg-gray-900 pt-10 px-4 gap-2">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar..." />
        <Avatar source={{ uri: 'https://github.com/tmowes.png' }} selected={false} />
      </Input>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
      <Posts posts={POSTS} />
    </View>
  )
}
