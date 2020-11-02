import React from 'react';
import List from './components/list/list'
import UpdateList from './components/updateList/updateList'


function App() {
    return (
        <>
        <div className='container'>
            <List/>
            <UpdateList/>
        </div>
        </>
    );
}

export default App;
