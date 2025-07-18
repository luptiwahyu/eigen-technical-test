import { FC, useState } from 'react'
import { Row, Col } from 'antd'
import Article from '../components/Article'
import Detail from '../components/Detail'

const Main: FC = () => {
  const articles = [1,2,3,4,5]
  const [detailVisible, setDetailVisible] = useState<boolean>(false)

  const showDetail = (): void => {
    setDetailVisible(true)
  }

  const closeDetail = (): void => {
    setDetailVisible(false)
  }

  return (
    <>
      <Row gutter={[24, 24]}>
        {
          articles.map((article, articleIdx) => (
            <Col xs={24} md={12} key={articleIdx}>
              <Article key={articleIdx} clickable onClick={showDetail} />
            </Col>
          ))
        }
      </Row>

      <Detail visible={detailVisible} onClose={closeDetail} />
    </>
  )
}

export default Main
