import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { allPDF } from '../mock/mock';
import { ED_TECH_APP } from '../constants/constants';

const PDFList = () => {

  return (

    <View>

      <ScrollView>

        <Text style={styles.text1}>{allPDF.map((data, key) => {
          return (<View style={styles.row}>

            <Image style={styles.img1} source={{ uri: ED_TECH_APP.PDF_IMG }} />

            <View style={styles.col}>

              <Text style={styles.text1} >{data.heading}</Text>

            </View>

          </View>)
        })};
        </Text>

      </ScrollView>

    </View>



  )
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
    fontSize: 20,
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    width: "80%"
  }

});

export default PDFList;