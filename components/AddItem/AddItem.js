import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export const AddItem = ({addItem}) => {
    const [text, setText] = useState("");

    const onChange = textValue => {
        setText(textValue)
    };

    return (
        <View>
            <TextInput 
                style={styles.addItemInput}
                placeholder="Add item..."
                onChangeText={onChange}></TextInput>
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
    addItemInput: {
        backgroundColor: "#F0F0F0",
        fontSize: 20
    },
    addItemButton: {
        backgroundColor: "#a6cced",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        padding: 5
    },
    addItemButtonText: {
        color: "#003b6e",
        fontSize: 20,
        marginRight: 3
    }
});
