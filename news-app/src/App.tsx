import { FC } from 'react'
import './App.css'
import { Layout } from 'antd'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './shared/components/Header'
import Footer from './shared/components/Footer'
import ArticleList from './features/articles/pages/Main'

const { Content } = Layout

const App: FC = () => {
  return (
    <Layout>
      <Header />
      <Content className="max-w-screen-sm m-auto p-8">
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
