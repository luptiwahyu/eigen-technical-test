import { FC, useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import ArticleCard from '../components/Article'
import Detail from '../components/Detail'
import { fetchArticles } from '../services/newsApi'
import type { Article } from '../models/Article'

const Main: FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [detailVisible, setDetailVisible] = useState<boolean>(false)
  const [article, setArticle] = useState<Article>({})


  const getArticles = (): void => {
    setLoading(true)
    fetchArticles()
      .then((data) => {
        setArticles(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getArticles()
  }, [])

  const showDetail = (): void => {
    setDetailVisible(true)
  }

  const closeDetail = (): void => {
    setDetailVisible(false)
  }

  const onClickArticle = (data: Article): void => {
    setArticle(data)
    showDetail()
  }

  return (
    <>
      <Row gutter={[24, 24]}>
        {
          articles.map((item, itemIdx) => (
            <Col xs={24} md={12} key={itemIdx}>
              <ArticleCard
                article={item}
                clickable
                onClick={() => onClickArticle(item)}
              />
            </Col>
          ))
        }
      </Row>

      <Detail
        visible={detailVisible}
        article={article}
        onClose={closeDetail}
      />
    </>
  )
}

export default Main
