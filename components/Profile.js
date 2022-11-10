import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { data, profileOptions } from '../mock/mock';
import { ED_TECH_APP } from '../constants/constants';


const Profile = ({ route, navigation }) => {

    const pressHandler = () => {
        navigation.navigate('video');
    };

    const pressHandlerPDF = () => {
        navigation.navigate('pdf');
    };

    return (
        <View style={styles.main}>

            <Text style={styles.navbar}>Welcome {route.params.name}</Text>

            <View style={styles.content}>

                <View style={styles.headingRowMain}>

                    <Text style={styles.heading1}>Activity</Text>
                    <Text style={styles.heading2}>Today</Text>

                </View>

                <View style={styles.headingRow1}>

                    <View style={styles.headingCol}>

                        <Text style={styles.minHeading}>{ED_TECH_APP.MINUTES}</Text>
                        <Text style={styles.minData}>{data.personal_details.today_data.minutes}/{data.personal_details.today_data.total_minutes}</Text>
                        <Text style={styles.minHeading}>{ED_TECH_APP.QUESTIONS}</Text>
                        <Text style={styles.questionData}>{data.personal_details.today_data.question_solved}/{data.personal_details.today_data.total_question_solved}</Text>

                    </View>

                    <View style={styles.headingCol}>

                        <Text style={styles.minHeading}>{ED_TECH_APP.PERCENTAGE}</Text>
                        <Text style={styles.percentage}>{data.personal_details.today_data.percentage}</Text>

                    </View>

                </View>

                <View style={styles.headingRow}>
                    {profileOptions.slice(0, 2).map((data, key) => { return (<Button style={styles.contentBtn} mode='contained'>{data}</Button>) })}
                </View>
                <View style={styles.headingRow}>
                    {profileOptions.slice(2, 4).map((data, key) => { return (<Button style={styles.contentBtn} mode='contained'>{data}</Button>) })}
                </View>
                <View style={styles.headingRow}>
                    {profileOptions.slice(4, 6).map((data, key) => { return (<Button style={styles.contentBtn} mode='contained'>{data}</Button>) })}
                </View>
                <View style={styles.headingRow}>
                    {profileOptions.slice(6, 8).map((data, key) => { return (<Button style={styles.contentBtn} mode='contained'>{data}</Button>) })}
                </View>

            </View>

            <View style={styles.footer}>

                <Icon.Button style={styles.btn1} mode='contained' name='user' size={20} color="white">{ED_TECH_APP.BUTTONS.PROFILE}</Icon.Button>
                <Icon.Button style={styles.btn} mode='contained' name='play' size={20} color="white" onPress={pressHandler}>{ED_TECH_APP.BUTTONS.VIDEOS}</Icon.Button>
                <Icon.Button style={styles.btn} mode='contained' name='file' size={20} color="white" onPress={pressHandlerPDF}>{ED_TECH_APP.BUTTONS.PDF}</Icon.Button>

            </View>

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

export default Profile;