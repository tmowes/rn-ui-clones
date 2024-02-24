import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity } from 'react-native'
import { FloatButtonProps } from './types'

export function FloatButton(props: FloatButtonProps) {
  const { icon, ...attrs } = props
  return (
    <TouchableOpacity
      className="px-8 py-4 bg-gray-600 rounded-full absolute bottom-4 right-5 flex-row gap-1 items-center"
      activeOpacity={0.7}
      {...attrs}
    >
      <MaterialIcons name="edit" size={22} color={colors.orange[500]} />
      <Text className="font-subtitle text-orange-500">Escrever</Text>
    </TouchableOpacity>
  )
}
