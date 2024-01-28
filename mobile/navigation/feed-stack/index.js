import Feed from './screens/Feed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FeedStack = createNativeStackNavigator();

export default function FeedStackNavigator() {
	return (
		<FeedStack.Navigator
			initialRouteName='Feed'
			screenOptions={{ headerShown: false }}
		>
			<FeedStack.Screen name='Feed' component={Feed} />
		</FeedStack.Navigator>
	);
}
