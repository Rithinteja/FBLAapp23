//run npm install @react-navigation/native
//run npx expo install react-native-screens react-native-safe-area-context
//run npm install @react-navigation/native-stack
//expo install firebase
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'


const LoginScreen = () => {

    //setting up variables for email and passwords
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    //Function to handle when registering an account
    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
      }

      //Function to use when logging into an account
      const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    > 
      {/* Title text below */}
      <Text style={styles.titleText}>Gator Scheduler</Text> 
      {/* Title Image below */}
      <Image source={{ 
        width: 350,
        height: 300,
        uri: "https://lh3.googleusercontent.com/pw/AMWts8Ccur4-epotvj18rcaidly_x3kzC5Fr22GduUcdUSnJKiaVTbMTE-teLte9m4q3Vw9LPHnBtBHKeyXhno2bXCZBsLV3vKS_44H6j_B9mDQXVBfgdezO_6v5U10drs5phbWAQ37PdU_nD2kVsLEHNcXNzA=w960-h720-s-no?authuser=0"}} />
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />
        <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
            <TouchableOpacity
            //Button to login, firebase authenticate it here
                onPress={() => {navigation.replace("Home")}}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            //Button to register, information is sent to firebase database
                onPress={() => {}}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>

        </View>

    </KeyboardAvoidingView>
  )
}

//Stylesheets
export default LoginScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#4EA701',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#4EA701',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#4EA701',
      fontWeight: '700',
      fontSize: 16,
    },

})
