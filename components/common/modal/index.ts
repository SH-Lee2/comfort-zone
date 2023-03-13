import ModalBody from './ModalBody';
import ModalButton from './ModalButton';
import ModalMain from './ModalMain';
import ModalSubTitle from './ModalSubTitle';
import ModalTitle from './ModalTitle';

export const Modal = Object.assign(ModalMain, {
  Body: ModalBody,
  Title: ModalTitle,
  SubTitle: ModalSubTitle,
  Button: ModalButton,
});
