import React, { Component } from "react";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export class CrossIcon extends Component {
    render() {
        return (
            <Icon
                name="remove" 
                size={30} 
                color={"#FF0000"}
                onPress={() => this.props.deleteItem(this.props.item.id)}>
            </Icon>
        );
    }
}
