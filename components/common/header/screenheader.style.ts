import { StyleSheet, ViewStyle, ImageStyle } from "react-native";
import { COLORS, SIZES } from "../../../constants";

interface StylesProps {
  btnContainer: ViewStyle;
  // btnImg: (dimension: number) => ImageStyle;
}

const styles = StyleSheet.create<StylesProps>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  // btnImg: (dimension: number) => ({
  //   width: dimension,
  //   height: dimension,
  //   borderRadius: SIZES.small / 1.25,
  // }),
});

const dynamicStyles = (dimension: number): ImageStyle => ({
  width: dimension,
  height: dimension,
  borderRadius: SIZES.small / 1.25,
});

export { styles, dynamicStyles };
