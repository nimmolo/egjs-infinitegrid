import * as React from "react";
import { PackingInfiniteGrid } from "@egjs/react-infinitegrid";

function getItems(nextGroupKey: number, count: number) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

const Item = ({ num }: any) => <div className="item" style={{
  width: "250px",
}}>
  <img
    src={`https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg`}
    alt="egjs" style={{
      width: "100%",
      height: "100%",
    }}
  />
</div>;

export default function App() {
  const [items, setItems] = React.useState(() => getItems(0, 10));

  return <PackingInfiniteGrid
    className="container"
    style={{
      height: "500px",
    }}
    container={true}
    gap={5}
    onRequestAppend={(e) => {
      const nextGroupKey = (+e.groupKey! || 0) + 1;

      setItems([
        ...items,
        ...getItems(nextGroupKey, 10),
      ]);
    }}
  >
    {items.map((item) => <Item data-grid-groupkey={item.groupKey} key={item.key} num={item.key} />)}
  </PackingInfiniteGrid>;
}
