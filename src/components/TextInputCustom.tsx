import {View, StyleProp, ViewStyle} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


interface Props {
    value:string,
    placeHolder:string,
    textContentType:string,
    onChange: () => void,
    placeTextColor:string,
    styles?:StyleProp<ViewStyle>
    setForm: () => void

export const TextInputCustom = ({ value, onChange, setForm, placeHolder, textContentType, styles={} } : Props) => {
  return (
    <View>
        <TextInput
            onChangeText
        
        />
    </View>
  );
};
