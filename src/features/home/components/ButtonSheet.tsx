import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react';

const { height: SCREEN_HEIGHT} = Dimensions.get('screen')

export const ButtonSheet = () => {
    
    const translateY = useSharedValue(0)
    const isPressed = useSharedValue(false)
    const context = useSharedValue({y:0})

    const gesture = Gesture.Pan().onBegin(() => {
        isPressed.value = true
    }).
    onStart( () => {
        context.value = { y: translateY.value}
    })
    .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max( translateY.value, -SCREEN_HEIGHT)
    })

    const animatedStyles = useAnimatedStyle( () => {
        return{
            transform:[{translateY: translateY.value}]
        }
    })

    useEffect( () => {
        translateY.value = withTiming(-SCREEN_HEIGHT / 3)
        console.log('active')
    }, [])

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottonSheetContainer, animatedStyles]}>
        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  bottonSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: '#00b5e0',
    position: 'absolute',
    borderRadius: 25,
    top:SCREEN_HEIGHT
  },
  line: {
    height: 4,
    width: 75,
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    marginVertical: 15,
  },
});
