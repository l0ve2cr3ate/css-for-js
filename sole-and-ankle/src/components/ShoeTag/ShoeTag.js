import { Tag } from "./ShoeTag.styles";

const getTagText = (variant) => {
  if (variant === "sale") {
    return "Sale";
  } else if (variant === "release") {
    return "Just released!";
  }
  return null;
};

const ShoeTag = ({ variant }) =>
  variant !== null ? <Tag variant={variant}>{getTagText(variant)}</Tag> : null;

export default ShoeTag;
