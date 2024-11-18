import {} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} opitions={{headerShown: false}} />
            <Stack.Screen name='Movie' component={MovieScreen} opitions={{headerShown: false}} />
            <Stack.Screen name='Person' component={PersonScreen} opitions={{headerShown: false}} />
            <Stack.Screen name='Search' component={SearchScreen} opitions={{headerShown: false}} />
         </Stack.Navigator>
    </NavigationContainer>
  )
}