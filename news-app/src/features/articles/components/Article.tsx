import { FC } from 'react'
import { Card } from 'antd'
import { Typography, Row, Col } from 'antd'
const { Title, Text } = Typography

const Article: FC = () => {
  const articles = [1,2,3,4,5,]
  return (
    <>
      <Row gutter={[24, 24]}>
        {
          articles.map((article, articleIdx) => (
            <Col xs={24} md={8} key={articleIdx}>
              <Card
                hoverable
                cover={
                  <img
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    alt="thumbnail"
                    className="object-cover"
                    style={{ height: "200px" }}
                  />
                }
              >
                <Title level={4}>Europe Street beat</Title>
                <Text style={{ color: "#737373" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit, asperiores aliquam non corporis necessitatibus vel provident cumque natus illum sed. Odio illo, amet ex molestias quidem perspiciatis maxime tempore.
                </Text>
                <div className="mt-4">
                  <Text type="secondary">Published: July 16, 2025</Text>
                </div>
              </Card>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Article
