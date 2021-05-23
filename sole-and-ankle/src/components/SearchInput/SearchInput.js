import { useRef } from "react";

import VisuallyHidden from "../VisuallyHidden";
import { InputElement, InputWrapper, SearchIcon } from "./SearchInput.styles";

const SearchInput = ({ label = "Search", placeholder = "Search..." }) => {
  const inputRef = useRef();

  return (
    <InputWrapper>
      <VisuallyHidden>
        <label htmlFor={label}>{label}</label>
      </VisuallyHidden>
      <SearchIcon
        id="search"
        size={16}
        onClick={() => inputRef?.current?.focus()}
      />
      <InputElement ref={inputRef} id={label} placeholder={placeholder} />
    </InputWrapper>
  );
};

export default SearchInput;
