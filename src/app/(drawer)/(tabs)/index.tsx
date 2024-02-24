import { FlatList, Text, View } from 'react-native'

import { Avatar } from '@/components/avatar'
import { MenuButton } from '@/components/drawer/menu-button'
import { Email } from '@/components/email'
import { FloatButton } from '@/components/float-button'
import { Input } from '@/components/input'
import { EMAILS } from '@/data/email'

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-10 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar source={{ uri: 'https://github.com/tmowes.png' }} selected />
      </Input>
      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">Entrada</Text>
        )}
      />
      <FloatButton />
    </View>
  )
}
