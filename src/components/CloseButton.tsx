import React, { Fragment } from 'react';
import { Theme, TypeOptions } from '../types';

export interface CloseButtonProps {
  closeToast: (e: React.MouseEvent<HTMLElement>) => void;
  type: TypeOptions;
  ariaLabel?: string;
  theme: Theme;
}

export function CloseButton({
  closeToast,
  theme,
  ariaLabel = 'close'
}: CloseButtonProps) {
  console.log(closeToast, theme, ariaLabel);
  return <Fragment></Fragment>;
}
