import { TextInput } from "react-native-paper"

export default function TextInputStyled({ state, setState, label }) {
  return (
    <TextInput
      mode="outlined"
      activeOutlineColor='#0668B8'
      outlineColor='#A4ABBD'
      placeholderTextColor='#A4ABBD'
      style={{ backgroundColor: 'transparent', color: '#263238', fontWeight: 'bold', marginVertical: '1%'}}
      label={label}
      value={state}
      onChangeText={(text) => setState(text)}
    />
  );
}
