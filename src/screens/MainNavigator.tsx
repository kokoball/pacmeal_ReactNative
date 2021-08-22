import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from './Home'
import AroundMe from './AroundMe'
import OrderList from './OrderList'
import MyPacmeal from './MyPacmeal'
import type {RouteProp, ParamListBase} from '@react-navigation/native'

type TabBarIconProps = {focused: boolean; color: string; size: number}
const icons: Record<string, string[]> = {
  Home: ['home-circle', 'home-circle-outline'],
  AroundMe: ['home-circle', 'home-circle-outline'],
  OrderList: ['account-search', 'account-search-outline'],
  MyPacmeal: ['account-clock', 'account-clock-outline']
}
const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route
      const focusedSize = focused ? size + 6 : size
      const focusedColor = focused ? Colors.lightBlue500 : color
      const [icon, iconOutline] = icons[name]
      const iconName = focused ? icon : iconOutline
      return <Icon name={iconName} size={focusedSize} color={focusedColor} />
    }
  }
}
const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AroundMe" component={AroundMe} />
      <Tab.Screen name="OrderList" component={OrderList} />
      <Tab.Screen name="MyPacmeal" component={MyPacmeal} />   
    </Tab.Navigator>
  )
}