import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { CardSection } from './common';

class ListItem extends React.Component {
    render() {
        const { employee, navigate } = this.props;

        return (
            <TouchableHighlight
                onPress={() => navigate('Edit', { employee })}
            >
                    <View>
                        <CardSection>
                            <Text style={styles.titleStyle}>
                                {employee.name}
                            </Text>
                        </CardSection>
                    </View>
            </TouchableHighlight>
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
