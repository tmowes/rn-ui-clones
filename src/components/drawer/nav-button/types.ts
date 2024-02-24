import { MaterialIcons } from '@expo/vector-icons'
import { PressableProps } from 'react-native'

export type IconNameType = keyof typeof MaterialIcons.glyphMap

export type DrawerButtonProps = PressableProps & {
  title?: string
  isFocused?: boolean
  isDivider?: boolean
  iconName: IconNameType
  notifications?: number
}
