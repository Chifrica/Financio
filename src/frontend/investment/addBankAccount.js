import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import style from "./stylesAddBankAccount"
import Investment2 from "./index2";


const AddBankAccount = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={style.topName}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image 
                            source={require('../../../assets/icons/return_back_icon.png')} 
                            style={{height: 30, width: 20}}
                        />
                    </TouchableOpacity>
                    <Text style={style.topNameTxt}>Add a Bank Account</Text>
                </View>

                    <View>
                        <Text style={style.subTopTxt}>Please enter your bank account details. By providing your bank account information. You authorized 
                            <Text style={style.subTopTxtSpan}> financio</Text> to bind your bank account.
                        </Text>
                    </View>

                    <View style={style.bankSelection}>
                        <View>
                            <Text style={style.txtBank}>Bank</Text>
                            <View style={style.setionStyle}>
                                <Image source={require('../../../assets/img/bank house.png')} style={style.img}/>
                                <TextInput 
                                    placeholder="Select Bank"
                                    value=""
                                    onChangeText={''}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={style.txtBank}>Bank Account</Text>
                            <TextInput 
                                placeholder="Select Bank"
                                value=""
                                onChangeText={''}
                                style={style.setionStyle}
                            />
                        </View>
                        <View>
                            <Text style={style.txtBank}>Enter your BVN</Text>
                            <TextInput 
                                placeholder="Select Bank"
                                value=""
                                onChangeText={''}
                                style={style.setionStyle}
                            />
                        </View>

                        <TouchableOpacity style={style.btn}>
                            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
        </View>
    )
}

export default AddBankAccount;