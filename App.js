import { StatusBar } from 'expo-status-bar';
//import * as React from 'react';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, TextInput, View, SafeAreaView,
   Image, FlatList, SectionList, ScrollView, Button, Alert, Touchable, TouchableHighlight } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import movieData from './movieData.json';
//import reviews from 'C:\Users\dalla\OneDrive\Desktop\JavaScript\MobileFinalProj\node_modules\imdb-data\tests\reviews.test.js';
//import reviews from './node_modules/imdb-data/tests/reviews.test.js';
import { auth } from './fireBase';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// IMDB movie data
//reviews = imdb-data;
//console.log(reviews.length);// 50000
//console.log(reviews[0]);

function HomeScreen({navigation}){

  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");

  //users to be stored
  const[email, setEmail] = React.useState("Email");
  const[password2, setPassword] = React.useState("Password");

  // metehod for saving user email into authentication
  
  const placeOrder = () => {
    auth.signInWithEmailAndPassword(email.trim(), password2) 
    .then(userCredentials =>{
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
  }
  
  
  return(
    <View styles = {styles.container}>
      <View style={styles.homeWelcome}>

        <View style={styles.homeView}>


          <View style={styles.topHomePage}>
              <Image style={styles.homeLogo} source={require('./assets/MoviePosters/Cinema.png')}/>
              <Text style = {styles.titleLogo}>Flicknatic</Text>
          </View>
        
          <View style={styles.middleHomePage}>
          <Text>Login or create an account </Text>
            <View style={styles.textSpace}>
              <TextInput styles =  {styles.textInput}
                placeholder = "Username: "
                onChangeText = {setEmail}
                value = {email}
                backgroundColor = "white"
                color = "gray">
                </TextInput>
            </View>
            <View style={styles.textSpace}>
              <TextInput styles =  {styles.textInput} 
              placeholder = "Password: "
              onChangeText = {setPassword}
              value = {password2}
              backgroundColor = "white"
              color = "gray"
              secureTextEntry>
              
              </TextInput>
            </View>
          </View>
        <View style={styles.bottomHomePage}>
            <View style = {styles.buttonView}>
              <View style = {styles.buttonView}>
                  <Button style={styles.leftButtonSpacing}
                  title = "Sign Up!"
                  onPress={placeOrder}
                  color='#F8C460'>
                  </Button>
              </View>
              <View style = {styles.buttonView}>
                  <Button style={styles.rightButtonSpacing}
                  title = "Login In"
                  onPress={() => navigation.navigate('Account')}
                  color='#F8C460'>
                  </Button>
              </View>
              </View>
        </View>

        </View>

    </View>

        <StatusBar style="auto" />
</View>
  );
}

function SearchScreen({navigation}){
  return(
    <View styles =  {styles.container}>




        <View style = {styles.searchView}>
          <Text style = {styles.titleLogo}>Flicknatic</Text>
          <Image style={styles.searchAccountLogo} source={require('./assets/MoviePosters/Cinema.png')}/>
        </View>
      
      <View style = {styles.searchMiddle}>

      <ScrollView style = {styles.searchScreenScrollView}> 
    
       <View>
       <Text style = {styles.searchScreenScrollText}>New Releases</Text>
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
        <Text style = {styles.searchScreenScrollText}>Thriller Movies</Text>
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
        <Text style = {styles.searchScreenScrollText}>Coming Soon</Text>
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

        <View>
        <Text style = {styles.searchScreenScrollText}>Action Movies</Text>
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

        </ScrollView>
       </View>

      <StatusBar style="auto" />

        <View style = {styles.searchBottom}>
          <View style = {styles.searchButton}> 
            <Button style={styles.button}
            title = "Go to home Screen"
            onPress={() => navigation.navigate('Home')}
            color='#C4C4C4'>
            </Button>
          </View>
        </View>

    </View>

  );

}


function accountScreen({navigation}){
  
  return(
    <View styles =  {styles.Accountcontainer}>
      <View style={styles.accountWelcome}>
        <View style = {styles.accountTop}>
          <Image style={styles.menuAccountLogo} source={require('./assets/MoviePosters/menu.png')}/>
          <Image style={styles.ticketAccountLogo} source={require('./assets/MoviePosters/Cinema.png')}/>
        </View>
        <Image style={styles.accountChar} source={require('./assets/MoviePosters/characterIcon.png')}/>
        <Text style={styles.accountText}>Hello, Perri Mathis</Text>
      </View>
     
      <View style={styles.accountMiddle}>
        <View style={styles.accountLists}>
          <Image  style={styles.middleIcons} source={require('./assets/MoviePosters/favorites.png')}/>
          
          <Text style={styles.middleAccountText}>Favorites &gt;</Text>

        </View>
        <View style={styles.accountLists}> 
          <Image  style={styles.middleIcons} source={require('./assets/MoviePosters/virtualreality.png')}/>

          <Text style={styles.middleAccountText}>Watch List &gt;</Text>

        </View>
        <View style={styles.accountLists}>
            <Image  style={styles.middleIcons} source={require('./assets/MoviePosters/like.png')}/>

            <Text style={styles.middleAccountText}>Movies Liked &gt;</Text>

        </View>
        <View style={styles.accountLists}>
          <Image  style={styles.middleIcons}source={require('./assets/MoviePosters/goku.png')}/>

          <Text style={styles.middleAccountText}>TV Shows Liked &gt;</Text>

          </View>
      </View>
        <Button style={styles.button, styles.accountButton}
          title = "Select Movies To Review"
          onPress={() =>  navigation.navigate('Search')}
          color='#C4C4C4'
          >
        </Button>
        
      <StatusBar style="auto" />

      <View> 
        <Button style={styles.button , styles.accountButton}
          title = "Go to home Screen"
          onPress={() => navigation.navigate('Home')}
          color='#C4C4C4'
          >
        </Button>
      </View>


    </View>

  );

}


function movieScreen(){

  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  const{review, onChangeText3} = React.useState("Placeholder");

  const showAlert = () => 
    Alert.alert(
      "Submitted Review",
      "Thanks for submitting review",
    
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Canceled Press"),
        style: "cancel",

      },
    ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert("Thanks for leaving the review please check out other movies."),
      },
    );
  
  


  return (
    <View styles =  {styles.container}>
      <View>
      <Image style={styles.tinyLogo} source={require('./assets/MoviePosters/Movie1.png')}/>
      <Text>DUNE </Text>
      <Text>Release Date: 2021</Text>
      <Text>Genre: Sci-fi / Adventure  Runtime: 2HR 35 Min</Text>

      <View style={styles.textSpace}>
        <TextInput styles =  {styles.textInputMovie}
          placeholder = "Username: "
          onChangeText = {onChangeText}
          value = {userName}
          backgroundColor = "white"
              color = "gray">
        </TextInput>
        </View>
        <View style={styles.textSpace}>
        <TextInput styles =  {styles.textInputMovie}
          placeholder = "Review: "
          onChangeText = {onChangeText3}
          value = {review}
          editable maxLength = {100}
          backgroundColor = "white"
              color = "gray">
              
        </TextInput>
      </View>
      

      <Button style={styles.button}
      
        title = "Enter Review!"
        onPress={showAlert}
        color='#F8C460'>
        </Button>

      </View>
    </View>
  );
}

function movieOneScreen(){

  const showAlert = () => 
    Alert.alert(
      "Submitted Review",
      "Thanks for submitting review",
    
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Canceled Press"),
        style: "cancel",

      },
    ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert("Thanks for leaving the review please check out other movies."),
      },
    );

  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  const{review, onChangeText3} = React.useState("Placeholder");

  return (
    <View styles =  {styles.container}>
      <View>
      <Image style={styles.tinyLogo} source={require('./assets/MoviePosters/Movie2.png')}/>
      </View>
      <Text>NIGHT TEETH </Text>
      <Text>Release Date: 2021  </Text>
      <Text>Genre: Action / Crime / Drama  Runtime: 1HR 47 Min</Text>

      <View style={styles.textSpace}>
        <TextInput styles =  {styles.textInputMovie}
          placeholder = "Username: "
          onChangeText = {onChangeText}
          value = {userName}
          backgroundColor = "white"
              color = "gray">
        </TextInput>
        </View>
        <View style={styles.textSpace}>
        <TextInput styles =  {styles.textInputMovie}
          placeholder = "Review: "
          onChangeText = {onChangeText3}
          value = {review}
          editable maxLength = {100}
          backgroundColor = "white"
              color = "gray">
        </TextInput>
      </View>

      <Button style={styles.button}
      
        title = "Enter Review!"
        onPress={showAlert}
        color='#F8C460'>
        </Button>
        

    </View>
  );
}

function movieTwoScreen(){
  const showAlert = () => 
    Alert.alert(
      "Submitted Review",
      "Thanks for submitting review",
    
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Canceled Press"),
        style: "cancel",

      },
    ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert("Thanks for leaving the review please check out other movies."),
      },
    );
  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  const{review, onChangeText3} = React.useState("Placeholder");

  return (
    <View styles =  {styles.container}>
      <View>
      <Image style={styles.tinyLogo} source={require('./assets/MoviePosters/Movie3.png')}/>
      <Text>FREE GUY </Text>
      <Text>Release Date: 2021  </Text>
      <Text>Genre: Action / Adventure  Runtime: 1HR 55 Min</Text>

      <View style={styles.textSpace}>
        <TextInput styles =  {styles.textInputMovie}
          placeholder = "Username: "
          onChangeText = {onChangeText}
          value = {userName}
          backgroundColor = "white"
              color = "gray">
        </TextInput>
        </View>
        <View style={styles.textSpace}>
        <TextInput styles =  {styles.textInputMovie}
          placeholder = "Review: "
          onChangeText = {onChangeText3}
          value = {review}
          editable maxLength = {100}
          backgroundColor = "white"
              color = "gray">
        </TextInput>
      </View>

      <Button style={styles.button}
      
        title = "Enter Review!"
        onPress={showAlert}
        color='#F8C460'>
        </Button>

      </View>
    </View>
  );
}

function movieThreeScreen(){
  const showAlert = () => 
  Alert.alert(
    "Submitted Review",
    "Thanks for submitting review",
  
  [
    {
      text: "Cancel",
      onPress: () => Alert.alert("Canceled Press"),
      style: "cancel",

    },
  ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert("Thanks for leaving the review please check out other movies."),
    },
  );
  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  const{review, onChangeText3} = React.useState("Placeholder");
  
  return (
    <View styles =  {styles.container}>
      <View>
      <Image style={styles.tinyLogo} source={require('./assets/MoviePosters/Movie4.png')}/>
      <Text>OLD </Text>
      <Text>Release Date: 2021 </Text>
      <Text>Genre: Action / Adventure  Runtime: 1HR 55 Min</Text>

      <View style={styles.textSpace}>
        <TextInput styles =  {styles.textInputMovie}
          placeholder = "Username: "
          onChangeText = {onChangeText}
          value = {userName}
          backgroundColor = "white"
              color = "gray">
        </TextInput>
        </View>
        <View style={styles.textSpace}>
        <TextInput styles =  {styles.textInputMovie}
          placeholder = "Review: "
          onChangeText = {onChangeText3}
          value = {review}
          editable maxLength = {100}
          backgroundColor = "white"
              color = "gray">
        </TextInput>
      </View>

      <Button style={styles.button}
      
        title = "Enter Review!"
        onPress={showAlert}
        color='#F8C460'>
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
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
  },
  Accountcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: "wrap",
  },
  accountMiddle : {
    marginBottom: 210
  },
  ScrollView:{
    paddingTop: '10px',
  },
  searchScreenScrollView : {
      height: 550
  },
  searchScreenScrollText :{
    marginBottom: 20,
    fontSize: 20,
  },
  searchView :{
    flexDirection: "row",
    backgroundColor: "#C4C4C4",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
    //flex: 1
  },
  searchMiddle : {
    //flex: 7,
  },
  searchBottom : {
    //flex: 1,
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
  textInput :{
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    marginBottom: 10
  },
  textInputMovie :{
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    marginBottom: 20,
    paddingBottom: 10
  },

  textSpace :{
    paddingBottom: 10,
    paddingTop: 10
  },
  button :{
    
  },
  homeButton :{
   paddingTop: 100,
   marginTop: 20,
  },
  accountButton :{
    paddingTop: 50,
    paddingBottom: 20,
  },
  homeView:{
    flex: 1,
  },
  titleLogo :{
    height: 50,
    color: "#F8C460",
    fontSize: 35,
    borderRadius: 20,
    marginLeft: 20,
    textShadowRadius: 1,
    textShadowColor: "black",
    marginBottom: 20
    //textShadowOffset: height: 10 width: 10,
  },
  homeLogo :{
    width: 85,
    height: 63,
    marginLeft: 45,
    marginTop: 50,
  },

  topHomePage :{
    flex: 1,
    marginTop: 50,
    paddingLeft: 105,
  },
  middleHomePage :{
    flex: 1,
    width: 200,
    marginTop: 50,
    marginLeft: 100,
  
  },
  bottomHomePage :{
    flex: 2 ,
    width: 300,
    marginLeft: 90,
    marginBottom: 200
  },

  menuAccountLogo :{
    width: 40,
    margin: 10,
  },
  ticketAccountLogo :{
    height: 40,
    marginLeft: 240,
    marginTop: 15,
  },
  ticket : {
      paddingLeft: 250
  },
  topLine : {
    height: 100
  },
  accountTop : {
    padding: 5,
    display: "flex",
    flexDirection: "row"
  },
  accountLists: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
  },
  middleIcons: {
    marginLeft: 10
  },
  middleAccountText :{
   marginLeft: 30,
   marginTop: 3,
   paddingBottom: 10,
   fontSize: 20,
  },
  
  buttonView : {
    flexDirection: 'row',
    padding: 10,

  },
  leftButtonSpacing :{

  },
  rightButtonSpacing :{

  },
  searchAccountLogo :{
    marginLeft: 25,
    padding: 10,
    marginLeft: 100
  },
  homeWelcome :{
    backgroundColor: "#C4C4C4",
    borderColor: "black",
    flexDirection: "column",
    height: 800
  },
  accountWelcome :{
    backgroundColor: "#C4C4C4",
    paddingRight: 100,
    borderColor: "black",
    flexDirection: "column",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius:15,
  },
  accountText :{
    fontSize: 20,
    color: "black",
    marginBottom: 10,
    marginLeft: 10

  },
  accountChar :{
    width: 60,
    height: 60,
    backgroundColor: "#C4C4C4",
    paddingLeft: 100,
    marginLeft: 150,
    paddingBottom: 100,
    alignItems: 'center',
  },
});

