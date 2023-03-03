import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

export interface MenuButtonProps {
  style?: object;
  label: string;
}

export default function MenuButton(props: MenuButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.squareView}></View>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
}
