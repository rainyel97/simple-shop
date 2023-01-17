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
    itemName: "Macbook Air",
    itemImg:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661",
    discription:
      "MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness.",
    price: 1390000,
    inCart: false,
  },
  {
    itemId: 1,
    itemName: "Macbook Pro 13'",
    itemImg:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-digitalmat-gallery-1-202206?wid=364&hei=333&fmt=png-alpha&.v=1664613515821",
    discription:
      "The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera, and studio‑quality mics, it’s our most portable pro laptop.",
    price: 1790000,
    inCart: false,
  },
  {
    itemId: 2,
    itemName: "Macbook Pro 14'",
    itemImg:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202111?wid=364&hei=333&fmt=png-alpha&.v=1635183223000",
    discription:
      "Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal.",
    price: 2690000,
    inCart: false,
  },
];
export default itemData;
