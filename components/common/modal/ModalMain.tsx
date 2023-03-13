import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { createPortal } from 'react-dom';

interface ModalMainProps {
  children?: ReactNode;
  /**
   * 모달 창 뒤 배경
   * @default true
   */
  backdrop?: boolean;
  /**
   * 모달 창 오픈 여부
   */
  /**
   * 모달 배경 색
   * @default ''
   */
  background?: string;
  isOpen: boolean;
  /**
   * 모달 창 오픈 여부 조정
   */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalMain = ({
  children,
  backdrop = true,
  background = 'bg-white',
  isOpen,
  setIsOpen,
}: ModalMainProps) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <>
      {backdrop && (
        <div onClick={() => setIsOpen(false)} className="backdrop "></div>
      )}
      <div className={`modal ${background}`}>{children}</div>
    </>,
    document.body
  );
};

export default ModalMain;
