// Style imports
import { useFonts } from 'expo-font';

// Gluestack imports
import { GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';

// Nav imports
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './navigation/auth-stack';
import TabNavigator from './navigation/tab-navigator';

// React imports
import { useState } from 'react';

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const [fontsLoaded] = useFonts({
		Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	}

	return (
		<NavigationContainer>
			<GluestackUIProvider config={config}>
				{isLoggedIn ? <TabNavigator /> : <AuthStackNavigator />}
			</GluestackUIProvider>
		</NavigationContainer>
	);
}
