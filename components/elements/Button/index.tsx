import React from "react";
import "./styles/index.scss";

type Props = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  icon?: JSX.Element;
};

const Button = (props: Props) => {
  const { children, onClick, type, className, style, icon } = props;
  const buttonProps = {
    onClick,
    type,
    className,
    style,
  };
  return (
    <button {...buttonProps}>
      <div className="btn-context">
        <span>{icon}</span>
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
