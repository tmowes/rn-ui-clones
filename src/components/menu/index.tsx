import { colors } from '@/styles/colors'
import { FontAwesome } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import { forwardRef } from 'react'
import { Text, View } from 'react-native'
import { MenuItem } from './menu-item'
import { MenuProps } from './types'

export const Menu = forwardRef<BottomSheet, MenuProps>((props, ref) => {
  const { onClose } = props
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={{ backgroundColor: colors.gray[800] }}
      handleComponent={() => null}
    >
      <View className="flex-1 p-6 items-center">
        <View className="flex-row">
          <FontAwesome name="close" size={24} color={colors.white} onPress={onClose} />
          <Text className="mr-6 text-center flex-1 color-white font-medium text-lg">
            Comece a criar agora
          </Text>
        </View>

        <View className="gap-4 mt-8 flex-row">
          <MenuItem title="Pin" icon="home" />
          <MenuItem title="Colagem" icon="paste" />
          <MenuItem title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  )
})
