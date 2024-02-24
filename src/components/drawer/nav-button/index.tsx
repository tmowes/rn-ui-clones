import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import { Pressable, Text, View } from 'react-native'

import { DrawerButtonProps } from './types'

export function DrawerButton(props: DrawerButtonProps) {
  const {
    title = '',
    iconName,
    isDivider = false,
    isFocused = true,
    notifications,
    ...attrs
  } = props
  return (
    <Pressable
      className={clsx('py-2 w-full', { 'border-b ml-10 border-gray-500': isDivider })}
      {...attrs}
    >
      <View
        className={clsx('flex-row items-center gap-4 w-full h-14 px-6 -ml-2', {
          'bg-orange-800 rounded-r-full': isFocused,
          '-ml-14': isDivider,
        })}
      >
        <MaterialIcons
          name={iconName}
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />
        <Text
          className={clsx('text-white font-subtitle text-base flex-1', {
            'text-orange-300': isFocused,
          })}
        >
          {title}
        </Text>

        <Text
          className={clsx('text-gray-400 text-sm font-body', {
            'text-orange-300': isFocused,
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  )
}
