import { FC } from 'react'
import { Card, Typography } from 'antd'
import type { ArticleProps } from '../models/ArticleProps'
import { formattedDate } from '../../../shared/utils/date'

const { Title, Text } = Typography

const Article: FC<ArticleProps> = ({ clickable, onClick, article }) => {
  const shortText = (value: string, limit: number): string => {
    return value?.slice(0, limit)
  }

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
            src={article.urlToImage}
            alt="thumbnail"
            className="object-cover"
            style={{ maxHeight: "150px" }}
          />
        }
      >
        <Title
          level={4}
          className={`!font-medium ${clickable ? 'hover:underline cursor-pointer' : ''}`}
          onClick={showDetail}
        >
          {shortText(article.title, 21)}...
        </Title>
        <Text className="text-primary">
          {shortText(article.description, 51)}...
        </Text>
        <div className="mt-4">
          <Text type="secondary">Published: {formattedDate(article.publishedAt)}</Text>
        </div>
      </Card>
    </>
  )
}

export default Article
