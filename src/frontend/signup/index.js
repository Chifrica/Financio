import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import style from "./style";
import Login from "../login";
import { ImageContext } from "../context/imageContext";
import { useContext, useState } from "react";

const googleImage = require('../../../assets/img/google.png')

const SignUp = ({navigation}) => {
    const { email, setEmail, name, setName, regNumber, setRegNumber, phoneNumber, setPhoneNumber, password, setPassword } = useContext(ImageContext);
    const [ confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        if (!email || !name || !regNumber || !phoneNumber || !password || !confirmPassword) {
            Alert.alert("Please fill in the blank!");
            return;
          }
      
          if (password !== confirmPassword) {
            Alert.alert("Passwords do not match!");
            return;
        } 
        
        Alert.alert("Successfully signed up! Click login to continue.");
        // Clear inputs after successful signup
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <Text 
                    style={style.login}
                    onPress={() => navigation.navigate(Login)}
                >
                    Login
                </Text>
                <View style={style.container2}>
                    <Text style={style.topTxt}>Create an account</Text>
                    <Text style={style.subTopTxt}>Enter your details to sign up for this app</Text>

                    <TextInput 
                        placeholder="Enter your Full Name"
                        value={name}
                        onChangeText={setName}
                        style={style.txtInput}
                    />

                    <TextInput 
                        placeholder="Enter your Email"
                        value={email}
                        onChangeText={setEmail}
                        style={style.txtInput}
                    />

                    <TextInput 
                        placeholder="Enter your Reg number"
                        value={regNumber}
                        onChangeText={setRegNumber}
                        style={style.txtInput}
                    />

                    <TextInput 
                        placeholder="Enter your Phone number"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        style={style.txtInput}
                        keyboardType='number-pad'
                    />

                    <TextInput 
                        placeholder="Enter your Password"
                        value={password}
                        onChangeText={setPassword}
                        style={style.txtInput}
                        secureTextEntry
                    />

                    <TextInput 
                        placeholder="Enter your Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        style={style.txtInput}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={style.btn}
                        onPress={handleSignUp}
                    >
                        <Text style={style.btnTxt}>Signup</Text>
                    </TouchableOpacity>

                    <Text style={style.googleContinue}>or continue with</Text>

                    <Text numberOfLines={1}>________________________________</Text>

                    <View style={style.googleDual}>
                        <Text>Google</Text>
                        <Image source={googleImage} style={style.googleImage} />
                    </View>

                    <Text style={style.terms}>By clicking continue, you agree to our <Text style={style.termsSpan}>Terms of Service</Text> and <Text style={style.termsSpan}>Privacy Policy</Text></Text>
                </View>
            </View>
        </ScrollView>
    )
}


export default SignUp;