import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Text } from 'react-native';
type InputAutocompleteProps = {
    label: string;
    placeholder?: string;
    onPlaceSelected: (details: GooglePlaceDetail | null) => void;
  };

import { styles } from './styles';

export const InputAutocomplete = ({
    label,
    placeholder,
    onPlaceSelected,
  }: InputAutocompleteProps) => {
    return (
      <>
        <Text>{label}</Text>
        <GooglePlacesAutocomplete
          styles={{ textInput: styles.input, row:{ backgroundColor:'#00b5e0'} }}
          placeholder={placeholder || ""}
          fetchDetails
          onPress={(data, details = null) => {
            onPlaceSelected(details);
          }}
          query={{
            key: "AIzaSyBjkKYc5FhHD13I93mijKzBG5hv0VSVe_s",
            language: "pt-BR",
          }}
        />
      </>
    );
  }
  
