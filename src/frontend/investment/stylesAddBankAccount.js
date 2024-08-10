import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 3,
    },

    topName: {
        flexDirection: 'row',       
    },

    topNameTxt: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 40
    },

    subTopTxt: {
        margin: 10,
        fontSize: 15
    },

    subTopTxtSpan: {
        color: '#7C04B4',
        fontWeight: 'bold'
    },

    bankSelection: {
        padding: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 20
    },

    txtBank: {
        fontWeight: 'bold',
        fontSize: 20
    },

    setionStyle: {
        flexDirection: 'row',
        // justifyContent: 'space-evenl',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 10,
        height: 40,
        margin: 10,
        paddingLeft: 10
    },

    img: {
        padding: 10,
        margin: 5,
        marginRight: 10,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center'
    },

    btn: {
        backgroundColor: '#7C04B4',
        borderRadius: 50,
        // paddingLeft: 20,
        // paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10, 
        marginTop: 20,
        marginBottom: 10
    },
})

export default style;