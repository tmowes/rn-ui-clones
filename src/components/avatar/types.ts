import { ImageProps } from 'react-native'

export type AvatarProps = ImageProps & {
  size?: 'small' | 'medium'
  selected: boolean
}
