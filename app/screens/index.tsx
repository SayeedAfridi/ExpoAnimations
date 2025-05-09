import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';

const Startup: React.FC<never> = () => {
  const router = useRouter();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setTimeout(() => {
      router.replace('/home');
    }, 1500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FA4268',
      }}
    >
      <Stack.Screen options={{ headerShown: false, animation: 'fade' }} />
      <Image
        source={require('@assets/images/A.png')}
        style={{ height: 100, width: 100, marginBottom: 32 }}
      />
      <ActivityIndicator size='large' color='#fff' />
    </View>
  );
};

export default Startup;
