import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const Startup: React.FC<never> = () => {
  const router = useRouter();
  const height = useSharedValue(875);
  const width = useSharedValue(700);
  const indicatorOpacity = useDerivedValue(() => {
    return height.value === 150 && width.value === 140 ? 1 : 0;
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    height.value = withTiming(150, { duration: 300 });
    width.value = withTiming(140, { duration: 300 });
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setTimeout(() => {
      router.replace('/home');
    }, 1500);
  }, []);

  const iStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      width: width.value,
      marginBottom: 32,
    };
  }, []);

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(indicatorOpacity.value),
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
      <AnimatedImage source={require('@assets/images/A.png')} style={iStyle} />
      <Animated.View style={indicatorStyle}>
        <ActivityIndicator size='large' color='#fff' />
      </Animated.View>
    </View>
  );
};

export default Startup;
