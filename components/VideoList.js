import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ED_TECH_APP } from '../constants/constants';
import { video_courses } from '../mock/mock';

const VideoList = ({ navigation }) => {

    const pressHandler = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.main}>

            <View style={styles.navbar}>

                <Text style={styles.text}>{ED_TECH_APP.VIDEOS}</Text>

            </View>

            <ScrollView>

                {video_courses.map((data, key) => {
                    return (<View>

                        <Image style={styles.img} source={{ uri: data.img }} />
                        <Text style={styles.imgText}>{data.heading}</Text>
                        <Text style={styles.imgDesc}>{data.description}</Text>

                    </View>)
                })}

            </ScrollView>

            <View style={styles.footer}>

                <Icon.Button style={styles.btn} mode='contained' name='user' size={20} color="white" onPress={pressHandler}>{ED_TECH_APP.BUTTONS.PROFILE}</Icon.Button>
                <Icon.Button style={styles.btn1} mode='contained' name='play' size={20} color="white">{ED_TECH_APP.BUTTONS.VIDEOS}</Icon.Button>
                <Icon.Button style={styles.btn} mode='contained' name='file' size={20} color="white">{ED_TECH_APP.BUTTONS.PDF}</Icon.Button>

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

    footer: {
        backgroundColor: "darkblue",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
        flexDirection: "row"
    },

    text: {
        color: "white",
        fontSize: 25
    },

    img: {
        height: 250,
        width: 420,
        marginTop: 15

    },

    imgText: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: "black",
        fontSize: 21
    },

    imgDesc: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        color: "gray",
        fontSize: 18,
        paddingBottom: 10
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
    }
});

export default VideoList;