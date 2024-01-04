import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, SIZES, icons, images } from '../constants';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import Welcome from '../components/home/welcome/Welcome';
import Popularjobs from '../components/home/popular/Popularjobs';
import Nearbyjobs from '../components/home/nearby/Nearbyjobs'

export default function TabOneScreen() {
  const router = useRouter()
  return (
   <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
    <Stack.Screen 
    options={{
      headerStyle: { backgroundColor: COLORS.lightWhite },
      headerShadowVisible: false,
      headerLeft: () => (
        <ScreenHeaderBtn iconUrl={icons.menu} dimension={25} />
      ),
      headerRight: () => (
        <ScreenHeaderBtn iconUrl={images.profile} dimension={40} />
      ),
      headerTitle: ""
    }}
    />

    
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, padding: SIZES.medium}}>
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </View>
    </ScrollView>
   </SafeAreaView>
  );
}
