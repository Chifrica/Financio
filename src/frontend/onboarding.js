import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Login from "./login";
import SignUp from "./signup";

const img = require('../../assets/img/company meeting.jpeg');

const Onboarding = ({navigation}) => {
    return (
        <View style={style.container}>
            <Image source={img} style={style.img} />
            <View style={style.imgChanges}>
                <View style={style.roundedView}></View>
                <View style={style.roundedViewWithoutColor}></View>
                <View style={style.roundedViewWithoutColor}></View>
                <View style={style.roundedViewWithoutColor}></View>
                <View style={style.roundedViewWithoutColor}></View>
            </View>
            
            <Text style={style.middleTxt}>
                Enjoy Financio life's saving management & investment more for the future for you
            </Text>

            <TouchableOpacity
                style={style.btn}
                onPress={() => navigation.navigate(SignUp)}
            >
                <Text style={style.btnTxt}>Create a new account</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.btnWithoutBackgroundColor}
                onPress={() => navigation.navigate(Login)}
            >
                <Text style={style.btnTxtWithoutBackground}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 20
    },

    img: {
        marginTop: 50,
        borderRadius: 100,
        height: 200,
        width: 200
    },

    imgChanges: {
        flexDirection: 'row',
    },

    roundedView: {
        height: 20,
        width: 20,
        backgroundColor: '#7C04B4',
        borderRadius: 50,
        marginTop: 20
    },

    roundedViewWithoutColor: {
        height: 20,
        width: 20,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
        marginLeft: 2,
        marginTop: 20
    },

    middleTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    },

    btn: {
        backgroundColor: '#7C04B4',
        width: 300,
        borderRadius: 30,
        marginTop: 30
    },

    btnWithoutBackgroundColor: {
        width: 300,
        borderRadius: 30,
        borderColor: '#7C04B4',
        borderWidth: 2,
        marginTop: 30
    },

    btnTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

    btnTxtWithoutBackground: {
        color: '#7C04B4',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
})

export default Onboarding;