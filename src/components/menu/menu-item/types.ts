import { FontAwesome } from '@expo/vector-icons'

export type MenuItemProps = {
  title: string
  icon: keyof typeof FontAwesome.glyphMap
}
