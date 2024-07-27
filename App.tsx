import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './src/config/app-theme';
import HomeScreen from './src/presentation/screens/home/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style='dark' />
    </View>
  );
}
