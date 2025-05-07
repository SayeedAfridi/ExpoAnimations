import { Stack } from 'expo-router';
import { View } from 'react-native';

const Home = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Animations', animation: 'fade' }} />
    </View>
  );
};

export default Home;
