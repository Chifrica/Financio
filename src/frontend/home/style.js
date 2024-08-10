import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 3,
    },

    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    profileHeaderName: {
        flexDirection: 'row',
        fontWeight: 'bold',
    },

    profileHeaderNameImg: {
        height: 40, 
        width: 40, 
        borderRadius: 50,
        borderWidth: 2, 
        borderColor: '#fff'
    },

    cardBalance: {
        marginTop: 20,
        backgroundColor: '#7C04B4',
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 30,
        elevation: 10
    },

    cardBalanceTop: {
        flexDirection: 'row',
    },

    cardBalanceTopTxt: {
        color: '#fff',
        fontWeight: 'semibold',
        paddingRight: 10
    },

    cardBalanceTopImg1: {
        height: 20,
        width: 20
    },

    cardBalanceTopImg2: {
        left: '80%',
        marginBottom: 10
    },

    cardBalanceBottom: {
        flexDirection: 'row',
    },

    cardBalanceTopTxt2: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        marginRight: 35
    },

    cardBalanceAddMoney: {
        flexDirection: 'row',
        backgroundColor: '#7C04B4',
        elevation: 5,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
        padding: 5
    },

    cardBalanceTopImg3: {
        height: 20,
        width: 20
    },

    investTxt: {
        textAlign: 'center',
        elevation: 10,
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10
    },

    allOperationInvestment: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    allOperationInvestmentTopTxt: {
        fontWeight: 'bold', 
        paddingTop: 3
    },

    allOperation: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },

    bankTransfer: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },

    bankTransferTopTxt: {
        fontWeight: 'bold',
        fontSize: 15
    },

    bankTransferList: {
        justifyContent: 'space-evenly',
        paddingTop: 10,
        flexDirection: 'row'
    },

    bankTransferDropDown: {
        alignSelf: 'center',
        marginTop: 10
    },

    juneLog: {
        backgroundColor: '#D9D9D9',
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
        fontSize: 15
    },

    juneLogTopTxt: {
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10
    },

    juneLogViewTxt: {
    },

    juneLogTxt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    juneLogTxtAll: {
        color: '#7C04B4',
        fontSize: 13,
        fontWeight: 'bold',
        paddingTop: 5
    }
})

export default style;