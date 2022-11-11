import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { data, profileOptions } from '../mock/mock';
import { ED_TECH_APP } from '../constants/constants';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import VideoList from './VideoList';
import PDFDrawer from './PDFDrawer';
import Profile from './Profile';

const Tabs = createMaterialBottomTabNavigator();

const Tab = ({ route, navigation }) => {

    return (
        <View style={styles.main}>

            <Tabs.Navigator>
                <Tabs.Screen name='profile' component={Profile} />
                <Tabs.Screen name='video' component={VideoList} />
                <Tabs.Screen name='pdf' component={PDFDrawer} />
            </Tabs.Navigator>

        </View>
    );
};

const styles = StyleSheet.create({

    main: {
        flex: 1
    },

    navbar: {
        padding: 20,
        fontSize: 25,
        backgroundColor: "darkblue",
        color: "white"
    },

    content: {
        flex: 1
    },

    footer: {
        backgroundColor: "darkblue",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
        flexDirection: "row",

    },

    footerText: {
        color: "white"
    },

    btn: {
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 25,
        fontSize: 20,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "white"
    },

    btn1: {
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 25,
        fontSize: 20,
        backgroundColor: "#1d58b5",
        borderWidth: 1,
        borderColor: "white"
    },

    headingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 15
    },

    headingRow1: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 15,
        borderColor: "lightgray",
        borderBottomWidth: 2,
        borderTopWidth: 2
    },

    headingRowMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 5,
        borderColor: "lightgray",
        marginTop: 5
    },

    heading1: {
        fontSize: 25,
        fontWeight: "bold"
    },

    heading2: {
        fontSize: 15,
        marginTop: 10
    },

    headingCol: {
        flexDirection: "column",
        paddingHorizontal: 5
    },

    minHeading: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 5
    },

    minData: {
        fontSize: 25,
        color: "blue",
        fontWeight: "bold"
    },

    questionData: {
        fontSize: 25,
        color: "green",
        fontWeight: "bold"
    },

    contentBtn: {
        width: 170,
        paddingVertical: 4,
        backgroundColor: "#327ffa"
    },

    percentage: {
        fontSize: 60,
        color: "green",
        justifyContent: "center",
        fontWeight: "bold"
    }

});

export default Tab;