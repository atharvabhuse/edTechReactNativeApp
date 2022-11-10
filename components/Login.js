import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import { data } from '../mock/mock';
import { ED_TECH_APP } from '../constants/constants';

const Login = ({ navigation }) => {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [check, setCheck] = useState(false);

  const changeHandlerUsername = (event) => {
    setUsername(event);
  };

  const changeHandlerPassword = (event) => {
    setPassword(event);
  };

  const checkHandler = () => {
    setCheck(!check);
  };

  const pressHandler = () => {

    if (username == data.personal_details.username && password == data.personal_details.password) {

      navigation.navigate('profile', { name: `${username}` });

    } 
    else
    {

      Alert.alert("Please enter valid username and password");
    
    };

  };

  return (

    <View style={styles.main}>

      <Text style={styles.heading}>{ED_TECH_APP.LOGIN}</Text>
      <Text style={styles.desc}>In case any query in sign in, You can reach us via <Text style={styles.mail}>{ED_TECH_APP.EMAIL}</Text></Text>

      <View style={styles.inpbox}>

        <Text style={styles.label} >{ED_TECH_APP.USERNAME}</Text>
        <TextInput mode='outlined' placeholder='enter username' autoCapitalize='none' autoCorrect={false} value={username} onChangeText={changeHandlerUsername} />

        <Text style={styles.label} >{ED_TECH_APP.PASSWORD}</Text>
        <TextInput mode='outlined' placeholder='enter password' autoCapitalize='none' autoCorrect={false} value={password} secureTextEntry={true} onChangeText={changeHandlerPassword} />

        <View style={styles.checkview}>

          <Checkbox value={check} status={check ? 'checked' : 'unchecked'} onPress={checkHandler} />
          <Text style={styles.condition}>{ED_TECH_APP.TERMS}</Text>

        </View>

        <Button style={styles.btn} mode='contained' onPress={pressHandler} disabled={!check}>{ED_TECH_APP.LOGIN}</Button>

      </View>

    </View>
    
  );
};

const styles = StyleSheet.create({

  main: {
    display: 'flex',
    paddingLeft: 20,
    paddingTop: 30,
    height: "100%",
    backgroundColor: 'white',
    justifyContent: 'center'
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  desc: {
    fontSize: 20,
    marginVertical: 10,
    color: 'black'
  },

  mail: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  },

  inpbox: {
    marginRight: 20
  },

  label: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 18,
  },

  checkview: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },

  condition: {
    marginTop: 8
  },

  btn: {
    marginTop: 15,
    paddingVertical: 10,
  }

});

export default Login;