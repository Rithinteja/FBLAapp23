//run npm install expo-image-picker
//run npm install expo-clipboard
import React, { useState, useEffect } from "react";
import { Text, View, Button, Image, Alert, Share } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Clipboard from 'expo-clipboard';

const ShareExample = () => {
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
    <View style={{flex:1, justifyContent:"center", backgroundColor: "black"}}>
      <Button onPress={onShare} title="Absence Notification" />
      <Button onPress={pickImage} title="Pick Image to Share" />
      <Button onPress={onImageShare} title="Share Image" />
    </View>
  );
};

export default ShareExample;
