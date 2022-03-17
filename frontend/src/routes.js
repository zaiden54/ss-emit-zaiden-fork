import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { AboutPage } from "./pages/AboutPage"
import { ProjectsPage } from "./pages/ProjectsPage"
import { Auth } from "./pages/AuthPage"
import { DashBoard } from "./pages/Dashboard"

export const useRoutes = (isAuthenticated) => {

    if (isAuthenticated) {
        return(
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/projects" element={<ProjectsPage />}/>
                <Route path="*" element={<Navigate to='/' />}/>
                <Route path="/lk" element={<DashBoard />}/>
            </Routes>
        )
    }

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