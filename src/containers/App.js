import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBuondry from '../components/ErrorBoundry';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => { this.setState({ robots: users }) });
        console.log('componentDidMount');
    }

    onMyTestSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        //destructuring
        const { robots, searchField } = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        console.log('render');
        return !robots.length ?
        <h1>Loading Robots,  Please wait.. this is some change</h1> :
        (
            <div className='tc'>
                <h1 className='tc f1'>RobotFriends</h1>
                <SearchBox searchChangeMyFunc={this.onMyTestSearchChange} />
                <Scroll>
                    <ErrorBuondry>
                        <CardList robots={filteredRobot} />
                    </ErrorBuondry>
                </Scroll>
            </div>
        );
    }
}

export default App;