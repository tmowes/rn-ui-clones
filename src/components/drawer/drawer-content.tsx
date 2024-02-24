import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Image, ScrollView, View } from 'react-native'

import { DrawerItem } from './drawer-item'

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  const { state } = drawerProps
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image
          source={require('@/assets/gmail-logo.png')}
          className="w-28 ml-5"
          resizeMode="contain"
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {state.routes.map((route, index) => (
            <DrawerItem key={route.key} index={index} route={route} {...drawerProps} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
