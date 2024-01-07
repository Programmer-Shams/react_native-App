import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import styles from "./popularjobs.style";
import { useState } from "react";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import fetchData from "../../../api/fetchData";


// interface ApiResponse {

type ApiResponse<T> = {
  data: T;
};

const Popularjobs = () => {
const { isLoading, error, data  } = fetchData<any>(
  'search', {
    query: 'React Developer',
    num_page: 1
    }
) 

// console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show ALL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList
            data={data}
            renderItem={({ item }) =>  {
              console.log('ITEM IS HEREEEEEE',item)
              return (
                <PopularJobCard
                  item={item}
                  selectedJob={item.job_id}
                />
              )
            } 
            }
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
          )}
      </View>
    </View>
  );
};

export default Popularjobs
