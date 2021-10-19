import React, { Component } from "react";
import { View } from "react-native";
import { CustomButton } from "../CustomButton/CustomButton.component";
import { TextInputBox } from "../TextInputBox/TextInputBox.component";

export class AddItem extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
        this.state = {
            text: ""
        }
    }

    onChange(textValue) {
        this.setState({
            text: textValue
        })
    }

    render() {
        return(
            <View>
                <TextInputBox onChangeText={this.onChange} />
                <CustomButton 
                    iconName="plus"
                    buttonText="Add" 
                    onPressButton={() => this.props.addItem(this.state.text)}/>
            </View>
        );
    }
}
