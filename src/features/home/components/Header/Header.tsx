import {View, Text, TouchableOpacity} from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';
import styles from './styles';

interface Props {
  title: string;
  onPress?: () => void;
  isActive?: boolean
}



export const Header = ({onPress, title, isActive}: Props) => {
  console.log(isActive, ' IS ACTIVE CONSOLLE.LOG')
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <TouchableOpacity onPress={onPress}>
          {isActive === true ? (
            <Text>
              <AntDesing name="close" color={'black'} size={25} />
            </Text>
          ) : (
            <Text>
              <AntDesing name="menufold" color={'black'} size={25} />
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
