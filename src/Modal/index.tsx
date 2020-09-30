
import React, { useState, useEffect } from 'react';
import { FlatList, Dimensions, Modal, TouchableHighlight, View, Animated, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

export interface UIProps {
    display: boolean,
    height: string,
    setVisibleModel: Function,
    children?: any
}

const ModalUI = (props: UIProps) => {
    const { display, setVisibleModel, height } = props;
    const [allowPointerEvents, setAllowPointer] = useState(true);

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={display}
            onRequestClose={() => { setVisibleModel(false); }}
        >
            <Container>
                <HighlightWrapper
                    underlayColor='#00000077'
                   
                >
                    <Content>
                        <Animated.View
                            style={{
                                backgroundColor: 'transparent',
                                overflow: 'hidden',
                                height: height
                            }}
                        >
                            <View pointerEvents={allowPointerEvents ? 'auto' : 'none'}>
                                <ModalContent>
                                    {props.children}
                                </ModalContent>
                            </View>
                        </Animated.View>
                    </Content>
                </HighlightWrapper>
            </Container>
        </Modal>
    );
}
export default ModalUI;

const Container = styled.View`
    flex: 1;
`;

const HighlightWrapper = styled.TouchableHighlight`
    flex: 1;
    background-color: #0000007F;
    flex-direction:row;
    alignItems:flex-end;

`;

const ModalContent = styled.View`
height:100%;
justifyContent:center
`;
const Content = styled.View`
flex:1;
`;