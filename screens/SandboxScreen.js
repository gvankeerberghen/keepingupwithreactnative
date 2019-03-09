import React, { Component } from "react";
import { View, Picker } from "react-native";

export default class SandboxScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexDirection: "column",
      justifyContent: "space-between"
    };

    this.handleDirectionChange = this.handleDirectionChange.bind(this);
    this.handleJustifyContentChange = this.handleJustifyContentChange.bind(
      this
    );

    this.justifyContentOptions = [
      {
        label: "flex-start",
        value: "flex-start"
      },
      {
        label: "center",
        value: "center"
      },
      {
        label: "flex-end",
        value: "flex-end"
      },
      {
        label: "space-around",
        value: "space-around"
      },
      {
        label: "space-between",
        value: "space-between"
      },
      {
        label: "space-evenly",
        value: "space-evenly"
      }
    ];
  }

  handleDirectionChange(value) {
    this.setState({ flexDirection: value });
  }

  handleJustifyContentChange(value) {
    this.setState({ justifyContent: value });
  }

  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View
        style={{
          flex: 1
        }}
      >
        <View
          style={{
            flex: 2,
            ...this.state
          }}
        >
          <View
            style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
          <View
            style={{ width: 50, height: 50, backgroundColor: "steelblue" }}
          />
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "row"
          }}
        >
          <Picker
            selectedValue={this.state.flexDirection}
            style={{height: 50, width: 100}}
            onValueChange={this.handleDirectionChange}
          >
            <Picker.Item label="Col" value="column" />
            <Picker.Item label="Row" value="row" />
          </Picker>
          <Picker
            selectedValue={this.state.justifyContent}
            style={{height: 50, width: 100}}
            onValueChange={this.handleJustifyContentChange}
          >
            {this.justifyContentOptions.map((option, index) =>
              <Picker.Item
                key={index}
                label={option.label}
                value={option.value}
              />
            )}
          </Picker>
        </View>
      </View>
    );
  }
}
