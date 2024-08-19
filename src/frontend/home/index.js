// screens/Home.js
import React, { useContext } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ImageContext } from '../context/imageContext';
import style from "./style";
import AddBankAccount from "../investment/addBankAccount";

const Home = ({ navigation }) => {
    const { selectedImage, name } = useContext(ImageContext);

    return (
        <ScrollView>
            <View style={style.container}>
                <View style={style.profileHeader}>
                    <View style={style.profileHeaderName}>
                        <Image source={selectedImage ? { uri: selectedImage } : require('../../../assets/icons/avatar_icon.png')} style={style.profileHeaderNameImg} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10, marginTop: 6 }}>Hi, {name.split(" ")[0]}</Text>
                    </View>
                    <Image source={require('../../../assets/icons/notification_icon.png')} style={{ height: 20, width: 20 }} />
                </View>

                {/* Card */}
                <View style={style.cardBalance}>
                    <View style={style.cardBalanceTop}>
                        <Text style={style.cardBalanceTopTxt}>CARD BALANCE</Text>
                        <Image source={require('../../../assets/icons/eye_icon.png')} style={style.cardBalanceTopImg1} />
                    </View>

                    <Image source={require('../../../assets/icons/master_card_icon.png')} style={style.cardBalanceTopImg2} />

                    <View style={style.cardBalanceBottom}>
                        <Text style={style.cardBalanceTopTxt2}>*****</Text>
                        <TouchableOpacity
                            style={style.cardBalanceAddMoney}
                            onPress={() => navigation.navigate(AddBankAccount)}
                        >
                            <Image source={require('../../../assets/icons/add_icon.png')} style={style.cardBalanceTopImg3} />
                            <Text style={{ color: '#fff' }}>Add money</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Investment tracking */}
                <Text style={style.investTxt}>Let's Invest Together</Text>

                <View style={style.allOperationInvestment}>
                    <View style={style.allOperation}>
                        <Image source={require('../../../assets/icons/all_operations.png')} />
                        <Text style={style.allOperationInvestmentTopTxt}>ALL OPERATIONS</Text>
                        <Text style={{ fontSize: 11 }}>Expenses in June, 2024</Text>
                        <Text style={{ fontWeight: 'bold', paddingTop: 2, paddingBottom: 3 }}>2,186.53</Text>
                        <Image source={require('../../../assets/icons/progress.png')} style={{ width: 150, marginTop: 10 }} />
                    </View>

                    <View style={style.allOperation}>
                        <Image source={''} />
                        <Text style={style.allOperationInvestmentTopTxt}>JULY INVESTMENT</Text>
                        <Image source={require('../../../assets/img/july-trading.png')} style={{ height: 70, width: 100, marginLeft: 10 }} />
                    </View>
                </View>

                {/* Banks transfer */}
                <View style={style.bankTransfer}>
                    <Text style={style.bankTransferTopTxt}>QUICK MONEY TRANSFER</Text>
                    <View style={style.bankTransferList}>
                        <View style={{ backgroundColor: '#7C04B4', borderRadius: 5, padding: 5 }}>
                            <Image source={require('../../../assets/bank icons/zenith-bank-icon.png')} style={{ height: 20, width: 20 }} />
                        </View>
                        <View style={{ backgroundColor: '#7C04B4', borderRadius: 5, padding: 5 }}>
                            <Image source={require('../../../assets/bank icons/GTBank_logo.png')} style={{ height: 20, width: 20 }} />
                        </View>
                        <View style={{ backgroundColor: '#7C04B4', borderRadius: 5, padding: 5 }}>
                            <Image source={require('../../../assets/bank icons/kuda.jpeg')} style={{ height: 20, width: 30 }} />
                        </View>
                        <View style={{ backgroundColor: '#7C04B4', borderRadius: 5, padding: 5 }}>
                            <Image source={require('../../../assets/bank icons/access bank.jpeg')} style={{ height: 20, width: 35 }} />
                        </View>
                        <View style={{ backgroundColor: '#7C04B4', borderRadius: 5, padding: 5 }}>
                            <Image source={require('../../../assets/bank icons/FCMB_Logo.png')} style={{ height: 20, width: 20 }} />
                        </View>
                        <View style={{ backgroundColor: '#7C04B4', borderRadius: 5, padding: 5 }}>
                            <Image source={require('../../../assets/bank icons/uba.png')} style={{ height: 20, width: 20 }} />
                        </View>
                    </View>
                    <Image source={require('../../../assets/icons/arrow-down.png')} style={style.bankTransferDropDown} />
                </View>

                {/* Monthly Log */}
                <View style={style.juneLog}>
                    <Text style={style.juneLogTopTxt}>JULY LOG</Text>
                    <View style={style.juneLogViewTxt}>
                        <View style={style.juneLogTxt}>
                            <Text style={style.juneLogTxtAllIncome}>INCOME</Text>
                            <Text style={style.juneLogTxtAllIncome}>45,000.00</Text>
                        </View>
                        <Text style={{ color: '#fff' }}>___________________________________________</Text>
                        <View style={style.juneLogTxt}>
                            <Text style={style.juneLogTxtAll}>INVESTMENT</Text>
                            <Text style={style.juneLogTxtAll}>5,000.00</Text>
                        </View>
                        <Text style={{ color: '#fff' }}>___________________________________________</Text>
                        <View style={style.juneLogTxt}>
                            <Text style={style.juneLogTxtAll}>SAVINGS</Text>
                            <Text style={style.juneLogTxtAll}>7,000.00</Text>
                        </View>
                        <Text style={{ color: '#fff' }}>___________________________________________</Text>
                        <View style={style.juneLogTxt}>
                            <Text style={style.juneLogTxtAll}>EXPENSE</Text>
                            <Text style={style.juneLogTxtAll}>30,000.00</Text>
                        </View>
                        <Text style={{ color: '#fff' }}>___________________________________________</Text>
                        <View style={style.juneLogTxt}>
                            <Text style={style.juneLogTxtAllBalance}>BALANCE</Text>
                            <Text style={style.juneLogTxtAllBalance}>3,000.00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Home;
