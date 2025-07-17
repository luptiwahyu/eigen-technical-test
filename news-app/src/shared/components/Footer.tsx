import { FC } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const AppFooter: FC = () => {
  const currentYear: Number = new Date().getFullYear()

  return (
    <Footer style={{ textAlign: 'center' }}>
      Lupti Wahyu ©{currentYear}
    </Footer>
  )
}

export default AppFooter
