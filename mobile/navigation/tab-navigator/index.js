import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedStackNavigator from '../feed-stack';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Messages from './screens/Messages';

import {
	Setting4,
	ProfileCircle,
	Grid3,
	Messages as Msgs,
} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	const OPTIONS = {
		VARIANT: 'Bold',
		SIZE: 32,
		ACTIVE_COLOR: '#6e2ca0',
		INACTIVE_COLOR: 'grey',
	};

	return (
		<Tab.Navigator
			initialRouteName='HomeStack'
			screenOptions={{
				headerShown: false,
				tabBarInactiveTintColor: OPTIONS.INACTIVE_COLOR,
				tabBarActiveTintColor: OPTIONS.ACTIVE_COLOR,
				tabBarShowLabel: false,
			}}
		>
			<Tab.Screen
				name='Top Secret Feed'
				component={FeedStackNavigator}
				options={{
					tabBarIcon: ({ color }) => {
						return (
							<Grid3
								color={color}
								variant={OPTIONS.VARIANT}
								size={OPTIONS.SIZE}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name='Top Secret Messages'
				component={Messages}
				options={{
					tabBarIcon: ({ color }) => {
						return (
							<Msgs
								color={color}
								variant={OPTIONS.VARIANT}
								size={OPTIONS.SIZE}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name='Super Sexy Profile'
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => {
						return (
							<ProfileCircle
								color={color}
								variant={OPTIONS.VARIANT}
								size={OPTIONS.SIZE}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name='Tweaky Tweakys'
				component={Settings}
				options={{
					tabBarIcon: ({ color }) => {
						return (
							<Setting4
								color={color}
								variant={OPTIONS.VARIANT}
								size={OPTIONS.SIZE}
							/>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
}
