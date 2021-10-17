import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import { CustomButton } from "../CustomButton/CustomButton.component";
import { TextInputBox } from "../TextInputBox/TextInputBox.component";

const AddItem = ({addItem}) => {
    const [text, setText] = useState("");

    const onChange = textValue => {
        setText(textValue)
    };

    return (
        <View>
            <TextInputBox onChangeText={onChange}></TextInputBox>
            <CustomButton 
                iconName="plus"
                buttonText="Add" 
                onPressButton={() => addItem(text)}/>
        </View>
    )
}

export default AddItem;