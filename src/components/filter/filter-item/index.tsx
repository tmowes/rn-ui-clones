import clsx from 'clsx'
import { Pressable, Text } from 'react-native'

import { FilterItemProps } from './types'

export function FilterItem(props: FilterItemProps) {
  const { filter, selected, ...attrs } = props
  return (
    <Pressable className={clsx('pb-1', { 'border-b-2 border-b-white': selected })} {...attrs}>
      <Text className="font-medium text-base color-white">{filter}</Text>
    </Pressable>
  )
}
