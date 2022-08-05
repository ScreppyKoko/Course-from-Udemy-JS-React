import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPages} from '../pages'

import SingleComic from '../singleComic/SingleComic';
import TestComponent from '../testComponent/TestComponent';

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/comics" element={<ComicsPages/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;