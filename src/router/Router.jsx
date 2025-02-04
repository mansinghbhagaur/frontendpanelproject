import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import PublicRoute from './PublicRoute'
import Login from '../pages/Login'
import Main from '../Layout/Main'
import Dashboard from '../pages/Dashboard'
import Student from '../pages/Student'
import Test from '../pages/Test'

const Router = () => {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<PublicRoute />}>
                              <Route path="/" element={<Login />} />
                        </Route>

                        {/* protected routes */}
                        <Route path="/" element={<Main />}>
                              <Route path="/dashboard" element={<Dashboard />} />
                              <Route path="/student" element={<Student />} />
                              <Route path="/test" element={<Test />} />
                        </Route>
                  </Routes>
            </BrowserRouter>
      )
}

export default Router
