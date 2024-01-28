// Style imports
import { StyleSheet } from 'react-native';

// Gluestack imports
import {
	Text,
	Box,
	ButtonText,
	Button,
	Image,
	Checkbox,
	CheckboxIndicator,
	CheckboxIcon,
	CheckIcon,
	HStack,
	Alert,
	AlertText,
} from '@gluestack-ui/themed';

// React imports
import { useRef, useState } from 'react';

const Landing = ({ navigation }) => {
	const [isChecked, setIsChecked] = useState(false);
	const [showAlert, setShowAlert] = useState(true);

	return (
		<Box style={styles.container}>
			<HStack alignItems='center' gap={12}>
				<Image
					size='xs'
					source={require('../../../assets/lobster-logo.png')}
					alt='logo'
				/>
				<Text style={styles.logo}>Lobster.</Text>
			</HStack>
			<Box style={styles.sign_up}>
				<Button
					onPress={() =>
						isChecked ? navigation.navigate('Signup') : setShowAlert(true)
					}
					action='secondary'
					variant='outline'
				>
					<ButtonText>Sign up!</ButtonText>
				</Button>
				<Checkbox
					onChange={() => setIsChecked(!isChecked)}
					isChecked={isChecked}
					isDisabled={false}
					isInvalid={false}
					size='lg'
				>
					<Text>Accept Terms and Conditions</Text>
					<CheckboxIndicator ml='$2'>
						<CheckboxIcon as={CheckIcon} />
					</CheckboxIndicator>
				</Checkbox>
			</Box>
			{showAlert && (
				<Alert style={styles.alert}>
					<AlertText style={{ textAlign: 'center' }}>
						Please Accept Terms and Conditions
					</AlertText>
					<Button onPress={() => setShowAlert(false)}>
						<ButtonText>Okay</ButtonText>
					</Button>
				</Alert>
			)}
		</Box>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		fontFamily: 'Pacifico',
		fontSize: 50,
		color: '#6e2ca0',
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
		backgroundColor: '#fff',
		borderColor: '#6e2ca0',
		borderWidth: 1,
		borderRadius: 15,
	},
});

export default Landing;
