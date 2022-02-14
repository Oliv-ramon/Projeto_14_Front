import { Item, ItemSection, QuantityController } from "./style";

export default function ItemElement({ _id, sku, description, image, size, price }) {
  const quantity = 0;

  return (
    <Item>
      <ItemSection>
        <img src={image} alt="foto do produto"/>
        <span className="item-name">{sku}</span>
        <span className="item-price">{price}</span>
      </ItemSection>
      <ItemSection>
        <p className="description">{description}</p>
        <span className="
        size">{size}</span>
        <QuantityController>
          <button>+</button>
          <div>{quantity}</div>
          <button>-</button>
        </QuantityController>
      </ItemSection>
    </Item>
  )
}