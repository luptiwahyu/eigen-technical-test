import { FC } from 'react'
import { Button, Modal } from 'antd'
import type { ModalProps } from '../../../shared/models/ModalProps'
import Article from './Article'

const Detail: FC<ModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      title="&nbsp;"
      open={visible}
      footer={null}
      onCancel={onClose}
    >
      <Article />
    </Modal>
  )
}

export default Detail
