import React, { useState } from 'react';
import DebateTimer from "./assets/Debate-Timer"; 
import Table from './assets/Table';

function App() {
    const [currentPage, setCurrentPage] = useState('Stopwatch');

    return (
        <>
            <div style={{ height: '25vh' }}></div>
            <Table/>
            <DebateTimer/>
        </>
    );
}

export default App;
