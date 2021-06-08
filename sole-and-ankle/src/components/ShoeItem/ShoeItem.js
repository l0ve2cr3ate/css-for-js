import differenceInDays from "date-fns/differenceInDays";
import ColorDetail from "../ColorDetail";
import PriceDetail from "../PriceDetail";
import ShoeTag from "../ShoeTag";
import {
  RowDetail,
  ShoeImage,
  ShoeItemContainer,
  ShoeName,
} from "./ShoeItem.styles";

const isNewShoe = (releaseDate) =>
  differenceInDays(new Date(), releaseDate) < 30;

const getVariant = (shoe) => {
  if (shoe.salePrice) {
    return "sale";
  } else if (isNewShoe(shoe.releaseDate)) {
    return "release";
  }
  return null;
};

const ShoeItem = ({ shoe }) => (
  <ShoeItemContainer href={shoe.slug}>
    <ShoeImage src={shoe.imageSrc} alt={shoe.name} />
    <ShoeTag variant={getVariant(shoe)} />
    <div>
      <RowDetail>
        <ShoeName>{shoe.name}</ShoeName>
        <PriceDetail shoe={shoe} />
      </RowDetail>
      <ColorDetail shoe={shoe} />
    </div>
  </ShoeItemContainer>
);

export default ShoeItem;
