import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, SectionList, ScrollView, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function HomeScreen({navigation}){
  return(
    <View>
      <Text>Welcome to the Home Screen</Text>
      <StatusBar style="auto" />
      <View> 
        <Button
        title = "Go to search Screen"
        onPress={() => navigation.navigate('Search')}>
        </Button>
      </View>
    </View>
  );
}

function SearchScreen({navigation}){
  return(
    <View>
      <Text>Welcome to the Search Screen</Text>
      <StatusBar style="auto" />
      <View> 
        <Button
        title = "Go to home Screen"
        onPress={() => navigation.navigate('Search')}>
        </Button>
      </View>
    </View>

  );

}

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

