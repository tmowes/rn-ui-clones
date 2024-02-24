import { PressableProps } from 'react-native'

export type FilterItemProps = PressableProps & {
  filter: string
  selected: boolean
}
