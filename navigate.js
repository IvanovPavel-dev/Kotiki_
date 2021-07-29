import React from 'react'
import Main from './components/Main'
import Favorites from './components/Favorites'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

export default function Navigate() {
    return <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name='Main'
                        component={Main}
                        option={{title:'Главная'}}
                    />
                    <Stack.Screen 
                        name='Favorites'
                        component={Favorites}
                        option={{title:'Любимчики'}}
                    />
                </Stack.Navigator>          
            </NavigationContainer>
}