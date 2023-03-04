import {View, StyleSheet, Dimensions, Button} from 'react-native';

import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {useEffect, useCallback} from 'react';
import AntDesing from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { useImperativeHandle } from 'react';

const {height: SCREEN_HEIGHT} = Dimensions.get('screen');
console.log(SCREEN_HEIGHT)
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
console.log(MAX_TRANSLATE_Y)


type BottomSheetProps = {
    children?: React.ReactNode;
  };
  

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

export const ButtonSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(  ({children}, ref) => {



  const active = useSharedValue(false);
  const translateY = useSharedValue(0);
  const isPressed = useSharedValue(false);
  const context = useSharedValue({y: 0});

  const scrollTo = useCallback((destination: number) => {
    'worklet';
    if(destination === 0){
        active.value = false
    } else {
        active.value = true
    }

    // active.value = destination !==0

    translateY.value = withSpring(destination, {damping: 50});
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);

  

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0);
        } else if (translateY.value < -SCREEN_HEIGHT / 3) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      }
    });




  const animatedStyles = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    };
  });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 3, {damping: 50});
    console.log('active');
  }, []);

  return (
    <GestureDetector gesture={gesture} >
      <Animated.View style={[styles.bottonSheetContainer, animatedStyles]}>
        <View style={styles.line} />
        {children}
      </Animated.View>
    </GestureDetector>
  )})

const styles = StyleSheet.create({
  bottonSheetContainer: {
    flex:1,
    height: SCREEN_HEIGHT,

    width: '100%',
    backgroundColor: '#00b5e0',
    position: 'absolute',
    borderRadius: 25,
    top: SCREEN_HEIGHT,
    zIndex: 3,
    borderWidth:2,
    
  },
  line: {
    height: 4,
    width: 75,
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    marginVertical: 15,
  },
  bottonNavBar: {
    position: 'absolute',
    backgroundColor: '#3dc7ec',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
});
