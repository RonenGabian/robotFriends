import { render } from '@testing-library/react';
import React, {Component} from 'react';

class ErrorBuondry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        return this.state.hasError ?
        <h1>Got an error!!</h1> :    
        this.props.children;
    }
}
export default ErrorBuondry;