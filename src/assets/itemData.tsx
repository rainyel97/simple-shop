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
      "https://raw.githubusercontent.com/rainyel97/simple-shop/master/src/assets/itemImgs/mbair_m1.jpg",
    discription:
      "MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness.",
    price: 1390000,
    inCart: false,
  },
  {
    itemId: 1,
    itemName: "Macbook Air M2",
    itemImg:
      "https://raw.githubusercontent.com/rainyel97/simple-shop/master/src/assets/itemImgs/mbair_m2.jpg",
    discription:
      "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminum enclosure. It’s the ultrafast, ultracapable laptop that lets you work, play, or create just about anything — anywhere.",
    price: 1690000,
    inCart: false,
  },
  {
    itemId: 2,
    itemName: 'Macbook Pro 13"',
    itemImg:
      "https://raw.githubusercontent.com/rainyel97/simple-shop/master/src/assets/itemImgs/mbpro13.png",
    discription:
      "The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera, and studio‑quality mics, it’s our most portable pro laptop.",
    price: 1790000,
    inCart: false,
  },
  {
    itemId: 3,
    itemName: 'Macbook Pro 14"',
    itemImg:
      "https://raw.githubusercontent.com/rainyel97/simple-shop/master/src/assets/itemImgs/mbpro14.jpg",
    discription:
      "Supercharged by M1 Pro or M1 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal.",
    price: 2690000,
    inCart: false,
  },
  {
    itemId: 4,
    itemName: 'Macbook Pro 16"',
    itemImg:
      "https://raw.githubusercontent.com/rainyel97/simple-shop/master/src/assets/itemImgs/mbpro16.jpg",
    discription:
      "Supercharged by M1 Pro or M1 Max, MacBook Pro takes its power and efficiency further than ever. It delivers exceptional performance whether it’s plugged in or not, and now has even longer battery life. Combined with a stunning Liquid Retina XDR display and all the ports you need — this is a pro laptop without equal.",
    price: 3490000,
    inCart: false,
  },
];
export default itemData;
