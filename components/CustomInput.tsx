import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { styles } from "../styles/styles";


export type InputHandle = {
    getValue: () => string;
};

type CustomInputProperties = {
    label?: string;
    isPassword?: boolean;
}
export const CustomInput = forwardRef<InputHandle, CustomInputProperties>(({ label, isPassword }, ref ) => {
    const [text, onChangeText] = useState('');
    useImperativeHandle(ref, () => ({
        getValue: () => text
    }));
    return (
        <View style={ styles.inputContainer }>
            {/* <Text style={ styles.baseText }>
                {props.label}
            </Text> */}
            <TextInput
                style={ styles.input } 
                onChangeText={ onChangeText }
                value={ text }
                secureTextEntry={ isPassword }
                placeholderTextColor={ "#6C63FF" }
                placeholder= { label }
                selectionColor={ "#8E89FF" }
                selectTextOnFocus={ true }
            />
        </View>
    );
});
