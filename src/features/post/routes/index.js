import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import NewPost from './NewPost';
import PostDetail from "./PostDetail"

export const PostRoutes = () => {
  return (
    <Routes>
      <Route path=":postId" element={<PostDetail />} />
      <Route path="/" element={<NewPost />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}