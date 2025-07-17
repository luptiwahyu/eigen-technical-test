import { FC } from 'react'
import { Layout } from 'antd'
const { Header } = Layout

const AppHeader: FC = () => {
  return (
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
  )
}

export default AppHeader
