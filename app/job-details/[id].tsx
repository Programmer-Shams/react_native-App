import { useRoute } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { Text } from "react-native";
import fetchData from "../../api/fetchData";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../../constants";
import { ScreenHeaderBtn } from "../../components";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";

const jobDetails = () => {
  const router = useRouter();
  const route = useRoute();
  const jobId = route.params;

  const [refreshing, setRefreshing] = useState(false);

  const { isLoading, error, data } = fetchData<any>("job-details", {
    job_id: jobId,
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension={60}
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension={60} />
          ),
          headerTitle: "",
        }}
      />
     <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >

      </ScrollView>
    </SafeAreaView>
  );
};
export default jobDetails
