import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  /**
   * 페이지 내부에서 중요 버튼인지 체크
   */
  primary: boolean;
  /**
   * 버튼 배경 색
   * @default transparent
   */
  backgroundColor: string;
  /**
   * 버튼 사이즈
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: Partial<ButtonProps>) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      className={[
        `${styles['storybook-button']}`,
        `${styles[`storybook-button--${size}`]}`,
        `${styles[mode]}`,
        `${backgroundColor && backgroundColor}`,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
