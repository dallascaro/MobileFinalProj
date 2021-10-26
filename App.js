import { StatusBar } from 'expo-status-bar';
//import * as React from 'react';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, TextInput, View, SafeAreaView,
   Image, FlatList, SectionList, ScrollView, Button, Touchable, TouchableHighlight } from 'react-native';
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
        onPress={() => navigation.navigate('Login')}>
        </Button>
        <Button
        title = "Create an Account"
        onPress={() => navigation.navigate('Create')}>
        </Button>
    </View>
      
      <StatusBar style="auto" />
     
    </View>
  );
}

function SearchScreen({navigation}){
  const{text, onChangeText} = React.useState("Placeholder");
  return(
    <View>
      <Text>Welcome to the Search Screen</Text>
      
      <View>
        <View>
        <SafeAreaView>
        <TextInput
            onChangeText = {onChangeText}
            value = {text}
            placeholder = "Enter text"/>
       </SafeAreaView>
        </View>
    
       <View>
        <ScrollView horizontal = {true}> 

        <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie1.png')}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie2.png')}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie3.png')}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie4.png')}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie11.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie12.png')}/>
            </TouchableHighlight>

        </ScrollView>
        </View>

        <View>
        <ScrollView horizontal = {true}> 
        <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie5.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie6.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie7.png')}/>
          </TouchableHighlight>

           <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie8.png')}/>
            </TouchableHighlight>    

            <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie9.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('Movies')} >
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie10.png')}/>
          </TouchableHighlight>

        </ScrollView>
        </View>

        <View>
        <ScrollView horizontal = {true}> 
        <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie9.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('Movies')} >
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie10.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie11.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie12.png')}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie1.png')}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie2.png')}/>
            </TouchableHighlight>

        </ScrollView>
        </View>

       </View>
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

function CreateScreen({navigation}){
  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  return(
    <View>
      <Text>Welcome to the Create Screen</Text>

      <SafeAreaView>
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
       </SafeAreaView>

       <Button
          title = "Login to Account"
          onPress={() =>  navigation.navigate('Login')}>
        </Button>
      <StatusBar style="auto" />
      
    </View>

  );

}

function LoginScreen({navigation}){
  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  return(
    <View>
      <Text>Welcome to the Login Screen</Text>
      
      <SafeAreaView>
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
       </SafeAreaView>

       <Button
          title = "Login to Account"
          onPress={() =>  navigation.navigate('Search')}>
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
      <View>
      <Image style={styles.Logo} source={require('./assets/MoviePosters/freeGuy.jpg')}/>
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
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
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ScrollView:{
    paddingTop: '10px',
  },
  row: {
    flexDirection: "row",
    paddingBottom: 20
  },
  tinyLogo: {
    width: '30%',
    height: '80%',
    paddingBottom: 20,
  },
  Logo: {
    width: 400,
    height: 500,
  },
  text: {
    padding: 50,
    paddingRight: 50,
    backgroundColor: 'black',
    fontSize: 20,
    color: 'white',
  }, 
});

