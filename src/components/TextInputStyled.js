import { TextInput } from "react-native-paper"

export default function TextInputStyled({ state, setState, label, heightSize, seguro, erro }) {
  return (
    <TextInput
      mode="outlined"
      activeOutlineColor='#0668B8'
      outlineColor={ erro ? "#c20202" : "#A4ABBD"}
      placeholderTextColor={ erro ? "#c20202" : "#A4ABBD"}
      style={{ backgroundColor: 'transparent', color: '#263238', fontWeight: 'bold', marginVertical: '1%', height: heightSize}}
      label={label}
      value={state}
      blurOnSubmit={true}
      onChangeText={(text) => setState(text)}
      secureTextEntry={seguro}
    />
  );
}
