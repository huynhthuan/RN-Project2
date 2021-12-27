import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { RootStackParamList } from '../../../App'

const { width, height } = Dimensions.get('window');

const ButtonNext = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const transX = useSharedValue(0);
    const transY = useSharedValue(0);
    const opacity = useSharedValue(0);

    const aniStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: transX.value
                },
                {
                    translateY: transY.value
                }
            ]
        }
    })

    React.useEffect(() => {
        transX.value = 0;
    }, [])

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = transX.value;
            ctx.startY = transY.value;
        },
        onActive: (event, ctx) => {
            transX.value = ctx.startX + event.translationX;
            transY.value = ctx.startY + event.translationY;
        },
        onEnd: (_) => {

            const left = width - 96;
            // transX.value = withSpring(0);
            if (transX.value > - (left / 2)) {
                transX.value = withSpring(0)
                transY.value = withSpring(0)
            } else {
                transX.value = withSpring(-left)
                transY.value = withSpring(0)
            }
        },
    });

    return (
        <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.btnNext, aniStyle]}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Authorization');
                    }}>
                    <Image source={require('../../assets/icon/arrow-right.png')}></Image>
                </TouchableOpacity>
            </Animated.View>
        </PanGestureHandler>
    )
}

export default ButtonNext

const styles = StyleSheet.create({
    btnNext: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#324A59',
        position: 'absolute',
        right: 20,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
