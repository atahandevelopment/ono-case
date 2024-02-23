import React from "react";
import "./styles/index.scss";
import { SearchNormal } from "iconsax-react";

type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  placeholder?: string;
  checked?: boolean;
};

const Input = (props: Props) => {
  const { onChange, type, className, placeholder, checked } = props;

  const inputProps = {
    onChange,
    type,
    className,
    placeholder,
    checked
  };
  return (
    <>
      {type === "text" && (
        <div className="search-icon" style={{ width: "24px", height: "24px"}}>
          <SearchNormal size="24" color="#ADA7A7" variant="Linear" />
        </div>
      )}

      <input {...inputProps} />
    </>
  );
};

export default Input;
