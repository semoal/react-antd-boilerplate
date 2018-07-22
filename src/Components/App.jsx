import React from 'react';
import './App.css';
import { Button } from 'antd';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
        }
    }
    
    render() {
        return (
            <div className="App">
                <Button type="primary">Crear</Button>
            </div>
        );
    }
}

export default App;