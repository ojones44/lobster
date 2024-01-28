import Login from './screens/Login';
import Signup from './screens/Signup';
import Landing from './screens/Landing';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
	return (
		<AuthStack.Navigator
			initialRouteName='Landing'
			screenOptions={{ headerShown: false }}
		>
			<AuthStack.Screen name='Landing' component={Landing} />
			<AuthStack.Screen name='Login' component={Login} />
			<AuthStack.Screen name='Signup' component={Signup} />
		</AuthStack.Navigator>
	);
}
