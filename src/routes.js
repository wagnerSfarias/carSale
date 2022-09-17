import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Cars from './pages/Cars';
import Brands from './pages/Brands';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}
                options={{ headerShown: false }} />

            <Stack.Screen name='Brands' component={Brands}
                options={{ headerShown: false }} />

            <Stack.Screen name='Cars' component={Cars}
                options={{
                    title: 'Veículos Disponíveis',
                    headerStyle: { backgroundColor: '#25221F' },
                    headerShadowVisible: false,
                    headerTintColor: '#FFF'
                }}
            />

        </Stack.Navigator>
    );
}