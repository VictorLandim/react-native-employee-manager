import React from 'react';
import _ from 'lodash';
import { ListView, Alert } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { Button } from 'react-native-elements';

class EmployeeList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        const title = 'Employee List';
        const headerLeft = null;
        const headerRight = (
            <Button
                title="Add"
                backgroundColor='#69f0ae'
                borderRadius={5}
                raised
                onPress={params.rightPress ? params.rightPress : () => null} />
        );

        return { title, headerLeft, headerRight };
    };

    constructor(props) {
        super(props);

        this.onRowPress = this.onRowPress.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({ rightPress: this._onButtonRightPress });
    }

    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    _onButtonRightPress = () => {
        const { navigate } = this.props.navigation;
        navigate('Create');
    }

    onRowPress(employee) {
        // this.props.navigation.navigate('Create');
        Alert.alert('clicked');
    }

    renderRow(employee) {
        return <ListItem onPress={ (employee) => this.onRowPress.bind(this) } employee={employee} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow} />
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
