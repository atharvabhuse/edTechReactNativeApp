import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { ED_TECH_APP } from '../constants/constants';

const Welcome = ({ navigation }) => {

  const pressHandler = () => {
    navigation.navigate("login");
  };

  return (
    <View style={styles.intro}>

      <Image source={{ uri: ED_TECH_APP.BANNER_IMG }} style={styles.img} />
      <Text style={styles.heading}>{ED_TECH_APP.APP_NAME}</Text>
      <Text style={styles.desc}>{ED_TECH_APP.APP_DESCRIPTION}</Text>
      <Button style={styles.btn} mode="contained" onPress={pressHandler}>{ED_TECH_APP.BUTTONS.START}</Button>
    
    </View>
  );
};

const styles = StyleSheet.create({

  intro: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    fontFamily: 'sans-serif'
  },

  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 5,
    marginBottom: 5
  },

  desc: {
    textAlign: 'center',
    fontSize: 17,
    marginTop: 5,
    marginBottom: 20
  },

  btn: {
    backgroundColor: 'darkblue',
    color: '#000',
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: '20%',
    marginRight: '20%'
  },

  img: {
    height: 400,
    width: 400
  }

});

export default Welcome;
