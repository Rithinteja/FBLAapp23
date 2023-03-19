//run npm install expo-image-picker
//run npm install expo-clipboard
import React, { useState, useEffect } from "react";
import { Text, View, Button, Image, Alert, Share,StyleSheet,TouchableOpacity, Platform} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from '@react-navigation/core'

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
          'Notify rithinteja.aechan@gmail.com or anujpannala@gmail.com about bugs',
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
      base64: true,
    });

    console.log(result);

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

  return (
    <View style={{flex:1, justifyContent:"center", backgroundColor: "white"}}>
      <Button onPress={onShare} title="Absence Notification" color="#36578C"/>
      <Button onPress={pickImage} title="Pick Image to Share" color="#36578C"/>
      <Button onPress={onImageShare} title="Share Image" color="#36578C"/>
      <Button onPress={bugReport} title="Report Bug" color="#36578C"/>
      <TouchableOpacity
                onPress={() => {navigation.replace("Home")}}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Homescreen</Text>
            </TouchableOpacity>
    </View>
    
  );
};

export default ShareExample;
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

})
