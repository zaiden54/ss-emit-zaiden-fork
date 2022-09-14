import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { AboutPage } from "./pages/AboutPage"
import { ProjectsPage } from "./pages/ProjectsPage"
import { PartnersPage } from "./pages/PartnersPage"
import { EventsPage } from "./pages/EventsPage"
import { Auth } from "./pages/AuthPage"
import { DashBoard } from "./pages/Dashboard"
import { PageInDevelopment } from "./pages/PageInDevelopment"

export const useRoutes = (isAuthenticated) => {

    if (isAuthenticated) {
        return(
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/projects" element={<ProjectsPage />}/>
                <Route path="/events" element={<EventsPage />}/>
                <Route path="*" element={<PageInDevelopment />}/>
                <Route path="/lk" element={<DashBoard />}/>
                <Route path="/partners" element={<PartnersPage />}/>
            </Routes>
        )
    }

    return(
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="*" element={<PageInDevelopment />}/>
            <Route path="/lk" element={<Auth />}/>
            <Route path="/partners" element={<PartnersPage />}/>
        </Routes>
    )
}