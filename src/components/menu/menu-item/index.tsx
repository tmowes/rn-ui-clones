import { colors } from '@/styles/colors'
import { FontAwesome } from '@expo/vector-icons'
import { Pressable, Text } from 'react-native'
import { MenuItemProps } from './types'

export function MenuItem(props: MenuItemProps) {
  const { title, icon } = props
  return (
    <Pressable className="items-center">
      <FontAwesome
        name={icon}
        size={32}
        color={colors.white}
        className="p-6 bg-gray-700 rounded-3xl"
      />
      <Text className="text-sm color-white font-medium mt-3">{title}</Text>
    </Pressable>
  )
}
