import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import Login from './main/Login'
import Signup from './main/Signup'
import Home from './main/Home'
import main from './main/main'


import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack({ navigation }) {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/*
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                */}
                <Stack.Screen name="main" component={main} />
                </Stack.Navigator>
        </NavigationContainer>

    );
}
export default MyStack