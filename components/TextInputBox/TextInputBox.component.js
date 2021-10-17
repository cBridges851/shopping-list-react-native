import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

export class TextInputBox extends Component {
    render() {
        return (
            <TextInput 
                style={styles.input}
                placeholder="Add item..."
                onChangeText={this.props.onChangeText}>
            </TextInput>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#F0F0F0",
        fontSize: 20
    }
});