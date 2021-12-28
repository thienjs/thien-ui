import React, { useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { Button as ReakitButton } from 'reakit/Button';

import { Colors, Icons } from '../../lib/types';

export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps {
  label: string | React.ReactNode;
  color?: Exclude<Colors, 'gray' | 'yellow'>;
  variant?: ButtonVariants;
  leftIcon?: Icons;
  rightIcon?: Icons;
  isSmall?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  label,
  color = 'white',
  variant = 'primary',
  leftIcon,
  rightIcon,
  isSmall,
  isLoading,
  isDisabled,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const animateOnClick = () => {
    setIsAnimating(true);
    onClick && onClick();
  };

  const buttonClasses = classNames('button', className, {
    'button--small': isSmall,
    [`button--${variant}--disabled`]: isDisabled,
    [`button--${variant}--${color}`]: !isDisabled,
  });

  return (
    <ReakitButton
      className={buttonClasses}
      onClick={animateOnClick}
      data-animation-state={isAnimating}
      onAnimationEnd={() => setIsAnimating(false)}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {leftIcon && !isLoading && (
        <Icon as={leftIcon} className="button--left-icon" />
      )}
      {isLoading ? (
        <Icon as="Loader" size="xl" className="button--loader" />
      ) : (
        label
      )}
      {rightIcon && !isLoading && (
        <Icon as={rightIcon} className="button--right-icon" />
      )}
    </ReakitButton>
  );
};
