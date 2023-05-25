import React from 'react';
//mport { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { withNavigation } from '@react-navigation/compat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import Home from './Home';
import MessageScreen from './message';
import ContactScreen from './contact';
import SearchScreen from './search';
import Description from './Description';

const Stack = createStackNavigator();
//const navigation = navigation(Description);

const Tab = createBottomTabNavigator();


const App = () => (
  
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        header: () => null,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={14} color="#FFA500" />
          ),
          }} 
          />
      <Tab.Screen name="Message" component={MessageScreen} options={{
        tabBarIcon: ({ color, size }) => (
        <AntDesign name="message1" size={14} color="#808080" />
        ),
        }}
      />
      <Tab.Screen name="Contact" component={ContactScreen} options={{
        tabBarIcon: ({ color, size }) => (
        <AntDesign name="contacts" size={14} color="#808080" />
        ),
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: ({ color, size }) => (
        <AntDesign name="search1" size={14} color="#808080" />
        ),
        }}
      />
      {/* <Tab.Screen name="Description">
        {() => (
          <Stack.Navigator>
            <Stack.Screen
                name="Description"
                component={() => <DescriptionWithNavigation navigation={navigation} />}
                options={{
                header: () => null,
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="description" size={14} color="#FFA500" />
                  ),
                  headerLeft: () => (
                    <Ionicons
                      name="arrow-back"
                      size={24}
                      color="black"
                      onPress={() => navigation.goBack()} />
                  )
              
                  }} 
                  /> */}
          <Tab.Screen
            name="Description"
            component={Description}
            options={{
              header: () => null,
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="infocirlceo" size={14} color="#808080" />
                ),
                }} 
                />
      </Tab.Navigator>
    </NavigationContainer>
  );

export default App;