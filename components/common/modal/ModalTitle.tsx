import React, { ElementType, HTMLAttributes, ReactNode } from 'react';

interface ModalTitleProps
  extends Omit<HTMLAttributes<HTMLHeadElement>, 'color'> {
  children: ReactNode;

  /**
   * 모달 제목 html 태그
   * @default h2
   */
  as?: ElementType;
}

const ModalTitle = ({
  children,
  as: Element = 'h2',
  ...rest
}: ModalTitleProps) => {
  return <Element {...rest}>{children}</Element>;
};

export default ModalTitle;
