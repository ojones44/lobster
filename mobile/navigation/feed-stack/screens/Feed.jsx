// React Native Paper
import { SafeAreaView } from 'react-native-safe-area-context';

// Component imports
import ProfileCard from '../components/ProfileCard';

const Feed = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ProfileCard />
		</SafeAreaView>
	);
};
export default Feed;
