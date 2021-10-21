import { StatusBar } from 'expo-status-bar';
//import * as React from 'react';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, TextInput, View, Image, SafeAreaView, FlatList, SectionList, ScrollView, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import movieData from './movieData.json';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}){

  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  
  return(
    <View>
      <Text>Welcome to the Home Screen</Text>
      <Text>Please either Login into you account or create an acount </Text>
    <View>
      
    <TextInput 
      placeholder = "Username: "
      onChangeText = {onChangeText}
      value = {userName}>
      </TextInput>
      <TextInput 
      placeholder = "Password: "
      onChangeText = {onChangeText2}
      value = {password}>
      </TextInput>

      <Button
        title = "Login to Account"
        onPress={() => navigation.navigate('Search')}>
        </Button>
        <Button
        title = "Create an Account"
        onPress={() => navigation.navigate('Search')}>
        </Button>
    </View>
      
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
  const{text, onChangeText} = React.useState("Placeholder");
  return(
    <View>
      <Text>Welcome to the Search Screen</Text>
      
      <SafeAreaView>
        <TextInput
            onChangeText = {onChangeText}
            value = {text}
            placeholder = "Enter text"/>
       </SafeAreaView>

       <Button
        title = "Search for input"
        onPress={() =>  navigation.navigate('Movies')}>
        </Button>
      <StatusBar style="auto" />

      <View> 
        <Button
        title = "Go to home Screen"
        onPress={() => navigation.navigate('Home')}>
        </Button>
      </View>
    </View>

  );

}

function movieScreen(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Movies" component={movieScreen} />
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

