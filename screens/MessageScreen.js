//run npm install expo-image-picker
//run npm install expo-clipboard
import React, { useState, useEffect } from "react";
//imports components from react-native
import { Text, View, Button, Image, Alert, Share, StyleSheet, TouchableOpacity, Platform, LogBox, Linking } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from '@react-navigation/core'

//creates share function
const ShareExample = () => {
  const navigation = useNavigation()
  //Absence Notification
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Notify School about Absence.',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  //Bug reporting notification
  const bugReport = async () => {
    try {
      const result = await Share.share({
        message:
          'Notify rithinteja.aechan@gmail.com or anujpannala@gmail.com about bugs.',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  //Social Media Use
  const socialMedia = async () => {
    try {
      const result = await Share.share({
        message:
          'Press on social media apps installed on your device to use social media!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  //Grade reporting notification for teachers to parents
  const gradeReport = async () => {
    try {
      const result = await Share.share({
        message:
          'Notify parents and students about sudden drop in grades to below a C.',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };


  //Image Picker
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const[ image, setImage ] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  //allows user to pick image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
      base64: true,
    });

    console.log(result);

    //copies image to clipboard
    await Clipboard.setImageAsync(result.base64);

    if (!result.cancelled) {
      setImage(result.uri);
    }

  };

  if (hasGalleryPermission === false) {
    return <Text>No access to Internal Storage</Text>
  }

  //Sharing Photos
  const onImageShare = async () => {

    try {
      const result = await Share.share({
        message:
        'Paste image to Share!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  //displays screen with buttons that call functions, instruction text, and links to school website and works cited
  return (
    <View style={{flex: 1, justifyContent:"center", backgroundColor: "white", marginTop: 50 }}>
      <View style={{flex: 1/8, alignItems: 'center' }}>
        <Text style={styles.titleText}> Notify School about Absence </Text>
        <Button onPress={onShare} title="Notify" color="#36578C"/>
      </View>
      <View style={{flex: 1/8, alignItems: 'center'}}>
        <Text style={styles.titleText}> Reporting Falling Grade </Text>
        <Button onPress={gradeReport} title="Report" color="#36578C"/>
      </View>
      <View style={{flex: 1/8, alignItems: 'center'}}> 
        <Text style={styles.titleText}> Photo Sharing </Text>
        <Button onPress={pickImage} title="Pick Image to Share" color="#36578C"/>
        <Button onPress={onImageShare} title="Share Image" color="#36578C"/>
      </View>
      <View style={{flex: 1/16, alignItems: 'center'}}></View>
      <View style={{flex: 1/8, alignItems: 'center'}}>
        <Text style={styles.titleText}> Connect with Social Media </Text>
        <Button onPress={socialMedia} title="Use" color="#36578C"/>
      </View>
      <View style={{flex: 1/8, alignItems: 'center'}}>
        <Text style={styles.titleText}> Bug Reporting </Text>
        <Button onPress={bugReport} title="Report" color="#36578C"/>
      </View>
      <View style={{flex: 1/12, alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {navigation.replace("Home")}}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Homescreen</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex: 1/8, justifyContent: 'center', flexDirection: 'row', marginTop: 25}}>
        <Button
          title="Works Cited"
          onPress={() => Linking.openURL('https://docs.google.com/document/d/1pt5DowFXnV8VdsI9MtJbEBEwvj4-4bOkp14ovU6jMjM/edit?usp=sharing')}
          style={styles.buttonText}
        />
        <Button
          title="School Website"
          onPress={() => Linking.openURL('https://www.wcpss.net/greenlevelhs')}
          style={styles.buttonText}
        />
      </View>
    </View>
    
  );
};

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default ShareExample;

//creates stylesheet to format screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  titleText: {
    color: '#4EA701',
    fontSize: 20,
    fontWeight: 'bold',
  },

})
