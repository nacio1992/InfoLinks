// importando componentes de dentro do react native
import { StyleSheet } from "react-native"

// importando as cores de dentro da pasta styles
import { colors } from "@/styles/colors"

// Usando o export antes da constante, nos permitimos que as estilizações sejam acessadas pelo componente.
export const styles = StyleSheet.create({
       //
    container: {
        flex: 1, //considera toda a area util da tela para os componetes
        justifyContent: "center", // justifica (ajusta) todos os elementos no centro da tela
        alignItems: "center", //alinha todos os elementos no centro da tela
        flexDirection:"column",// organiza todos os elementos dentro do flex box em coluna (um)
         // codigo para identificar as extremidades do container
        borderColor: "red",
        borderWidth: 5,

    },

    title: {
        color: colors.green[900],
        fontSize: 22,
    },

    header: {
        borderWidth: 1,
        borderTopColor: 'red',
        borderBottomColor: 'red',
        borderLeftColor: 'red',
        borderRightColor: 'red',

        paddingHorizontal: 24,
        
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 32,
    },

    logo: {
        height: 32,
        width: 38,
    },
})