import { router } from 'expo-router'
import { Skeleton } from 'moti/skeleton'
import { useEffect } from 'react'
import { View, useWindowDimensions } from 'react-native'

import Animated, {
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  runOnJS,
} from 'react-native-reanimated'

import { colors } from '@/styles/colors'

export default function Splash() {
  const logoScale = useSharedValue(1)
  const logoPositionY = useSharedValue(0)
  const contentDisplay = useSharedValue(0)
  const dimensions = useWindowDimensions()
  const skeletonColors = [colors.gray[600], colors.gray[700], colors.gray[600]]
  const logoAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }, { translateY: logoPositionY.value }],
  }))
  const contentAnimatedStyles = useAnimatedStyle(() => ({
    display: contentDisplay.value === 1 ? 'flex' : 'none',
  }))

  function logoAnimation() {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (finished) => {
        if (finished) {
          logoPositionY.value = withSequence(
            withTiming(50, undefined, () => {
              contentDisplay.value = 1
            }),
            withTiming(-dimensions.height, { duration: 400 }),
          )
          runOnJS(onEndSplash)()
        }
      }),
    )
  }

  function filters() {
    return Array.from({ length: 10 }).map((_, index) => (
      <Skeleton
        key={index.toString()}
        width={60}
        height={24}
        radius={8}
        colors={skeletonColors}
      />
    ))
  }

  function boxes(column: 'right' | 'left') {
    const rest = column === 'left' ? 0 : 1

    return Array.from({ length: 20 })
      .filter((_, index) => index % 2 === rest)
      .map((_, index) => {
        const height = index % 2 === (column === 'left' ? 0 : 1) ? 200 : 300

        return (
          <Animated.View
            key={index.toString()}
            className="w-full rounded-2xl bg-gray-600"
            style={{ height }}
          >
            <Skeleton colors={skeletonColors} width="100%" height={height} />
          </Animated.View>
        )
      })
  }

  function onEndSplash() {
    setTimeout(() => {
      router.push('/(drawer)/(tabs)/meetings')
    }, 2000)
  }

  useEffect(() => {
    logoAnimation()
  }, [])

  return (
    <View className="flex-1 bg-black justify-center items-center px-12">
      <Animated.Image
        source={require('@/assets/pinterest-logo.png')}
        className="size-16"
        style={logoAnimatedStyles}
      />
      <Animated.View
        className="flex-1 w-full"
        style={contentAnimatedStyles}
        entering={SlideInDown.duration(700)}
      >
        <View className="flex-row w-full gap-4 pb-3">{filters()}</View>
        <View className="flex-1 w-full flex-row gap-3">
          <View className="flex-1 gap-3">{boxes('left')}</View>
          <View className="flex-1 gap-3">{boxes('right')}</View>
        </View>
      </Animated.View>
    </View>
  )
}
