import React, { cloneElement, isValidElement } from 'react';

import { Theme, ToastProps, TypeOptions } from '../types';
import { Default, isFn, isNum, isStr } from '../utils';

/**
 * Used when providing custom icon
 */
export interface IconProps {
  theme: Theme;
  type: TypeOptions;
}

export type BuiltInIconProps = React.SVGProps<SVGSVGElement> & IconProps;

const Svg: React.FC<BuiltInIconProps> = ({ theme, type, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    fill={
      theme === 'colored'
        ? 'currentColor'
        : `var(--toastify-icon-color-${type})`
    }
    {...rest}
  />
);

function Warning(props: BuiltInIconProps) {
  return (
    <Svg {...props}>
      <path d="M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" />
    </Svg>
  );
}

function Info() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8H12.01M12 11V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Success() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="14" fill="#FFF1E7" />
      <path
        d="M18.4795 10.6406L12.3195 16.8006L9.51953 14.0006"
        stroke="#03CFA3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Error() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="14" fill="white" />
      <path
        d="M17 11L11 17"
        stroke="#F31C1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11L17 17"
        stroke="#F31C1C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spinner() {
  return <div className={`${Default.CSS_NAMESPACE}__spinner`} />;
}

export const Icons = {
  info: Info,
  warning: Warning,
  success: Success,
  error: Error,
  spinner: Spinner
};

const maybeIcon = (type: string): type is keyof typeof Icons => type in Icons;

export function getIcon({ theme, type, isLoading, icon }: ToastProps) {
  let Icon: React.ReactNode = null;
  const iconProps = { theme, type };

  if (icon === false) {
    // hide
  } else if (isFn(icon)) {
    Icon = icon(iconProps);
  } else if (isValidElement(icon)) {
    Icon = cloneElement(icon, iconProps);
  } else if (isStr(icon) || isNum(icon)) {
    Icon = icon;
  } else if (isLoading) {
    Icon = Icons.spinner();
  } else if (maybeIcon(type)) {
    Icon = Icons[type](iconProps);
  }

  return Icon;
}
