import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },

    icon: {
        marginTop: 40,
        alignSelf: 'center',
        height: 100,
        width: 100,
    },

    container_2: {
        alignItems: 'center',
        borderColor: '#7C04B4',
        borderWidth: 3,
        borderRadius: 20,
        marginTop: 40,
        height: '90%',
        paddingLeft: 10,
        paddingRight: 10,
    },

    txtInput: {
        borderColor: '#7C04B4',
        borderRadius: 10,
        borderWidth: 2,
        width: 300,
        height: 40,
        marginTop: 20,
        paddingLeft: 10
    },

    login: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        paddingTop: 10,
        color: '#7C04B4'

    },

    txt: {
        marginTop: 15,
        marginBottom: 20,
        paddingLeft: 20,
        fontSize: 13,
        textAlign: 'center'
    },

    txtSpan: {
        color: '#7C04B4'
    },

    btn: {
        backgroundColor: '#7C04B4',
        width: 300,
        borderRadius: 30
    },

    btnTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    dontHaveAcc: {
        marginTop: 10,
        fontWeight: 'bold'
    },

    clickHereToLogin: {
        color: '#7C04B4',
        marginBottom: 10,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
        textDecorationLine: 'underline'
    }
})

export default style;