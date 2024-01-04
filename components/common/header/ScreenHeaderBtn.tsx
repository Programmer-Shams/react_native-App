import React from "react";
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { dynamicStyles, styles } from "./screenheader.style";
// import styles from "./screenheader.style";

interface HeaderProps  {
  iconUrl: ImageSourcePropType,
  dimension: number,
  handlePress?: () => void
}
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: HeaderProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
      source={iconUrl}
      resizeMode="cover"
      style={dynamicStyles(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
