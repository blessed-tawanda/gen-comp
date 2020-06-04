exports.getStateFullComponent = (name) => {
  return `import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ${name} extends Component {
  constructor(props) {
    super(props);

    this.state = {
      componentName: '${name}'
    };

  }

  render() {
    return (
      <View>
        <Text> ${name} works! </Text>
      </View>
    )
  }
};
`
}

exports.getStateLessComponent = (name) => {
  return `import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default function ${name}() {
  return (
    <View>
      <Text> ${name} works! </Text>
    </View>
  )
}
`
}