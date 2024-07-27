import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { Stack, useNavigation } from 'expo-router';
import { useCounterStore } from '../../store/counter-store';
import { useEffect } from 'react';
const SettingsScreen = () => {
  const counter = useCounterStore((state) => state.counter);
  const incrementBy = useCounterStore((state) => state.incrementBy);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Counter: ${counter}`,
    });
  }, [counter]);

  return (
    <View style={styles.container}>
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
