import { FC } from 'react'
import { Button, Modal, Row, Col, Typography } from 'antd'
import type { DetailProps } from '../models/DetailProps'
import { formattedDate } from '../../../shared/utils/date'

const { Title, Text, Link } = Typography

const Detail: FC<DetailProps> = ({ visible, article, onClose }) => {
  return (
    <Modal
      title="&nbsp;"
      open={visible}
      width={700}
      footer={null}
      onCancel={onClose}
    >
      <Row gutter={20}>
        <Col xs={24} md={12}>
          <span className="text-primary">{article.author}</span>
          &ensp;|&ensp;
          <span className="text-primary">{article.source?.name}</span>
        </Col>
        <Col xs={24} md={12} className="md:text-right">
          <span className="text-primary">Published: {formattedDate(article.publishedAt)}</span>
        </Col>
      </Row>

      <img
        src={article.urlToImage}
        alt="thumbnail"
        className="object-cover w-full rounded-xl my-4"
        style={{ maxHeight: "200px" }}
      />

      <Title level={4} className="!font-medium">{article.title}</Title>
      <div className="mb-2">
        <Text>{article.content?.replace(/\[\+\d+ chars\]/, '').trim()}</Text>
      </div>
      <div className="mb-4">
        <Link href={article.url} target="_blank">
          Read more...
        </Link>
      </div>
    </Modal>
  )
}

export default Detail
