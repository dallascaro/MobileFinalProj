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
      <Text>Please either Login into you account or create an account </Text>
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

      <Button style={styles.button}
        title = "Sign Up!"
        onPress={() => navigation.navigate('Create')}>
        </Button>
        <Button style={styles.button}
        title = "Login In"
        onPress={() => navigation.navigate('Account')}>
        </Button>

    </View>
      
      <StatusBar style="auto" />
     
    </View>
  );
}

function SearchScreen({navigation}){
  return(
    <View>
      <Text>Please select a movie from the list you would like to leave a review for!</Text>
      
      <View>
    
       <View>
        <ScrollView horizontal = {true}> 

        <TouchableHighlight onPress={() =>  navigation.navigate('DUNE')}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie1.png')}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() =>  navigation.navigate('NIGHT TEETH')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie2.png')}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() =>  navigation.navigate('FREE GUY')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie3.png')}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() =>  navigation.navigate('OLD')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie4.png')}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie11.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('KINGS MAN')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie12.png')}/>
            </TouchableHighlight>

        </ScrollView>
        </View>

        <View>
        <ScrollView horizontal = {true}> 
        <TouchableHighlight onPress={() =>  navigation.navigate('EVERY LAST ONE OF THEM')}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie5.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('BLACK WIDOW')}>
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie6.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('Movies')}>
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie7.png')}/>
          </TouchableHighlight>

           <TouchableHighlight onPress={() =>  navigation.navigate('JURRASIC WORLD')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie8.png')}/>
            </TouchableHighlight>    

            <TouchableHighlight onPress={() =>  navigation.navigate('SPIDEMAN NO WAY HOME')}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie9.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('MATRIX')} >
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie10.png')}/>
          </TouchableHighlight>

        </ScrollView>
        </View>

        <View>
        <ScrollView horizontal = {true}> 
        <TouchableHighlight onPress={() =>  navigation.navigate('SPIDERMAN NO WAY HOME')}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie9.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('MATRIX')} >
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie10.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('RESIDENT EVIL')}>
          <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie11.png')}/>
          </TouchableHighlight>

          <TouchableHighlight onPress={() =>  navigation.navigate('KINGS MAN')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie12.png')}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() =>  navigation.navigate('SUNC')}>
        <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie1.png')}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={() =>  navigation.navigate('NIGHT TEETH')}>
            <Image style={styles.tinyLogo ,styles.row, styles.text} source={require('./assets/MoviePosters/Movie2.png')}/>
            </TouchableHighlight>

        </ScrollView>
        </View>

       </View>
      <StatusBar style="auto" />

      <View> 
        <Button style={styles.button}
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
      <Text>Please Create an Account using a username and password!</Text>

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

       <Button style={styles.button}
          title = "Create Account"
          onPress={() =>  navigation.navigate('Account')}>
        </Button>
      <StatusBar style="auto" />
      
    </View>

  );

}


function accountScreen({navigation}){
  return(
    <View>
      <Text>Welcome to your Account</Text>

        <Button style={styles.button}
          title = "Selecte Movies To Review"
          onPress={() =>  navigation.navigate('Search')}>
        </Button>
        <Button style={styles.button}
          title = "Movies Reviewed"
          onPress={() =>  navigation.navigate('Search')}>
        </Button>
      <StatusBar style="auto" />

      <View> 
        <Button style={styles.button}
          title = "Go to home Screen"
          onPress={() => navigation.navigate('Home')}>
        </Button>
      </View>

    </View>

  );

}

function LoginScreen({navigation}){
  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  return(
    <View>
      <Text>Please Login to your account</Text>

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

       <Button style={styles.button}
          title = "Login to Account"
          onPress={() =>  navigation.navigate('Login')}>
        </Button>
      <StatusBar style="auto" />
      
    </View>

  );

}

function movieScreen(){

  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  const{review, onChangeText3} = React.useState("Placeholder");

  return (
    <View>
      <View>
      <Image style={styles.tinyLogo} source={require('./assets/MoviePosters/Movie1.png')}/>
      <Text>DUNE </Text>
      <Text>Release Date: 2021</Text>
      <Text>Genre: Sci-fi / Adventure  Runtime: 2HR 35 Min</Text>
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
      <TextInput 
      placeholder = "Review: "
      onChangeText = {onChangeText3}
      value = {review}
      editable maxLength = {100}>
      </TextInput>

      <Button style={styles.button}
        title = "Enter Review!"
        onPress={() => navigation.navigate('Create')}>
        </Button>
      </View>
    </View>
  );
}

function movieOneScreen(){

  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  const{review, onChangeText3} = React.useState("Placeholder");

  return (
    <View >
      <View>
      <Image style={styles.tinyLogo} source={require('./assets/MoviePosters/Movie2.png')}/>
      </View>
      <Text>NIGHT TEETH </Text>
      <Text>Release Date: 2021  </Text>
      <Text>Genre: Action / Crime / Drama  Runtime: 1HR 47 Min</Text>

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
      <TextInput 
      placeholder = "Review: "
      onChangeText = {onChangeText3}
      value = {review}
      editable maxLength = {100}>
      </TextInput>

      <Button style={styles.button}
        title = "Enter Review!"
        onPress={() => navigation.navigate('Create')}>
        </Button>
        

    </View>
  );
}

function movieTwoScreen(){
  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  const{review, onChangeText3} = React.useState("Placeholder");

  return (
    <View>
      <View>
      <Image style={styles.tinyLogo} source={require('./assets/MoviePosters/Movie3.png')}/>
      <Text>FREE GUY </Text>
      <Text>Release Date: 2021  </Text>
      <Text>Genre: Action / Adventure  Runtime: 1HR 55 Min</Text>

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
      <TextInput 
      placeholder = "Review: "
      onChangeText = {onChangeText3}
      value = {review}
      editable maxLength = {100}>
      </TextInput>

      <Button style={styles.button}
        title = "Enter Review!"
        onPress={() => navigation.navigate('Create')}>
        </Button>

      </View>
    </View>
  );
}

function movieThreeScreen(){
  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  const{review, onChangeText3} = React.useState("Placeholder");
  
  return (
    <View>
      <View>
      <Image style={styles.tinyLogo} source={require('./assets/MoviePosters/Movie4.png')}/>
      <Text>OLD </Text>
      <Text>Release Date: 2021 </Text>
      <Text>Genre: Action / Adventure  Runtime: 1HR 55 Min</Text>

      <TextInput 
      placeholder = "Username for Review: "
      onChangeText = {onChangeText}
      value = {userName}>
      </TextInput>
      <TextInput 
      placeholder = "Password: "
      onChangeText = {onChangeText2}
      value = {password}>
      </TextInput>
      <TextInput 
      placeholder = "Reivew: "
      onChangeText = {onChangeText3}
      value = {review}
      editable maxLength = {100}>
      </TextInput>

      <Button style={styles.button}
        title = "Enter Review!"
        onPress={() => navigation.navigate('Create')}>
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
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Account" component={accountScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="DUNE" component={movieScreen} />
      <Stack.Screen name="NIGHT TEETH" component={movieOneScreen} />
      <Stack.Screen name="FREE GUY" component={movieTwoScreen} />
      <Stack.Screen name="OLD" component={movieThreeScreen} />
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
    width: 200,
    height: 300,
    paddingBottom: 20,
  },
  Logo: {
    width: 100,
    height: 200,
  },
  text: {
    padding: 50,
    paddingRight: 50
  }, 
  button :{
    width: 20,
    backgroundColor: "yellow"
  }
});

