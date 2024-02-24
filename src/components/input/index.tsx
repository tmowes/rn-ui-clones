import { colors } from '@/styles/colors'
import { TextInput, TextInputProps, View } from 'react-native'
import { InputProps } from './types'

function Input(props: InputProps) {
  const { children } = props
  return (
    <View className="w-full h-14 bg-gray-800 rounded-lg p-4 flex-row items-center gap-4">
      {children}
    </View>
  )
}

function InputField(props: TextInputProps) {
  const { ...attrs } = props
  return (
    <TextInput
      className="flex-1 font-normal text-base text-white"
      placeholderTextColor={colors.gray[400]}
      cursorColor={colors.blue[600]}
      {...attrs}
    />
  )
}

Input.Field = InputField

export { Input }
