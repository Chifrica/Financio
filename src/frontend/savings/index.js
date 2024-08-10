import { Image, Text, TouchableOpacity, View } from "react-native"
import style from "./style";

const Savings = () => {
    return (
        <View style={style.container}>
            <View style={style.topView}>
                <Image source={require('../../../assets/img/savings-wallet-add.png')}  style={style.topViewImg} />
                <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#fff'}}>What are you {'\n'} saving for</Text>
                <Text style={style.topViewSubTxt}>These are goals you can save cash for</Text>
            </View>

            <TouchableOpacity style={style.body}>
                <Image source={require('../../../assets/img/umbrella.png')} style={{marginRight: 3, height: 20, width: 20}} />
                <Text style={style.bodyTxt}>Save for a rainy day</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.body}>
                <Image source={require('../../../assets/img/bank house.png')} style={{marginRight: 3, height: 20, width: 20}} />
                <Text style={style.bodyTxt}>Buy a home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.body}>
                <Image source={require('../../../assets/icons/all_operations.png')} style={{marginRight: 3}} />
                <Text style={style.bodyTxt}>Payment of school fees</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.body}>
                <Image source={require('../../../assets/img/trip.png')} style={{marginRight: 3, height: 20, width: 20}} />
                <Text style={style.bodyTxt}>Take a trip</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Savings;