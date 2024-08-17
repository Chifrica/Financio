import { Image, Text, TouchableOpacity, View } from "react-native"
import style from "./style"

const SaveForARainyDay = () => {
    return (
        <View style={style.container}>
            <View style={style.topName}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/icons/return_back_icon.png')} style={{ height: 30, width: 20 }} />
                </TouchableOpacity>
                <Text style={style.topNameTxt}>Saving for a Rainy Day</Text>
            </View>        

            <View>
                <Text>SafeBox Balance</Text>
                <Text>*****</Text>
                <Text>Save daily, weekly or monthly with discipline</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 10, padding: 20}}>
                    <Text>Next Withdrawal</Text>
                    <TouchableOpacity>
                        <Text style={{color: '#7C04B4'}}>30 October 2024  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SaveForARainyDay;