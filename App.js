import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home screen</Text>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{height: 30, width: 50, backgroundColor: 'green'}}>
        <Text>ok</Text>
      </TouchableOpacity>
    </View>
  );
};

const Edit = ({navigation}) => {
  return (
    <View>
      <Text>Edit Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{height: 45, width: 80}}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'skyblue',
            width: 240,
          },
          drawerLabelStyle: {
            fontSize: 18,
            color: 'black',
          },
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}>
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="edit" component={Edit} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
