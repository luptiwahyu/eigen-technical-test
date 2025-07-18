import { Article } from './Article'
import { ModalProps } from '../../../shared/models/ModalProps'

export interface DetailProps extends ModalProps {
  article: Article;
}
