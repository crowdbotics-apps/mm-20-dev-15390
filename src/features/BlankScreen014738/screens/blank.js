import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_2: true, TextInput_4: "", Switch_6: true }

  render = () => (
    <View>
      <Switch
        style={styles.Switch_2}
        value={this.state.Switch_2}
        onValueChange={nextChecked => this.setState({ Switch_2: nextChecked })}
      />
      <Icon name="star" style={styles.Icon_3} />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <Switch
        style={styles.Switch_6}
        value={this.state.Switch_6}
        onValueChange={nextChecked => this.setState({ Switch_6: nextChecked })}
      />
      <Icon name="star" style={styles.Icon_5} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Switch_2: {
    width: 50,
    height: 50,
    alignSelf: "flex-start",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },

  Icon_3: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },

  TextInput_4: {},
  Icon_5: {
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },

  Switch_6: {
    alignSelf: "flex-start",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },
  View_1: {},
  Switch_2: {
    width: 50,
    height: 50,
    alignSelf: "flex-start",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },
  Icon_3: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    backgroundColor: "#b67272"
  },
  TextInput_4: {},
  Switch_6: {
    alignSelf: "flex-start",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },
  Icon_5: {
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    backgroundColor: "#b5ca16"
  }
})
