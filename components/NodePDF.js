import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { nodePDF } from '../mock/mock';

const NodePDF = () => {

  return (

    <View>
      
      <Text style={styles.text1}>{nodePDF.map((data, key) => {

        return (<View style={styles.row}>

          <Image style={styles.img1} source={{ uri: "https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g=w240-h480-rw" }} />

          <View style={styles.col}>

            <Text style={styles.text1} >{data.heading}</Text>

          </View>

        </View>)
      })};
      </Text>

    </View>

  );
};

const styles = StyleSheet.create({

  row: {
    flexDirection: "row",
    borderColor: "lightgray",
    borderRadius: 5,
    borderBottom: 4,
    margin: 5,
    borderTopWidth: 4,
    borderColor: "transparent",
  },

  col: {
    flexDirection: "column",
    padding: 10,
  },

  img1: {
    height: 90,
    width: 90
  },

  text1: {
    width: "80%",
    fontSize: 20
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    width: "80%"
  }

});

export default NodePDF;