import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export class CustomButton extends Component {
    render() {
        return (
            <TouchableOpacity 
                style={styles.button}
                onPress={this.props.onPressButton}>
                <Icon style={styles.buttonText} name={this.props.iconName}/>
                <Text style={styles.buttonText}>{this.props.buttonText}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#A6CCED",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        padding: 5
    },
    buttonText: {
        color: "#003B6E",
        fontSize: 20,
        marginRight: 3
    }
});
