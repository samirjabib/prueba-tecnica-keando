import {Text, View, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {Vehicule} from '../../features';

import React from 'react';

interface Props {
  styles?: StyleProp<ViewStyle>;
  data: Array<{}>;
  setState: React.Dispatch<React.SetStateAction<Vehicule[]>>;
}

export const DropDownSelect = ({data, setState}: Props) => {
  return (
      <SelectList
        data={data}
        setSelected={setState}
        save="key"
        inputStyles={stylesDropDown.inputStyles}
        dropdownStyles={{
          backgroundColor: '#3cc7ec',
          borderWidth: 0,
        }}
        searchPlaceholder="Tipo de Vehiculo"
        placeholder="Tipo de Vehiculo"
        fontFamily="20"
        maxHeight={200}
        dropdownTextStyles={{color: 'white'}}
      />
  );
};

export const stylesDropDown = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  inputStyles: {},
});
