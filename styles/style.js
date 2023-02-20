import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        color: '#fff',
        backgroundColor: '#76b3c2',
        alignItems: 'center',
        paddingBottom: 90
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        padding: 5,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        padding: 10,
    },
    textInput: {
        backgroundColor: '#d5eaf0',
        width: 200,
        padding: 5,
        borderRadius: 10,
        borderWidth: 2,
        margin: 10,
        borderColor: '#fff',
        fontSize: 18,
    },
    switch: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
    },
    switchText: {
        color: '#fff',
    },
    nightMode: {
        backgroundColor: '#044a5c',
        color: '#d5eaf0',
    },
    button: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        height: 50,
        width: 200,
        margin: 10,
        backgroundColor: '#044a5c',
        
    },
    buttonText:{
        fontSize: 20,
        color: 'white',
    },
    result: {
        fontSize:30,
        padding: 10,
    },
    radioButton: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    numericInput: {
        width: 100,
        borderRadius: 10,
    },
});