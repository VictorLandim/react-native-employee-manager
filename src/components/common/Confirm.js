import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = (props) => {
    const { content, onAccept, onDecline, visible } = props;
    const { cardSectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType='slide'
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {content}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center'
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15
    }
});

export { Confirm };
