import { Alert, FlatList, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import style from './style';
import SignUp from '../signup';
import { useContext, useState } from 'react';
import BottomNavigation from '../../navigation/bottomNavigation';
import { ImageContext } from '../context/imageContext';

const financioIcon = require('../../../assets/img/financio logo.png'); 

const Login = ({navigation}) => {
    const [ regNumber1, setRegNumber1 ] = useState('');
    const [ password1, setPassword1 ] = useState('');

    const handleLogin = () => {
    
        if(regNumber1 == 'admin' & password1 == 'admin' ){
            navigation.navigate(BottomNavigation);
        } else if(regNumber1 == 'D22CSC1199' & password1 == 'kaduna' ){
            navigation.navigate(BottomNavigation);
        } else if(regNumber1 == 'D22CSC1225' & password1 == 'kaduna' ){
            navigation.navigate(BottomNavigation);
        } else if(regNumber1 == 'D22CSC1226' & password1 == 'kaduna' ){
            navigation.navigate(BottomNavigation);
        } else {
            if(regNumber1 != 'D22CSC1199' && 'D22CSC1225' && 'D22CSC1226') {
                Alert.alert('Invalid reg number')
            } else {
                Alert.alert('Incorrect password')
            }
        }

        setRegNumber1('');
        setPassword1('');
    }

    return (
        <KeyboardAvoidingView style={style.container}>
            <View 
                showsVerticalScrollIndicator={false}
            >
                <Image source={financioIcon} style={style.icon} />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={style.container_2}>
                        <Text style={style.login}>
                            Login
                        </Text>

                        <TextInput 
                            placeholder='Enter regNumber'
                            style={style.txtInput}
                            value={regNumber1}
                            onChangeText={setRegNumber1}
                        />

                        <TextInput 
                            placeholder='Enter you Password'
                            style={style.txtInput}
                            value={password1}
                            onChangeText={setPassword1}
                            secureTextEntry
                        />

                        <Text style={style.txt}>I have read, understood and agrees to the <Text style={style.txtSpan}>Terms & Conditions </Text> and <Text style={style.txtSpan}>Privacy Policy</Text></Text>

                        <TouchableOpacity 
                            style={style.btn}
                            onPress={handleLogin}
                        >
                            <Text style={style.btnTxt}>Login</Text>
                        </TouchableOpacity>

                        <Text style={style.dontHaveAcc}>Don't have an Account?
                        </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate(SignUp)}
                        >
                            <Text style={style.clickHereToLogin}>Click here to signup</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;