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
        fontWeight: 'bold',
        fontSize: 22,
        marginRight: 20
    },

    subTopNameTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 20
    },

    cardBalance: {
        marginTop: 20,
        backgroundColor: '#7C04B4',
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 30,
        elevation: 10,
        marginBottom: 10
    },

    body: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around',
        // alignItems: 'center'
    },

    bodyContent: {
        padding: 10,
        backgroundColor: '#D9D9D9',
        elevation: 2,
        borderRadius: 10,
        alignItems: 'center',
        width: 150
    },

    bodyContentTopTxt: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        paddingBottom: 10
    }

})

export default style;