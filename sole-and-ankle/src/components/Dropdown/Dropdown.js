import { getDisplayedValue } from "./Dropdown.helpers";
import {
  ArrowDown,
  DropdownContainer,
  Label,
  SelectElement,
} from "./Dropdown.styles";

const Dropdown = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <DropdownContainer>
        <SelectElement id={label} value={value} onChange={onChange}>
          {children}
        </SelectElement>
        <ArrowDown id="chevron-down" />
        <div>{displayedValue}</div>
      </DropdownContainer>
    </div>
  );
};

export default Dropdown;
