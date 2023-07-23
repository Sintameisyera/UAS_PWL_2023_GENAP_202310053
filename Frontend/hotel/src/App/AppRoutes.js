import React from 'react'
import BasePages from './BasePages'
import {Navigate, Route, Routes} from 'react-router-dom'
import Layout from '../Layout/Layout'

export default function AppRoutes() {
  return (
    <Routes>
        <Route index element={<Navigate to='home' />} />
        <Route path="*" element={<Layout> <BasePages/></Layout>} />
    </Routes>
  )
}
