import { Image, Text, View, StyleSheet, Button, TextInput, Alert } from "react-native";
import { useState } from 'react'
import Imagen1 from '../Imagenes/Genero.jpg'
import Imagen2 from '../Imagenes/Edad.jpg'
import Imagen3 from '../Imagenes/Altura.jpg'
import Imagen4 from '../Imagenes/Peso.jpg'
import Imagen5 from '../Imagenes/Actividad.jpg'


const Ccalorias = () => {
    
        const [mostrarResult, setMostrarResult]= useState(0)
        const [genero, setGenero]= useState('')
        const [edad, setEdad]= useState(0)
        const [altura, setAltura]= useState(0)
        const [peso, setPeso]= useState(0)
        const [actividad, setActividad]= useState(0)
        const [af, setAf]= useState(0)



        const CalculaCalorias =()=>{             
            const validaEntrada = verifica(genero,edad,altura,peso,actividad)
            if (validaEntrada){
                const calculaf = actfisica(actividad,genero)              
                setAf(calculaf)  
                if (genero==='M'){
                    const cc= ((65.51 + (9.56*peso)+ (1.85*altura)-(4.68*edad))*af)
                    const ccalo = cc.toFixed(0)
                    setMostrarResult(ccalo)
                }
                if (genero==='H'){
                    const cc= ((66.47 + (13.75*peso)+ (5*altura)-(6.74*edad))*af)
                    const ccalo = cc.toFixed(0)
                    setMostrarResult(ccalo)
                }  
            }
        }
 
        const verifica = (g,e,a,p,c)=>{
            if (g !=='M' && g !=='H'){
                Alert.alert('Genero debe ser H o M')
                return false
            }            
            if (e < 18){
                    Alert.alert('edad debe ser mayor a 18')
                    return false
                }            
            if (a= 0){            
                    Alert.alert('Altura debe ser mayor a 0')
                    return false
                }
            
            if (p = 0){
                        Alert.alert('Peso debe ser mayor a 0')
                        return false
                    }
            if (c = 0 || c>5){
                            Alert.alert('La actividad debe ser entre 1 y 5')
                            return false
                        }
            return true
        }

        const actfisica = (aa, gg) => {   
            const num = parseFloat(aa)          
            if (gg ==='H' ){                
                if (num === 1) return(1.3)
                if (num === 2) return(1.6)
                if (num === 3) return(1.7)
                if (num === 4) return(2.1)
                if (num === 5) return(2.4)
            }    
            if (gg === 'M'){
                if (num === 1) return(1.3)
                if (num === 2) return(1.5)
                if (num === 3) return(1.6)
                if (num === 4) return(1.9)
                if (num === 5) return(2.2)
            }
          }

          

    return ( 
    <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"#dae2f0"
        }}> 
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
            }}>  

            <Text style={styles.titulo}>Consumo Diario de Calorias</Text>
            <Image
            style={styles.logo}            
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLqLT4bMlGpvV0lbomaQkJY6-jL2M70-E_g&s" }}
             />
        </View>       

         <View
            style={{
            flex: 1,        
            flexDirection: "row",
            justifyContent: "right",
            alignItems: "center" 
            }}>   
            <View >                
                {/* <Text style={styles.preg1} >¿Cuál es tu genero ?</Text>    
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRiM-gDsvsMNae0uf5p9DvUY0wzYUMR6V4xQ&s" }}             */}
                <Image
                    style={styles.icono1}
                    source={Imagen1}
                />                
                <TextInput 
                    autoCapitalize="characters" 
                    maxLength={1} 
                    textAlign="center"
                    backgroundColor="#c7d4ca" 
                    placeholder="H ó M"                   
                    value={genero}
                    onChangeText={e => setGenero(e)}
                />
            </View> 
            <View>
                <Text>        </Text>
            </View>   
            <View > 
                {/* <Text style={styles.preg1} >¿Cuántos años tienes ?</Text>
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNbVVKQouE74s62VcjGHXDvbiRTMp1XMALA&s" }}   */}
                <Image
                    style={styles.icono1}
                    source={Imagen2}
                /> 
                <TextInput  
                    maxLength={2} 
                    textAlign="center"
                    backgroundColor="#c7d4ca"
                    value={edad}
                    placeholder="num entero"
                    keyboardType="numeric"
                    onChangeText={e=>setEdad(e)}
                />
            </View>             
        </View>
        <View
            style={{
            flex: 1,           
            flexDirection: "row",
            justifyContent: "right",
            alignItems: "center",
            padding:20     
            }}>   
            <View>
                {/* <Text style={styles.preg1} >¿Cuánto mides?</Text>  */}
                {/* source={{ uri: "data:image/png;base64,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" }}  */}
                <Image
                    style={styles.icono1}
                    source={Imagen3}
                />
                <TextInput  
                    maxLength={3} 
                    textAlign="center"
                    backgroundColor="#c7d4ca"
                    value={altura}
                    placeholder="en cms"
                    keyboardType="numeric"
                    onChangeText={e=>setAltura(parseFloat(e))}
                />
            </View> 
            <View>
                <Text>        </Text>
            </View>       
            <View>
                {/* <Text style={styles.preg1} >¿Cuánto pesas ?</Text>
                //source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbZkZvAg2zZZutlQKCQR1pPyFnsVtpbqmaw&s" }}   */}
                <Image
                    style={styles.icono1}
                    source={Imagen4}  
                />
                <TextInput  
                    maxLength={3} 
                    textAlign="center"
                    backgroundColor="#c7d4ca"
                    value={peso}
                    placeholder="en kgs"
                    keyboardType="numeric"
                    onChangeText={e=>setPeso(e)}
                />
            </View> 
        </View>
        <View
            style={{
            flex: 1,           
            flexDirection: "row",
            justifyContent: "right",
            alignItems: "center "           
            }}>   
            <View> 
                {/* <Text  >¿Que tan activo eres?</Text>  */}
                <Image
                style={styles.icono2}
                source={Imagen5}
                //source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIywgGso335J0L6sJ7DFPaoIEPPceaqmSbQ&s" }}
                 />
                <TextInput  
                    maxLength={1} 
                    textAlign="center"
                    backgroundColor="#c7d4ca"  
                    value={actividad}
                    placeholder="1,2,3,4,5"
                    keyboardType="numeric"
                    onChangeText={e=>setActividad(e)}
                />
            </View>  
        </View > 
        <View style={{borderBottomColor:'black', borderBottomWidth:3, padding:30}} >
            <Button                 
                title="Mostrar Resultado"
                color="#3cc954"                                               
                onPress={CalculaCalorias}                    
             />
            </View>
        <View 
            style={{
            flex: 1,           
            flexDirection: "row",
            justifyContent: "right",
            alignItems: "center",
            
            }}
        >
 
            <Text style={styles.display}>Calorias x Dia  </Text>
            <Text style={styles.display}>{mostrarResult}</Text>
        </View>
 
    </View>
 
    )}

    const styles = StyleSheet.create({
        logo: {
          width: 80,
          height:70
        },       
        titulo:{            
            fontSize: 18,
            color: "white",
            textAlign: 'center',            
            backgroundColor:'#0c9124'            
        },
        bboton: { 
            alignItems: "center",
            margintop: 20
        },       
         preg1:{ 
            width: 200,
            textAlign: 'center',  
        },
        icono1: {
            width: 150,
            height: 90, 
            margintop: 5,
            alignContent:'center'
          },
          icono2: {
            width: 300,
            height: 90,      
            marginBottom:10,
            alignContent:'center'
          },
          display:{
            fontSize: 20,
            marginBottom:5,
            color: "#e30505",
            textAlign:'right'
        }        
      })


export default Ccalorias