import clsx from 'clsx'
import { Image } from 'react-native'

import { AvatarProps } from './types'

export function Avatar(props: AvatarProps) {
  const { size = 'medium', selected = false, ...attrs } = props
  return (
    <Image
      className={clsx('rounded-full', {
        'w-8 h-8': size === 'small',
        'w-10 h-10': size === 'medium',
        'border-2 border-orange-500': selected,
      })}
      {...attrs}
    />
  )
}
