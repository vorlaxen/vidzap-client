import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Test from '@/pages/Test/Test'
import MainLayout from '@/layouts/HomeLayout'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path='/test' element={<Test />} />
  </Routes>
)

export default AppRoutes
