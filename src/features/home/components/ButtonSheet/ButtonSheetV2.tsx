import {
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {useRef} from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const {height: WINDOW_HEIGHT} = Dimensions.get('screen');

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.3;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.1;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT; // negative number;
const MAX_DOWNWARD_TRANSLATE_Y = 0;

const DRAG_THRESHOLD = 50;
interface NavigationProps extends NativeStackScreenProps<any, any> {} //Tipamos nuestras props de los metodos de react nativae


type Props = {
  children?: React.ReactNode;
}


export const DraggableBottonSheet = ({ children} : Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current)
      },
      onPanResponderMove: (e, gesture) => animatedValue.setValue(gesture.dy),
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;
        if (gesture.dy > 0) {
          // dragging down
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation('up');
          } else {
            springAnimation('down');
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
      },
    }),
  ).current;

  const springAnimation = (direction :'up' | 'down') => {
    lastGestureDy.current = direction === "down" ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  } 

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <Animated.View style={[styles.bottonSheet, bottomSheetAnimation]}>
      <View style={styles.draggableArea} {...panResponder}>
        <View style={{ height:40, justifyContent:'center'}} {...panResponder.panHandlers}>
        <View style={styles.dragHandle}  />
        </View>
      </View>
      {children}
    </Animated.View>
  );
};


const styles = StyleSheet.create({
  bottonSheet: {
    position: 'absolute',
    width: '100%',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT -30,
    ...Platform.select({
      android: {elevation: 3},
    }),
    backgroundColor: '#00b5e0',
    borderRadius: 10,
    zIndex: 10,
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginTop:4,
    padding:5,
  },
  draggableArea: {
    width: 100,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
