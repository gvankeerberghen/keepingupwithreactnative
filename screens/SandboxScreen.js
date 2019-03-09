import React from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";

export default class SandboxScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch(
      "https://raw.githubusercontent.com/vega/vega/master/docs/data/movies.json"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item, index }) => (
            <Text>
              {index + '/ '} {item.Title}, {item.Release_Date}
            </Text>
          )}
          keyExtractor={({}, index) => index.toString()}
        />
      </View>
    );
  }
}
