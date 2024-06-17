import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Tela1 from './components/Tela1.js';
import Tela2 from './components/Tela2.js';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle:{
            backgroundColor:'#001621',
            height: 60
          },
          tabBarLabelStyle:{
            fontSize: 22,
            fontWeight: '500',
            color: '#4babe5'
          },
          tabBarActiveTintColor:'#009af7'
        }}
      >
        <Tabs.Screen
          name='Agendaa'
          component={Tela1}
          options={{
            tabBarIcon: ({color, size})=>(<Ionicons name="calendar" color={color} size={size} />)
          }}
        />
        <Tabs.Screen
          name='Tela 2'
          component={Tela2}
        />
        
        
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
