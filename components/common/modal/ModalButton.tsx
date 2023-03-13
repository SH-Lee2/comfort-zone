import React, { ComponentProps, ReactNode } from 'react';

interface ModalButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

const ModalButton = ({ children, ...rest }: ModalButtonProps) => {
  return <button {...rest}>{children}</button>;
};

export default ModalButton;
