import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TodosPage } from './pages/TodosPage';


const App: React.FunctionComponent = (): JSX.Element => {
  return <BrowserRouter>
    <Navbar></Navbar>
    <div className="container">
      <Routes>
        <Route element={<TodosPage />} path="/"></Route>
        <Route element={<AboutPage />} path="/about"></Route>
        <Route element={<NotFoundPage />} path="*"></Route>
      </Routes>
    </div>
  </BrowserRouter>;
}

export default App;
