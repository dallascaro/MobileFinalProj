import { StatusBar } from 'expo-status-bar';
//import * as React from 'react';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, TextInput, View, SafeAreaView,
   Image, FlatList, SectionList, ScrollView, Button, Touchable, TouchableHighlight } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import movieData from './movieData.json';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({navigation}){

  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  
  
  return(
    <View styles =  {styles.container}>

    <View style={styles.accountWelcome}>

      <View style={styles.homeView}>
      <Image style={styles.homeLogo} source={require('./assets/MoviePosters/Cinema.png')}/>
    <Text style = {styles.titleLogo}>Flicknatic</Text>
      <Text>Login or create an account </Text>

    <TextInput styles =  {styles.textInput}
      placeholder = "Username: "
      onChangeText = {onChangeText}
      value = {userName}>
      </TextInput>

      <TextInput styles =  {styles.textInput} 
      placeholder = "Password: "
      onChangeText = {onChangeText2}
      value = {password}>
      </TextInput>
      </View>

      </View>

      <Button style={styles.button}
        title = "Sign Up!"
        onPress={() => navigation.navigate('Create')}
        color='#F8C460'>
        </Button>
        <Button style={styles.button}
        title = "Login In"
        onPress={() => navigation.navigate('Account')}
        color='#F8C460'>
        </Button>

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
        onPress={() => navigation.navigate('Home')}
        color='#F8C460'>
        </Button>
      </View>

    </View>

  );

}

function CreateScreen({navigation}){
  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  return(
    <View styles =  {styles.container}>
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
          onPress={() =>  navigation.navigate('Account')}
          color='#F8C460'>
        </Button>
      <StatusBar style="auto" />
      
    </View>

  );

}


function accountScreen({navigation}){
  return(
    <View styles =  {styles.Accountcontainer}>
      <View style={styles.accountWelcome}>
        <View style = {styles.accountTop}>
          <Text style = {styles.topLine}>
          <Image style={styles.menuAccountLogo} source={require('./assets/MoviePosters/menu.png')}/>
          <View style = {styles.ticket}>
          <Image style={styles.ticketAccountLogo} source={require('./assets/MoviePosters/Cinema.png')}/>
          </View>
          </Text>
        </View>
        <Image style={styles.accountChar} source={require('./assets/MoviePosters/characterIcon.png')}/>
        <Text style={styles.accountText}>Welcome to your Account</Text>
      </View>
     
      <View style={styles.accountMiddle}>
        <View 
          style={styles.accountLists}>
          <Image source={require('./assets/MoviePosters/favorites.png')}/>
          <Text style={styles.accountIcons}>Favorites -</Text>
        </View>
        <View 
          style={styles.accountLists}> 
          <Image source={require('./assets/MoviePosters/vr.png')}/>
          <Text style={styles.accountIcons}>Watch List -</Text>
        </View>
        <View 
          style={styles.accountLists}>
            <Image source={require('./assets/MoviePosters/like.png')}/>
            <Text style={styles.accountIcons}>Movies Liked -</Text>
        </View>
        <View 
        style={styles.accountLists}>
          <Image source={require('./assets/MoviePosters/goku.png')}/> 
          <Text style={styles.accountIcons}>TV Shows Liked -</Text>
          </View>
      </View>
        <Button style={styles.button, styles.accountButton}
          title = "Selecte Movies To Review"
          onPress={() =>  navigation.navigate('Search')}
          color='#F8C460'>
        </Button>
        <Button style={styles.button , styles.accountButton}
          title = "Movies Reviewed"
          onPress={() =>  navigation.navigate('Search')}
          color='#F8C460'>
        </Button>
      <StatusBar style="auto" />

      <View> 
        <Button style={styles.button , styles.accountButton}
          title = "Go to home Screen"
          onPress={() => navigation.navigate('Home')}
          color='#F8C460'>
        </Button>
      </View>


    </View>

  );

}

function LoginScreen({navigation}){
  const{userName, onChangeText} = React.useState("Placeholder");
  const{password, onChangeText2} = React.useState("Placeholder");
  return(
    <View styles =  {styles.container}>
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
          onPress={() =>  navigation.navigate('Login')}
          color='#F8C460'>
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
    <View styles =  {styles.container}>
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
        onPress={() => navigation.navigate('Create')}
        color='#F8C460'>
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
    <View styles =  {styles.container}>
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
        onPress={() => navigation.navigate('Create')}
        color='#F8C460'>
        </Button>
        

    </View>
  );
}

function movieTwoScreen(){
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
        onPress={() => navigation.navigate('Create')}
        color='#F8C460'>
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
    <View styles =  {styles.container}>
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
        onPress={() => navigation.navigate('Create')}
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
/*
function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Account" component={accountScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
*/
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Accountcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  textInput :{
    fontSize: 20,
    color: "black",
    backgroundColor: "white"
  },
  button :{
    width: 20,
    backgroundColor: "yellow",
    color: "yellow",
  },
  accountButton :{
    paddingTop: 50,
    paddingBottom: 20,
  },
  homeView:{
    paddingLeft: 110
  },
  titleLogo :{
    height: 50,
    color: "#F8C460",
    fontSize: 35,
    borderRadius: 20,
    marginLeft: 20,
    textShadowRadius: 1,
    textShadowColor: "black",
    //textShadowOffset: height: 10 width: 10,
  },
  homeLogo :{
    width: 85,
    height: 63,
    marginLeft: 45
  },
  menuAccountLogo :{
    width: 40,
    margin: 10,
  },
  ticketAccountLogo :{
    height: 40,
  },
  ticket : {
      paddingLeft: 250
  },
  topLine : {
    height: 100
  },
  accountTop : {
    padding: 10,
    paddingBottom: 10,
    width: 400,
  },
  accountIcons :{
   marginLeft: 60,
   paddingBottom: 10,
   fontSize: 20
  },
  searchView :{
    flexDirection: "row",
    backgroundColor: "#C4C4C4",
    borderRadius: 20
  },
  searchAccountLogo :{
    marginLeft: 25,
    padding: 10,
    marginLeft: 100
  },
  accountWelcome :{
    backgroundColor: "#C4C4C4",
    paddingRight: 100,
    borderColor: "black",
    flexDirection: "column",
  },
  accountText :{
    fontSize: 20,
    color: "black",

  },
  accountChar :{
    width: 60,
    height: 60,
    backgroundColor: "#C4C4C4",
    paddingLeft: 100,
    marginLeft: 150,
    paddingBottom: 100,
    alignItems: 'center',
  }
});

