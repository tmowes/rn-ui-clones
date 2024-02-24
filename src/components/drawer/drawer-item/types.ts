import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { ParamListBase, RouteProp } from '@react-navigation/native'

export type DrawerItemProps = DrawerContentComponentProps & {
  route: RouteProp<ParamListBase>
  index: number
}
