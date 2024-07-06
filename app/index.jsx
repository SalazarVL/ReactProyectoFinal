import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ccalorias from "../components/Ccalorias";
import App from "../components/App";


const Stack =createStackNavigator()

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="MainMenu">
          <Stack.Screen name= "cc" component={App}/>  
          <Stack.Screen name= "Calculadora" component={Ccalorias}/>                  
      </Stack.Navigator>
    </NavigationContainer>      
  )
}


        
