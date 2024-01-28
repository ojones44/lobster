// Style imports
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Gluestack imports
import {
	VStack,
	HStack,
	View,
	Heading,
	Text,
	ImageBackground,
} from '@gluestack-ui/themed';

const ProfileCard = () => {
	return (
		<VStack>
			<View
				style={{ borderRadius: 20, overflow: 'hidden', position: 'relative' }}
				h={300}
				w={300}
			>
				<ImageBackground
					source={{
						uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
					}}
					style={{
						flex: 1,
						padding: 20,
						justifyContent: 'flex-end',
					}}
				>
					<LinearGradient
						style={styles.overlay}
						colors={['transparent', 'rgba(0,0,0,1)']}
						end={{ x: 0.5, y: 0.5 }}
					>
						<Heading color='#fff' size='sm'>
							Ronald Richards
						</Heading>
						<Text color='#fff'>30</Text>
					</LinearGradient>
				</ImageBackground>
			</View>

			<Text>Nursing Assistant</Text>
			<Text>Location: Essex</Text>
			<Text>10 Miles</Text>
		</VStack>
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
	overlay: {
		position: 'absolute',
		top: '85%',
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 1,
		justifyContent: 'center',
		paddingLeft: 12,
		borderTopRightRadius: 20,
	},
});

export default ProfileCard;
