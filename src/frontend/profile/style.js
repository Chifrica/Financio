import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

    primaryButton: {
        backgroundColor: '#000', 
        borderRadius: 5, 
        fontWeight: 'bold', 
        padding: 10
    },

    topName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15
    },

    topImage: { 
        height: 60, 
        width: 60, 
        borderRadius: 50, 
        borderColor: '#D9D9D9', 
        borderWidth: 3, 
        marginLeft: 10, 
        marginRight: 10 
    },

    profileView: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20
    },

    profileViewTxt: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    txtInput: {
        borderColor: '#7C04B4',
        borderRadius: 10,
        borderWidth: 0.5,
        width: 340,
        height: 30,
        // marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10
    },

    settings: {
        fontWeight: 'bold',
        color: 'D3D3D3',
        fontSize: 20,
        marginBottom: 15,
        marginTop: 10
    },
    
    settingsTxt: {
        color: '#fff',
        fontWeight: 'bold',
    },

    home: {
        backgroundColor: '#000',
        borderRadius: 10,
        paddingRight: 20,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-around',
        marginRight: 10,
        flexDirection: 'row',
        marginLeft: 20,
    },

    finance: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingRight: 20,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-around',
        marginRight: 10,
        flexDirection: 'row'
    },

    savings: {
        backgroundColor: 'green',
        borderRadius: 10,
        paddingRight: 20,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-around',
        marginRight: 10,
        flexDirection: 'row'
    },
    expense: {
        backgroundColor: '#7C04B4',
        borderRadius: 10,
        paddingRight: 20,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-around',
        marginRight: 10,
        flexDirection: 'row'

    },

    goodies: {
        marginTop: 0,
        flexDirection: 'row',
        marginTop: 5
    },

    goodiesTxt: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 10
    },

    account: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20
    },

    switch: {
        color: 'blue',
        marginTop: 5,
        fontWeight: 'bold',
        marginLeft: 20,
    },

    logout: {
        color: 'red',
        marginTop: 5,
        fontWeight: 'bold',
        marginLeft: 20,
    },

    modalContainer: { 
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' 
    },

    modalImage: { 
        width: 300, height: 300, borderRadius: 10 
    },

    closeButton: { 
        backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 20 
    },

    closeButtonText: { 
        color: '#000', fontWeight: 'bold' 
    }
});


export default style;