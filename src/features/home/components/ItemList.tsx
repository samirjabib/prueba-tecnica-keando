import { View } from 'react-native';

import { UsersPark } from '../../../store/slices';

interface Props {
    user:UsersPark
  }

export const ItemList = ({user} :Props) => {
    console.log(user)
    return(
        <View>

        </View>
    )
}