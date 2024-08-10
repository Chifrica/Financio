// screens/Profile.js
import React, { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Alert, Pressable, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker'; 
import style from "./style";
import { ImageContext} from "../context/imageContext";

function PrimaryButton ({ label, theme, onPress }) {
    if (theme === "primary") {
        return (
            <View style={{alignItems: 'center'}}>
                <Pressable onPress={onPress} style={style.primaryButton}>
                    <Text style={{color: '#fff'}}>{label}</Text>
                </Pressable>
            </View>
        )
    } else {
        return null;
    }
}

function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

    return <Image source={imageSource} style={style.topImage} />
}

const PlaceholderImage = require('../../../assets/icons/avatar_icon.png');
const Profile = () => {
    const { selectedImage, setSelectedImage } = useContext(ImageContext);
    const { name, setName } = useContext(ImageContext);
    const { regNumber, setRegNumber } = useContext(ImageContext);
    const { email, setEmail } = useContext(ImageContext);
    const { phoneNumber, setPhoneNumber } = useContext(ImageContext);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <View>
                    <Text style={style.topName}>My Profile</Text>
                    <Image source={''} />
                </View>

                <View style={style.profileView}>
                    <ImageViewer 
                        placeholderImageSource={PlaceholderImage}
                        selectedImage={selectedImage}
                    />
                    <View style={{ marginTop: 5 }}>
                        <TextInput
                            style={style.profileViewTxt}
                            value={name}
                            onChangeText={setName}
                        />
                        <Text>Click on the name above to edit</Text>
                    </View>
                </View>

                <PrimaryButton 
                    theme="primary" 
                    label="Choose a photo" 
                    onPress={pickImageAsync} 
                />

                {/* <Text>Email</Text> */}
                <Text>Email</Text>
                <TextInput 
                    value={email}
                    placeholder="Enter your email"
                    onChangeText={setEmail}
                    style={style.txtInput}
                />
                {/* <Text>Password</Text>
                <TextInput 
                    value={password}
                    placeholder="Enter new password"
                    onChangeText={setPassword}
                    style={style.txtInput}
                    secureTextEntry={true}
                /> */}
                <Text>Phone Number</Text>
                <TextInput 
                    value={phoneNumber}
                    placeholder="Enter your phone number"
                    onChangeText={setPhoneNumber}
                    style={style.txtInput}
                    keyboardType='number-pad'
                />
                <Text>Reg Number</Text>
                <TextInput 
                    value={regNumber}
                    placeholder="Enter your reg number"
                    onChangeText={setRegNumber}
                    style={style.txtInput}
                />
                
                <Text style={style.settings}>Settings</Text>

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={style.home}>
                            <Image source={require('../../../assets/bottom icons/home_blur.png')} style={{ height: 20, width: 20 }} />
                            <Text style={style.settingsTxt}>Home</Text>
                        </View>
                        <View style={style.finance}>
                            <Image source={require('../../../assets/bottom icons/finance-blur.png')} style={{ height: 20, width: 20 }} />
                            <Text style={style.settingsTxt}>Finance</Text>
                        </View>
                        <View style={style.savings}>
                            <Image source={require('../../../assets/bottom icons/saving-blur.png')} style={{ height: 20, width: 20 }} />
                            <Text style={style.settingsTxt}>Savings</Text>
                        </View>
                        <View style={style.expense}>
                            <Image source={require('../../../assets/bottom icons/investment-blur.png')} style={{ height: 20, width: 20 }} />
                            <Text style={style.settingsTxt}>Expenses</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={style.settings}>Goodies</Text>
                    <View style={style.goodies}>
                        <Image source={require('../../../assets/img/savings-wallet-add.png')} style={{ height: 40, width: 40, padding: 5, borderRadius: 50, borderColor: '#D9D9D9', borderWidth: 1, marginLeft: 10, marginRight: 10 }} />
                        <Text style={style.goodiesTxt}>Payment</Text>
                    </View>
                    <View style={style.goodies}>
                        <Image source={require('../../../assets/img/achievement.png')} style={{ height: 40, width: 40, borderRadius: 50, borderColor: '#D9D9D9', borderWidth: 1, marginLeft: 10, marginRight: 10 }} />
                        <Text style={style.goodiesTxt}>Achievements</Text>
                    </View>
                    <View style={style.goodies}>
                        <Image source={require('../../../assets/img/privacy.png')} style={{ height: 40, width: 40, borderRadius: 50, borderColor: '#D9D9D9', borderWidth: 1, marginLeft: 10, marginRight: 10 }} />
                        <Text style={style.goodiesTxt}>Privacy</Text>
                    </View>
                </View>

                <View>
                    <Text style={style.account}>My account</Text>
                    <TouchableOpacity>
                        <Text style={style.switch}>Switch to another account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={style.logout}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Profile;
