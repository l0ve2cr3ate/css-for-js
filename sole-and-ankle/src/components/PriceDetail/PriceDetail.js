import { ShoePrice } from "./PriceDetail.styles";

const formatPrice = (price) => {
  return `$${price / 100}`;
};

const PriceDetail = ({ shoe }) => {
  if (shoe.salePrice) {
    return (
      <div>
        <ShoePrice variant="strike-through">
          {formatPrice(shoe.price)}
        </ShoePrice>
        <ShoePrice variant="sale">{formatPrice(shoe.salePrice)}</ShoePrice>
      </div>
    );
  } else {
    return <ShoePrice>{formatPrice(shoe.price)}</ShoePrice>;
  }
};

export default PriceDetail;
