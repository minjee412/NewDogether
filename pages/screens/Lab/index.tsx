import * as React from 'react'
import { Animated, SafeAreaView, Text, View, PanResponder,Easing } from 'react-native'
import styled from '@emotion/native';


function LabPage () {
    const scale = React.useRef(new Animated.Value(1)).current
    const position = React.useRef(new Animated.ValueXY({x:0, y:0})).current
    const opacity = React.useRef(new Animated.Value(1)).current;
    

    const onPressIn = Animated.spring(scale, {
        toValue: 0.9,
        useNativeDriver: true,
    })
    const onPressOut = Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      });
    const goHome = Animated.spring(position, {
        toValue: 0,
        useNativeDriver: true,
      }); -80 -300

    const onDropScale = Animated.timing(scale, {
        toValue: 0,
        duration: 50,
        easing: Easing.linear,
        useNativeDriver: true,
        });
        const onDropOpacity = Animated.timing(opacity, {
        toValue: 0,
        duration: 50,
        easing: Easing.linear,
        useNativeDriver: true, 
    });
    const panResponder = React.useRef(
        PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: (_, { dx, dy }) => {
            position.setValue({ x: dx, y: dy });
          },
          onPanResponderGrant: () => {
            onPressIn.start();
          },
          onPanResponderRelease: (_, { dy }) => {
            if (dy < -250 || dy > 250) {
              Animated.sequence([
                Animated.parallel([onDropScale, onDropOpacity]),
                Animated.timing(position, {
                  toValue: 0,
                  duration: 50,
                  easing: Easing.linear,
                  useNativeDriver: true,
                }),
              ]).start();
            } else {
              Animated.parallel([onPressOut, goHome]).start();
            }
        },
        })
    ).current;
    return (
        <SafeArea>
            <Edge>
                <WordContainer >
                    <Word  >수정</Word>
                </WordContainer>
            </Edge>
            <Center>
                <IconCard
                    {...panResponder.panHandlers}
                    style={{
                        transform: [...position.getTranslateTransform(), {scale}],
                    }}
                >
                    <IoniconsView>투두리스트</IoniconsView>
                </IconCard>
            </Center>
            <Edge> 
                <WordContainer>
                    <Word>삭제</Word>
                </WordContainer>
            </Edge>
            
        </SafeArea>
    )
}

export default LabPage;

const BLACK_COLOR = "#1e272e";
const GREY = "#485460";
const GREEN = "#2ecc71";
const RED = "#e74c3c";


const SafeArea = styled(SafeAreaView)`
    flex:1;
    background-color: ${BLACK_COLOR};
`
const Edge = styled(View)`
    flex:1;
    justify-content:center;
    align-items:center;
` 
const WordContainer = styled(View)`
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: ${GREY};
    border-radius: 50px;
    
`
const Word = styled(Text)`
    font-size: 38px;
    font-weight: 500;
    
    
    
     
`
const Center = styled(View)`
    flex:3;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

const IconCard = styled(Animated.createAnimatedComponent(View))`
    background-color: white;
    padding: 10px 20px;
    border-radius: 10px;
`

const IoniconsView = styled(Text)`
    font-size: 38px;
    font-weight: 500;
`