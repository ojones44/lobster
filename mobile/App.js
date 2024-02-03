// React Native Paper
import { PaperProvider, Text } from 'react-native-paper';
import { lobsterTheme } from 'config/lobster.themeConfig';

// Style imports
import { useFonts } from 'expo-font';

// Nav imports
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './navigation/auth-stack';
import TabNavigator from './navigation/tab-navigator';

// React imports
import { useState } from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [fontsLoaded] = useFonts({
		Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
		Ubuntu: require('./assets/fonts/Ubuntu-Regular.ttf'),
		UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	}

	return (
		<PaperProvider theme={lobsterTheme}>
			<NavigationContainer theme={lobsterTheme}>
				{isLoggedIn ? <TabNavigator /> : <AuthStackNavigator />}
			</NavigationContainer>
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => App);
