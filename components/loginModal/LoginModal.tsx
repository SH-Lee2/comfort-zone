import { Icon } from '@iconify/react';
import { signIn } from 'next-auth/react';
import React, { Dispatch, SetStateAction } from 'react';
import { Modal } from '../common';

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Modal.Title className="mb-10 text-2xl font-bold text-stone-400">
        로그인
      </Modal.Title>
      <Modal.Button onClick={() => signIn('kakao')} className="login-btn mb-4">
        <Icon icon="simple-icons:kakao" width={24} height={24} /> 카카오 로그인
      </Modal.Button>
      <Modal.Button onClick={() => signIn('google')} className="login-btn">
        <Icon icon="mdi:google-plus" width={24} height={24} /> 구글 로그인
      </Modal.Button>
    </Modal>
  );
};

export default LoginModal;
