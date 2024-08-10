import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },

    img: {
        marginTop: 20,
        marginBottom: 15,
        alignSelf: 'center'
    },

    topTxt: {
        fontWeight: 'bold',
        color: '#7C04B4',
        fontSize: 30,
        textAlign: 'center'
    },

    middleTxt: {
        // textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 50,
        marginRight: 30,
        fontSize: 15
    },
    
    btn: {
        backgroundColor: '#7C04B4',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        borderRadius: 10,
        alignSelf: 'center'
    },

    btnTxt: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default style;