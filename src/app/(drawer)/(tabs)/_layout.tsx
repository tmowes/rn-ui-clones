import { Avatar } from '@/components/avatar'
import { Menu } from '@/components/menu'
import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import { Tabs } from 'expo-router'
import React, { useRef } from 'react'

const tabScreenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: colors.orange[500],
  tabBarInactiveTintColor: colors.gray[400],
  tabBarStyle: {
    backgroundColor: colors.gray[600],
    borderTopWidth: 0,
    minHeight: 74,
  },
  tabBarItemStyle: {
    paddingBottom: 34,
    paddingTop: 14,
  },
}

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const onBottomSheetOpen = () => bottomSheetRef.current?.expand()

  const onBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  return (
    <>
      <Tabs screenOptions={tabScreenOptions} initialRouteName="index">
        <Tabs.Screen
          name="index"
          options={{ tabBarIcon: (props) => <MaterialIcons name="email" {...props} /> }}
        />
        <Tabs.Screen
          name="chat"
          options={{ tabBarIcon: (props) => <MaterialIcons name="chat-bubble" {...props} /> }}
        />
        <Tabs.Screen
          name="add"
          options={{
            tabBarIcon: (props) => <MaterialIcons name="add" {...props} />,
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault()
              onBottomSheetOpen()
            },
          })}
        />
        <Tabs.Screen
          name="meetings"
          options={{ tabBarIcon: (props) => <MaterialIcons name="videocam" {...props} /> }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar
                selected={color === colors.orange[500]}
                size="small"
                source={{ uri: 'https://github.com/tmowes.png' }}
              />
            ),
          }}
        />
      </Tabs>
      <Menu ref={bottomSheetRef} onClose={onBottomSheetClose} />
    </>
  )
}
