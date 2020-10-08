import React from 'react';
import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import InputItem from './components/InputItem';
import Form from './components/Form';
import ListItem from './components/ListItem';

function App() {
        return (
            <div className="container">
                <Title />
                <div className="row">
                    <div className="col-sm-6">
                        <Search />
                        <Sort />
                    </div>
                    
                    <div className="col-sm-6">
                        <InputItem />
                        <Form />
                    </div>
                </div>
                
                <ListItem />
            </div>
        );
}

export default App;