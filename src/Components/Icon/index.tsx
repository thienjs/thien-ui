import React, { cloneElement } from 'react';
import classNames from 'classnames';
import * as FeatherIcons from 'react-feather';
import { Clickable } from 'reakit/Clickable';

import { Colors, Sizes, Icons } from '../../lib/types';

export type IconVariants = 'default' | 'shaded' | 'clickable';

export interface IconProps {
  as: Icons;
  size?: Sizes;
  color?: Colors;
  variant?: IconVariants;
  isSolid?: boolean;
  isDisabled?: boolean;
  isRounded?: boolean;
  isFocusable?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Icon = ({
  as,
  size = 'md',
  color,
  variant = 'default',
  isSolid,
  isDisabled,
  isRounded,
  isFocusable,
  onClick,
  className,
  ...props
}: IconProps) => {
  const Icon = FeatherIcons[as];

  const iconClasses = classNames('icon', `icon--${size}`, className, {
    'icon--solid': isSolid,
    'icon--rounded': isRounded,
  });

  return variant === 'clickable' ? (
    <Clickable
      as="div"
      onClick={onClick}
      disabled={isDisabled}
      focusable={isFocusable}
      className="icon--clickable"
    >
      {cloneElement(<Icon />, {
        className: `icon--clickable--${color} ${iconClasses}`,
        ...props,
      })}
    </Clickable>
  ) : (
    cloneElement(<Icon />, {
      className: `icon--${variant}--${color} ${iconClasses}`,
      ...props,
    })
  );
};

Icon.id = 'Icon';
