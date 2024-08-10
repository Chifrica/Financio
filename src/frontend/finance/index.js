import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import style from "./style";
import Expenses from "./expenses";

const Finance = ({navigation}) => {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <Text style={style.topNameTxt}>Finance</Text>

                <View style={style.cardBalance}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={style.subTopNameTxt}>Total Balance</Text>
                        <Image source={require('../../../assets/icons/eye_icon.png')} style={{height: 20, width:20}} />
                    </View>
                    <Image source={require('../../../assets/icons/master_card_icon.png')} style={{marginLeft: '85%'}}/>
                    <Text style={{flexDirection: 'row', fontSize: 25, color: '#fff', fontWeight: 'bold'}}>*****</Text>
                </View>

                <Image source={require('../../../assets/img/70%_loading.png')} style={{alignSelf: 'center', height: 120, width: 120}}/>

                <View style={style.body}>
                    <TouchableOpacity style={style.bodyContent}>
                        <Text style={style.bodyContentTopTxt}>Spend & Save</Text>
                        <Text>Your percentage savings every time you spend or transfer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={style.bodyContent}
                        onPress={() => navigation. navigate(Expenses)}
                    >
                        <Text style={style.bodyContentTopTxt}>Expenses Report</Text>
                        <Text>Your daily, weekly or monthly automatic savings.</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.body}>
                    <TouchableOpacity style={style.bodyContent}>
                        <Text style={style.bodyContentTopTxt}>Technical Automation</Text>
                        <Text>Your percentage savings every time you spend or transfer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.bodyContent}>
                        <Text style={style.bodyContentTopTxt}>Savings Report</Text>
                        <Text>Check out your savings journey so far.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Finance;