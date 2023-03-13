import React, { ElementType, HTMLAttributes, ReactNode } from 'react';

interface ModalSubTitleProps
  extends Omit<
    HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>,
    'color'
  > {
  children: ReactNode;

  /**
   * 모달 제목 html 태그
   * @default span
   */
  as?: ElementType;
}

const ModalSubTitle = ({
  children,
  as: Element = 'span',
  ...rest
}: ModalSubTitleProps) => {
  return <Element {...rest}>{children}</Element>;
};

export default ModalSubTitle;
