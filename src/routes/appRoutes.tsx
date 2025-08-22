import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Test from '@/pages/Test/Test'
import MainLayout from '@/layouts/HomeLayout'
import NotFound from '@/pages/Status/NotFound/NotFound'
import Unauthorized from '@/pages/Status/Unauthorized/Unauthorized'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/status/404' element={<NotFound />} />
      <Route path='/status/401' element={<Unauthorized />} />
    </Route>

    <Route path='/test' element={<Test />} />
    <Route path='*' element={<Navigate to="/status/404" replace />} />
  </Routes>
)

export default AppRoutes
