// React Native Paper
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

// Style imports
import { StyleSheet } from 'react-native';
import { Colours } from '../../../styles';

// React Imports
import { useState } from 'react';

const Landing = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSignIn = () => {
		setIsLoading(true);

		setTimeout(() => {
			navigation.navigate('Signup');
			setIsLoading(false);
		}, 2000);
	};

	return (
		<View style={styles.container}>
			<Text variant='logoVariant'>Lobster.</Text>
			<View style={styles.sign_up}>
				<Button
					style={{ borderWidth: 2, borderColor: Colours.black }}
					textColor={Colours.black}
					loading={isLoading ? true : false}
					mode='contained-tonal'
					onPress={handleSignIn}
				>
					<Text variant='textBold'>Sign up!</Text>
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	sign_up: {
		position: 'absolute',
		bottom: '20%',
		alignItems: 'center',
		gap: 10,
	},
	alert: {
		position: 'absolute',
		alignItems: 'center',
		width: '80%',
		gap: 30,
		flexDirection: 'column',
		paddingHorizontal: 10,
		paddingVertical: 75,
		borderWidth: 1,
		borderRadius: 15,
	},
});

export default Landing;
