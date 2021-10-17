import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import { TextInputBox } from "../TextInputBox/TextInputBox.component";

const AddItem = ({addItem}) => {
    const [text, setText] = useState("");

    const onChange = textValue => {
        setText(textValue)
    };

    return (
        <View>
            <TextInputBox onChangeText={onChange}></TextInputBox>
            <TouchableOpacity 
                style={styles.addItemButton}
                onPress={() => addItem(text)}>
                <Icon style={styles.addItemButtonText} name="plus"></Icon>
                <Text style={styles.addItemButtonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    addItemButton: {
        backgroundColor: "#A6CCED",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        padding: 5
    },
    addItemButtonText: {
        color: "#003B6E",
        fontSize: 20,
        marginRight: 3
    }
});

export default AddItem;