import React, { Component } from 'react';
// import axios  from 'axios'
import './App.css'
import Sreach from './component/Sreach'
import List from './component/List'
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

class App extends Component {
    state = {
        users:[],
        isFirst:true,
        isSearch:false,
        isErr:''
    }
    updateState = (info) => {
        this.setState(info)
    }

    render() {
        
        return (
            <div className="container">
                <Sreach updateState = {this.updateState} />
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;