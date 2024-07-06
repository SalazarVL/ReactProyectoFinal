import { Image, Text, View, StyleSheet, Button } from "react-native";

    
const App = (props) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={styles.titulo} >Calculadora de Calorías</Text>
            <Image
                style={styles.logo}               
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe9HbbfWL3eUzpFwBhpNN4mb_PQqogoy2A9w&s" }} />
            
            <View style={{
                flex: 2,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={styles.titulo1}>Click para conocer cuantas calorías debes comer por dia</Text>
                <Button
                    title="Iniciar"
                    color="#3cc954"                                     
                    onPress={() => props.navigation.navigate("Calculadora")}                    
                />
            </View>

        </View>
    )
}





const styles = StyleSheet.create({
    logo: {
      width: 400,
      height:300,      
      marginBottom:20,
      marginTop:20
    },
    titulo:{
        marginTop:30,
        fontSize: 20,
        color: "#f50a16"
    },
    titulo1:{
        textAlign: 'center',
        width: 200,
        paddingTop: 20,
        paddingRight:30
       
    }
  })


export default App
