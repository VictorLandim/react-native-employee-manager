import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class EmployeeList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        const title = 'Employee List';
        const headerLeft = null;
        const headerRight = (
            <Button
                title="Add"
                backgroundColor='blue'
                borderRadius={5}
                raised
                onPress={params.rightPress ? params.rightPress : () => null} />
        );

        return { title, headerLeft, headerRight };
    };

    componentDidMount() {
        this.props.navigation.setParams({ rightPress: this._onButtonRightPress });
    }

    _onButtonRightPress = () => {
        const { navigate } = this.props.navigation;
        navigate('Create');
    }

    render() {
        return (
            <View>
                <Text>
                    Hey
                </Text>
            </View>
        );
    }
}

export default EmployeeList;
