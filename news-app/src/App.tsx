import { FC } from 'react'
import './App.css'
import { Layout } from 'antd'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './shared/components/Header'
import Footer from './shared/components/Footer'
import ArticleList from './features/articles/pages/List'

const { Content } = Layout

const App: FC = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: '48px' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ArticleList />} />
          </Routes>
        </BrowserRouter>
      </Content>
      <Footer />
    </Layout>
  )
}

export default App
