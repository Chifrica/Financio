import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 3
    },

    topName: {
        flexDirection: 'row',  
        marginBottom: 20,
        paddingLeft: 20,
        paddingTop: 5
    },

    topNameTxt: {
        // color: '#7C04B4',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 40
    },

    cardBalance: {
        marginTop: 5,
        backgroundColor: '#7C04B4',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 30,
        elevation: 10,
        marginBottom: 20
    },

    subTopNameTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    
    summary: {
        backgroundColor: '#D9D9D9',
        padding: 10,
    },

    june: {
        backgroundColor: '#7C04B4',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 30
    },

    juneTxt: {
        color: '#fff',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 15
    },

    categoryPriceView: {
        margin: 10,        
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 10
    },

    categoryPriceViewHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10,
        color: 'red'
    },

    categoryPriceViewHeaderTxt: {
        backgroundColor: '#7C04B4', 
        padding: 10, 
        borderRadius: 10,
        marginBottom: 10
    },

    category: {
        margin: 5,
    }
})

export default style;