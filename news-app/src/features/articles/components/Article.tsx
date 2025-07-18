import { FC } from 'react'
import { Card } from 'antd'
import { Typography } from 'antd'
import type { ArticleProps } from '../models/ArticleProps'

const { Title, Text } = Typography

const Article: FC<ArticleProps> = ({ clickable, onClick }) => {
  const showDetail = (): void => {
    if (clickable) onClick()
  }

  return (
    <>
      <Card
        className="!cursor-default"
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
        <Title
          level={4}
          className={`!font-medium ${clickable ? 'hover:underline cursor-pointer' : ''}`}
          onClick={showDetail}
        >
          Europe Street Beat
        </Title>
        <Text style={{ color: "#737373" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit, asperiores aliquam non corporis necessitatibus vel provident cumque natus illum sed. Odio illo, amet ex molestias quidem perspiciatis maxime tempore.
        </Text>
        <div className="mt-4">
          <Text type="secondary">Published: July 16, 2025</Text>
        </div>
      </Card>
    </>
  )
}

export default Article
