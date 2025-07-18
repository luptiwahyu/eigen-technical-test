import { FC } from 'react'
import { Button, Modal, Row, Col, Typography } from 'antd'
import type { ModalProps } from '../../../shared/models/ModalProps'

const { Title, Text, Link } = Typography

const Detail: FC<ModalProps> = ({ visible, onClose }) => {
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
          <span className="text-primary">Mike Florio</span>
          &ensp;|&ensp;
          <span className="text-primary">NBCSports.com</span>
        </Col>
        <Col xs={24} md={12} className="md:text-right">
          <span className="text-primary">Published: July 16, 2025</span>
        </Col>
      </Row>

      <img
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        alt="thumbnail"
        className="object-cover w-full rounded-xl my-4"
        style={{ maxHeight: "200px" }}
      />

      <Title level={4} className="!font-medium">Europe Street Beat</Title>

      <div className="mb-2">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit, asperiores aliquam non corporis necessitatibus vel provident cumque natus illum sed. Odio illo, amet ex molestias quidem perspiciatis maxime tempore.
        </Text>
      </div>

      <div className="mb-4">
        <Link href="https://ant.design" target="_blank">
          Read more...
        </Link>
      </div>

    </Modal>
  )
}

export default Detail
