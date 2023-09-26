import { 
    TouchableOpacity, 
    View, 
    Text, 
    TouchableOpacityProps } from "react-native";
import { styles } from "../styles/styles";

interface CustomButtonProperties extends TouchableOpacityProps {
    label: string;
};

export const CustomButton = (props: CustomButtonProperties) => {
    return (
        <View style={ styles.buttonContainer } >
            <TouchableOpacity style={ styles.button } onPress={ props.onPress }>
                <Text style={ styles.buttonText }>{ props.label }</Text>
            </TouchableOpacity>
        </View>
    );
}