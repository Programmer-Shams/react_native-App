import { ImageStyle } from "react-native";
import { SIZES } from "../../../constants";

const dynamicStyles = (dimension: number): ImageStyle => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  });
  