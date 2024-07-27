import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profile-store';
const ProfileScreen = () => {
  const name = useProfileStore((state) => state.name);
  const email = useProfileStore((state) => state.email);
  const setName = useProfileStore((state) => state.setName);
  const setEmail = useProfileStore((state) => state.setEmail);
  const changeProfile = useProfileStore((state) => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => setName('Alancito')}
      >
        <Text>Change name</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => setEmail('alan.bruno@gmail.com')}
      >
        <Text>Change email</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('John Doe', 'johndoe@gmail.com')}
      >
        <Text>Change profile</Text>
      </Pressable>
    </View>
  );
};
export default ProfileScreen;
