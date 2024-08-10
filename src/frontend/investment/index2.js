import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import style2 from "./style2";
import Investment from ".";
import AddBankAccount from "./addBankAccount";

const Investment2 = ({navigation}) => {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style2.container}>
                <View style={style2.topName}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image 
                            source={require('../../../assets/icons/return_back_icon.png')} 
                            style={{height: 30, width: 20}}
                        />
                    </TouchableOpacity>
                    <Text style={style2.topNameTxt}>INVEST SHOW ROOM</Text>
                </View>

                <View style={style2.cardBalance}>
                    <Text style={style2.cardBalanceTopTxt}>CARD BALANCE</Text>
                    <View style={style2.cardBalanceImg}>
                        <Image source={require('../../../assets/icons/eye_icon.png')} style={{height: 20, width: 20}}/>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(AddBankAccount)}
                        > 
                            <Image source={require('../../../assets/icons/investment_add_money.png')} style={{height: 25, width: 25}}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={style2.cardBalanceBottomTxt}>13,339.88</Text>
                </View>

                <Text style={style2.userID}>UID: 28736482</Text>

                <View style={style2.analyzing}>
                    <View style={style2.technicalAnalysis}>
                        <Text style={style2.technicalCutomAnalysisTxt}>TECHNICAL ANALYSIS AUTOMATION</Text>
                        <Image source={require('../../../assets/img/technical analysis trading.png')} style={{height: 50, width: '100%'}}/>
                    </View>

                    <View style={style2.customStrategy}>
                        <Text style={style2.technicalCutomAnalysisTxt}>CUSTOM STRATEGY</Text>
                        <Image source={require('../../../assets/img/custom_strategy_trading.png')} style={{height: 70, width: '110%', alignSelf: 'center', marginRight: 20}}/>
                    </View>
                </View>

                <View style={style2.investForTomorrow}>
                    <Text style={style2.investForTomorrowTopTxt}>INVESTING FOR TOMORROW</Text>
                    <View style={style2.investForTomorrowCoins}>
                        <Image source={require('../../../assets/trading icons/bitcoin-icon.png')} style={{height: 30, width: 30}}/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={style2.investForTomorrowCoinsTxt1}>BTC/</Text>
                            <Text style={style2.investForTomorrowCoinsTxt2}>USDT</Text>
                        </View>
                        <Text style={style2.investForTomorrowCoinsTxt1}>$64,612.00</Text>
                        <View>
                            <Text style={style2.investForTomorrowCoinsTxt4}>+0.60%</Text>
                        </View>
                    </View>
                    <View style={style2.investForTomorrowCoins}>
                        <Image source={require('../../../assets/trading icons/ltc-icon.png')} style={{height: 20, width: 20}}/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={style2.investForTomorrowCoinsTxt1}>LTC/</Text>
                            <Text style={style2.investForTomorrowCoinsTxt2}>USDT</Text>
                        </View>
                        <Text style={style2.investForTomorrowCoinsTxt1}>$64,612.00</Text>
                        <View>
                            <Text style={style2.investForTomorrowCoinsTxt3}>-0.19%</Text>
                        </View>
                    </View>
                    <View style={style2.investForTomorrowCoins}>
                        <Image source={require('../../../assets/trading icons/tron-icon.png')} style={{height: 20, width: 20}}/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={style2.investForTomorrowCoinsTxt1}>TRON/</Text>
                            <Text style={style2.investForTomorrowCoinsTxt2}>USDT</Text>
                        </View>
                        <Text style={style2.investForTomorrowCoinsTxt1}>$64,612.00</Text>
                        <View>
                            <Text style={style2.investForTomorrowCoinsTxt4}>-0.12%</Text>
                        </View>
                    </View>
                    <View style={style2.investForTomorrowCoins}>
                        <Image source={require('../../../assets/trading icons/neo-icon.png')} style={{height: 20, width: 20}}/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={style2.investForTomorrowCoinsTxt1}>NEO/</Text>
                            <Text style={style2.investForTomorrowCoinsTxt2}>USDT</Text>
                        </View>
                        <Text style={style2.investForTomorrowCoinsTxt1}>$64,612.00</Text>
                        <View>
                            <Text style={style2.investForTomorrowCoinsTxt3}>-0.40%</Text>
                        </View>
                    </View>

                    <View style={style2.seeMore}>
                        <Text style={{color: '#7C04B4', fontWeight: 'bold', fontSize: 15, paddingRight: 10}}>SEE MORE</Text>
                        <Image source={require('../../../assets/icons/arrow-down.png')} />
                    </View>
                </View>

                <View style={{marginTop: 10, alignSelf: 'center', borderRadius: 10}}>
                    <Image source={require('../../../assets/img/share_trading.png')} style={{height: 50, width: 100}}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default Investment2;