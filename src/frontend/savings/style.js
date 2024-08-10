import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },

    topView: {
        backgroundColor: '#7C04B4',
        alignItems: 'center',
        marginBottom: 5,
        padding: 15
    },

    topViewImg: {
        resizeMode: 'contain',
        marginTop: 0,
        height: 80
    },

    topViewTxt: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5
    },

    topViewSubTxt: {
        marginTop: 7,
        marginBottom: 10,
        color: '#fff'
    },

    body: {
        elevation: 5,
        backgroundColor: '#D9D9D9',
        padding: 10,
        marginTop: 25,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 10,
        flexDirection: 'row'
    },

    bodyTxt: {
        fontWeight: 'bold',
        marginLeft: 4
    }
})

export default style;