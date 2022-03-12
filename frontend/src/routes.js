import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { AboutPage } from "./pages/AboutPage"
import { ProjectsPage } from "./pages/ProjectsPage"
import { Auth } from "./pages/AuthPage"

export const useRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="*" element={<Navigate to='/' />}/>
            <Route path="/lk" element={<Auth />}/>
        </Routes>
    )
}