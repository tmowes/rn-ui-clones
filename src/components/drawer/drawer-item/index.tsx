import { CustomOptions } from '@/types/navigation'
import { Text, View } from 'react-native'
import { DrawerButton } from '../nav-button'
import { DrawerItemProps } from './types'

export function DrawerItem(props: DrawerItemProps) {
  const { state, descriptors, navigation, index, route } = props
  const isFocused = state.index === index
  const options = descriptors[route.key].options as CustomOptions

  if (options.title === undefined) {
    return
  }

  const onPress = () => {
    const event = navigation.emit({
      type: 'drawerItemPress',
      canPreventDefault: true,
      target: route.key,
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params)
    }
  }

  return (
    <View key={route.key} className="w-full">
      {options.sectionTitle && (
        <Text className="text-gray-400 text-sm font-heading uppercase ml-4 mt-6">
          {options.sectionTitle}
        </Text>
      )}

      <DrawerButton
        title={options.title}
        isFocused={isFocused}
        iconName={options.iconName}
        isDivider={options.isDivider}
        notifications={options.notifications}
        onPress={onPress}
      />
    </View>
  )
}
