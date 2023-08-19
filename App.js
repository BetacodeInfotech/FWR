import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './src/Screen/OnBoardScreen';
import BottomNavigator from './src/Components/BottomNavigator';
import DetailsScreen from './src/Screen/DetailsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Order from './src/Screen/Order';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
                    <Stack.Screen name="HomeScreen" component={BottomNavigator} />
                    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                    <Stack.Screen name="Order" component={Order} />
                    {/* <Stack.Screen name="Cart" component={BottomNavigator} />
                    <Stack.Screen name="Notification" component={BottomNavigator} />
                    <Stack.Screen name="Favourite" component={BottomNavigator} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;