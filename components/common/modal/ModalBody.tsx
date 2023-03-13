import React, { ComponentProps, ReactNode } from 'react';

interface ModalBodyProps extends ComponentProps<'div'> {
  children: ReactNode;
}

const ModalBody = ({ children, ...rest }: ModalBodyProps) => {
  return <div {...rest}>{children}</div>;
};

export default ModalBody;
