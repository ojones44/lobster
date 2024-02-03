// React Native Paper
import { ImageBackground, View } from 'react-native';
import { Text } from 'react-native-paper';

// Style imports
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Asset imports
import bgImg from '../../../assets/images/oli.jpg';

import { Colours } from '../../../styles';

const ProfileCard = () => {
	return (
		<>
			<ImageBackground style={styles.container} source={bgImg}>
				<View style={styles.info}>
					<Text style={{ textTransform: 'uppercase', fontSize: 50 }}>
						Oliver
					</Text>

					<Text>Software Developer | 30</Text>
					<Text>Essex | 10 Miles</Text>
				</View>
			</ImageBackground>
			<View>
				<Text>ervergre</Text>
				<Text>ervergre</Text>
				<Text>ervergre</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	info: {
		alignItems: 'center',
		// color: Colours.white,
		paddingBottom: 10,
		gap: 5,
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
	},
});

export default ProfileCard;
