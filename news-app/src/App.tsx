import React from 'react'
import './App.css'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

function App(): React.FC {
  const currentYear: Number = new Date().getFullYear()

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 500,
            margin: '0 auto',
          }}
        >
          News App
        </div>
      </Header>
      <Content style={{ padding: '48px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: 'white',
            borderRadius: '8px',
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Lupti Wahyu ©{currentYear}
      </Footer>
    </Layout>
  )
}

export default App
