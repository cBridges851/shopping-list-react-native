import React, { useState } from "react";
import { View } from "react-native";
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