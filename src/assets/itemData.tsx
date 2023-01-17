/*
판매 물건 리스트를 저장할 데이터
사진은 애플 홈페이지에서 가져옴
*/

interface interfaceItems {
  itemId: number;
  itemName: string;
  itemImg: string;
  price: number;
  inCart: boolean;
}

const itemData: interfaceItems[] = [
  {
    itemId: 0,
    itemName: "Macbook Air",
    itemImg:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661",
    price: 1390000,
    inCart: false,
  },
  {
    itemId: 1,
    itemName: "Macbook Pro 13'",
    itemImg:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-digitalmat-gallery-1-202206?wid=364&hei=333&fmt=png-alpha&.v=1664613515821",
    price: 1790000,
    inCart: false,
  },
  {
    itemId: 2,
    itemName: "Macbook Pro 14'",
    itemImg:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202111?wid=364&hei=333&fmt=png-alpha&.v=1635183223000",
    price: 2690000,
    inCart: false,
  },
];
export default itemData;
