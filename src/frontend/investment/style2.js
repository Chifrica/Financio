import { StyleSheet } from "react-native";

const style2 = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },

    topName: {
        flexDirection: 'row',       
    },

    topNameTxt: {
        color: '#7C04B4',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 40
    },

    cardBalance: {
        marginTop: 20,
        backgroundColor: '#C23030',
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 30,
        elevation: 10
    },

    cardBalanceTopTxt: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'semibold',
        textAlign: 'center'
    },

    cardBalanceImg: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    cardBalanceBottomTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    userID: {
        textAlign: 'center',
        paddingTop: 5,
        color: '#7C04B4',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },

    analyzing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    technicalAnalysis: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#7C04B4',
        height: 100
    },

    technicalCutomAnalysisTxt: {
        color: '#7C04B4',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        width: 150,
        paddingLeft: 2.5,
        paddingRight: 2.5
    },

    customStrategy: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#7C04B4',
        height: 100,
    },

    customStrategyTxt: {
        color: '#7C04B4',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    // Investing for tomorrow

    investForTomorrow: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginTop: 20,
        padding: 10
    },

    investForTomorrowTopTxt: {
        fontWeight: 'bold',
        fontSize: 15
    },

    investForTomorrowCoins: {
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 10,
        padding: 5,
        justifyContent: 'space-around'
    },

    investForTomorrowCoinsTxt1: {
        fontWeight: 'bold',
        fontSize: 15
    },

    investForTomorrowCoinsTxt2: {
        // fontWeight: 'bold',
        fontSize: 9,
        paddingTop: 5
    },

    investForTomorrowCoinsTxt3: {
        backgroundColor: '#C23030', 
        padding: 3, 
        borderRadius: 10, 
        color: '#fff'
    },

    investForTomorrowCoinsTxt4: {
        backgroundColor: '#34A853', 
        padding: 3, 
        borderRadius: 10, 
        color: '#fff'
    },

    seeMore: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5
    }
})

export default style2;