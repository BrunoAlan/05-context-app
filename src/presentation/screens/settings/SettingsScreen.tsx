import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { Stack } from 'expo-router';
import { useCounterStore } from '../../store/counter-store';
const SettingsScreen = () => {
  const counter = useCounterStore((state) => state.counter);
  const incrementBy = useCounterStore((state) => state.incrementBy);
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: `${counter}`,
        }}
      />
      <Pressable style={styles.primaryButton} onPress={() => incrementBy(1)}>
        <Text>Increment</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={() => incrementBy(-1)}>
        <Text>Decrement</Text>
      </Pressable>
    </View>
  );
};
export default SettingsScreen;
