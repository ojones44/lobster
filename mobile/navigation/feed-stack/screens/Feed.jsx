// Gluestack imports
import { Center, SafeAreaView } from '@gluestack-ui/themed';

// Component imports
import ProfileCard from '../components/ProfileCard';

const Feed = () => {
	return (
		<SafeAreaView>
			<Center w={'100%'}>
				<ProfileCard />
			</Center>
		</SafeAreaView>
	);
};
export default Feed;
