import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

interface StylesProps {
  logoImage: ImageStyle;
  companyName: TextStyle;
  infoContainer: ViewStyle;
  infoWrapper: ViewStyle;
  location: TextStyle;
}


export const styles = StyleSheet.create<StylesProps>({
logoImage: {
    width: "70%",
    height: "70%",
    borderRadius: 6,
  },

  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },

  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});









interface StyleObject {
  fontSize: number;
  fontFamily: string;
  color: string;
}

interface Item {
  job_id: string;
}

 export const jobName = (selectedJob: string, item: Item): StyleObject => ({
    fontSize: SIZES.large,
    fontFamily: FONT.bold, 
    color: selectedJob === item.job_id ? 'COLORS.white' : 'COLORS.primary',
  })


   export const  container = (selectedJob: string, item: Item) => ({
    width: 250,
    padding: SIZES.xLarge, 
    backgroundColor: selectedJob === item.job_id ? 'COLORS.primary' : '#FFF',
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    shadowColor: COLORS.white,
  } as const )

  
  export const logoContainer =  (selectedJob: string, item: Item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? '#FFF' : 'COLORS.white',
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  } as const )

  export const publisher =  (selectedJob: string, item: Item): StyleObject => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? 'COLORS.white' : 'COLORS.primary',
  })






