/*
판매 물건 리스트를 저장할 데이터
사진은 애플 홈페이지에서 가져옴
*/

interface interfaceItems {
  itemId: number;
  itemName: string;
  itemImg: string;
  discription: string;
  price: number;
  inCart: boolean;
}

const itemData: interfaceItems[] = [
  {
    itemId: 0,
    itemName: "Macbook Air M1",
    itemImg:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661",
    discription:
      "MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness.",
    price: 1390000,
    inCart: false,
  },
  {
    itemId: 1,
    itemName: "Macbook Air M2",
    itemImg:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1653084303665",
    discription:
      "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminum enclosure. It’s the ultrafast, ultracapable laptop that lets you work, play, or create just about anything — anywhere.",
    price: 1690000,
    inCart: false,
  },
  {
    itemId: 2,
    itemName: "Macbook Pro 13'",
    itemImg:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-digitalmat-gallery-1-202206?wid=364&hei=333&fmt=png-alpha&.v=1664613515821",
    discription:
      "The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera, and studio‑quality mics, it’s our most portable pro laptop.",
    price: 1790000,
    inCart: false,
  },
  {
    itemId: 3,
    itemName: "Macbook Pro 14'",
    itemImg:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673229",
    discription:
      "Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal.",
    price: 2690000,
    inCart: false,
  },
  {
    itemId: 4,
    itemName: "Macbook Pro 16'",
    itemImg:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673790",
    discription:
      "Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal.",
    price: 3490000,
    inCart: false,
  },
];
export default itemData;
