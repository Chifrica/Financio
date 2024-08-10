import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    
    login: {
        justifyContent: 'flex-end',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 10,
        left: 115,
        backgroundColor: '#7C04B4',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 25,
        color: '#fff'
    },

    container2: {
        borderColor: '#7C04B4',
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },

    topTxt: {
        color: '#7C04B4',
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: 'bold'
    },

    subTopTxt: {
        color: '#7C04B4',
        paddingTop: 5,
        fontSize: 15
    },

    txtInput: {
        borderColor: '#7C04B4',
        borderRadius: 10,
        borderWidth: 2,
        width: 300,
        height: 40,
        marginTop: 15,
        paddingLeft: 10
    },

    btn: {
        backgroundColor: '#7C04B4',
        width: 300,
        borderRadius: 30,
        marginTop: 15
    },

    btnTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    googleContinue: {
        marginTop: 5
    },

    googleDual: {
        flexDirection: 'row',
        marginTop: 5

    },

    googleImage: {
        height: 20,
        width: 20,
        marginLeft: 10
    },

    terms: {
        textAlign: 'center',
        marginTop: 10
    },

    termsSpan: {
        color: '#7C04B4'
    }
})

export default style;