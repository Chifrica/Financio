import { Image, Text, TouchableOpacity, View } from "react-native"
import style from "./style"

const TakeATrip = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={style.topName}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/icons/return_back_icon.png')} style={{ height: 30, width: 20 }} />
                </TouchableOpacity>
                <Text style={style.topNameTxt}>Take a Trip</Text>
            </View>        

            <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, marginTop: 10}}>
                <Text style={{alignSelf:'center'}}>SafeBox Balance</Text>
                <Text style={{alignSelf:'center'}}>*****</Text>
                <Text style={{alignSelf:'center'}}>Save daily, weekly or monthly with discipline</Text>

                <View style={{elevation: 2, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#d9d9d9', borderRadius: 10, padding: 10, marginBottom: 10, marginTop: 10}}>
                    <Text style={{color: '#fff'}}>Next Withdrawal</Text>
                    <TouchableOpacity>
                        <Text style={{color: '#7C04B4'}}>30 May 2025  </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity  style={{backgroundColor: '#7C04B4', borderRadius: 10, padding: 5}}>
                    <Text  style={{alignSelf:'center', color: '#fff', fontWeight: 'bold', fontSize: 20}}>Deposit</Text>
                </TouchableOpacity>
            </View>

                <Text  style={{alignSelf:'center', marginTop: 15}}>Save it now and travel into the future</Text>

                <View style={{backgroundColor: '#fff', elevation: 2, padding: 5, borderRadius: 5, marginTop: 15}}>
                    <Text>Auto Debit Deposit   <Text style={{color: '#7C04B4'}}>1000.00 weekly</Text></Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 15}}>
                    <TouchableOpacity style={{backgroundColor: '#fff', elevation: 8,  borderRadius: 10, padding: 10, alignItems: 'center'}}>
                        <Image source={require('../../../../assets/icons/withdraw.png')} style={{height: 30, width: 30}}/>
                        <Text>Withdraw</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor: '#fff', elevation: 8,  borderRadius: 10, padding: 10, alignItems: 'center'}}>
                        <Image  source={require('../../../../assets/icons/percentage.png')} style={{height: 30, width: 30}}/>
                        <Text>Interest rate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor: '#fff', borderRadius: 10, elevation: 8, padding: 10, alignItems: 'center'}}>
                        <Image  source={require('../../../../assets/icons/setting.png')} style={{height: 30, width: 30}}/>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default TakeATrip;