import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 20
    },
  
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
  
    total: {
      padding: 24,
      borderRadius: 8,
      backgroundColor: "#FFF",
      marginBottom: 16,
      marginTop: 48
    },
  
    propriedade: {
      fontSize: 14,
      color: "#41414d",
      fontWeight: "bold",
      marginTop: 24
    },
  
    valor: {
      marginTop: 8,
      fontSize: 15,
      color: "#737380"
    },
  
    actions: {
      marginTop: 16,
      flexDirection: "row",
      justifyContent: "space-between"
    },
  
  });