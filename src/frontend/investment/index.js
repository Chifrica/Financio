import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import Investment2 from "./index2";

const Investment = ({navigation}) => {
    return (
        <View style={style.container}>
            <Image source={require('../../../assets/img/bank house.png')} style={style.img}/>

            <Text style={style.topTxt}>Information about our Funds Partner </Text>

            <View style={{marginTop: 20}}>
                <Text style={style.middleTxt}>Regulated by the Central Park</Text>
                <Text style={style.middleTxt}>Exposure to international market</Text>
                <Text style={style.middleTxt}>There is no maximuim amount you need to put upfront for your future smiles.</Text>
            </View>

            <TouchableOpacity 
                style={style.btn}
                onPress={() => navigation.navigate(Investment2)}
            >
                <Text style={style.btnTxt}>NEXT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Investment;