import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import styles, { tab } from "./welcome.style";
import { SIZES, icons } from "../../../constants";
import { useRouter } from "expo-router";


const Welcome = () => {
  const jobTypes = ["Full Time", "Part Time", "Freelance",]
  const [activeJobType, setActiveJobType] = useState('Full Time')
  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Shams</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput} 
          placeholder="Search for job"
          value=""
          onChange={() => {}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          /> 
        </TouchableOpacity>
      </View>


      <View style={styles.tabsContainer}>
        <FlatList
        data={jobTypes}
        renderItem={({ item }) => (
          <TouchableOpacity 
          style={tab(activeJobType, item)} 
          onPress={() => {setActiveJobType(item); 
          (router as any).push(`/search/${item}` as const);
        }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
