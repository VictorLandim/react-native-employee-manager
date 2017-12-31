import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { CardSection } from './common';

class ListItem extends React.Component {
    render() {
        const { employee, onPress } = this.props;

        return(
            <TouchableNativeFeedback
                onPress={onPress}
            >
                    <View>
                        <CardSection>
                            <Text style={styles.titleStyle}>
                                {employee.name}
                            </Text>
                        </CardSection>
                    </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    cellStyle: {
        height: 50
    }
});

export default ListItem;
