//run npm install @types/react-native-calendars
//run npm install react-native-paper

import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, TextInput, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/core'


//turns current date to a string
const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

const HomeScreen = () => {
    const [items, setItems] = useState({});
    const navigation = useNavigation()

    //Loads in activity items for the calendar
    const loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                });
              }
            }
          }
          const newItems = {};
          Object.keys(items).forEach((key) => {
            newItems[key] = items[key];
          });
          setItems(newItems);
        }, 1000);
      };

      //renders activity items for the calender
    const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TextInput>{item.name}</TextInput>
              <Avatar.Text label="R" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };


    return (
    <View style={{flex: 1}}>
    {/* Below displays the items in the calendar */}
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-16'}
        renderItem={renderItem}
      />
      {/* Below is the button to the messaging screen */}
      <TouchableOpacity
                onPress={() => {navigation.replace("Message")}}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Messaging</Text>
            </TouchableOpacity>
    </View>
    

  );

}

export default HomeScreen

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
