import { View,Text, StyleSheet} from "react-native";


export default function Index () {
return(

 //view e um componete que recebe estilizaçao ,semelhante a div do html
<View style={styles.container}>
    <Text style={styles.title}> eu sou o milior!!</Text>
    <text style={styles.title2}> inacio</text> 
    <text style={styles.title3}> cursando tecnico informatica</text>
    <text style={styles.title4}> rua tal</text>

</View>
);
}

// estilizacoes criadas usando o styleSheet
const styles = StyleSheet.create({
    container: {
        flex:1, //considera toda a area util da tela para os componetes
        justifyContent: "center", // justifica (ajusta) todos os elementos no centro da tela
        alignItems: "center", // alinha todos os elementos no centro da tela 
        flexDirection: "row", //organiza todos os elementos dentro do flex em linha (esquerda )
    },

    title:{
        color: "red",
        fontSize: 22,
    },

    title2:{
        color: "blue",
        fontSize: 26,
    },

    title3:{
        color:"green",
        fontSize: 24,
    },

    title4:{
        color: "orange",
        fontSize: 24,
    },

})