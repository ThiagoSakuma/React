import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

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

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 30,
        color: "#13131a",
        fontWeight: "bold"
    },

    descricao: {
        fontSize: 16,
        lineHeight: 24,
        color: "#737380"
    },

    totais: {
        marginTop: 32
      },
    
      total: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16
      },

      propriedade: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold"
      },

      valor: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: "#737380"
      },

      button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },

      textButton: {
        color: "#e02041",
        fontSize: 15,
        fontWeight: "bold"
      }

});