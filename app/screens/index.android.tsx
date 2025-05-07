import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Animated, {
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Startup: React.FC<never> = () => {
  const router = useRouter();
  const radius = useSharedValue(105);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    radius.value = withTiming(0, { duration: 300 });
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
    setTimeout(() => {
      router.replace('/home');
    }, 1500);
  }, []);

  const iStyle = useAnimatedStyle(() => {
    return {
      height: 190, //height.value,
      width: 180, //width.value,
      marginBottom: 32,
      borderRadius: radius.value,
    };
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
      <Animated.View layout={LinearTransition}>
        <Animated.Image
          source={require('@assets/images/A.png')}
          style={iStyle}
        />
      </Animated.View>
      {showLoader ? <ActivityIndicator size='large' color='#fff' /> : null}
    </View>
  );
};

export default Startup;
