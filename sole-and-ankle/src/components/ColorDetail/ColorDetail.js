import { ShoeColor } from "./ColorDetail.styles";

const formatShoeColor = (shoe) =>
  shoe.numOfColors === 1
    ? `${shoe.numOfColors} Color`
    : `${shoe.numOfColors} Colors`;

const ColorDetail = ({ shoe }) => {
  if (shoe.salePrice) {
    return <ShoeColor variant="sale">{formatShoeColor(shoe)}</ShoeColor>;
  } else {
    return <ShoeColor>{formatShoeColor(shoe)}</ShoeColor>;
  }
};

export default ColorDetail;
