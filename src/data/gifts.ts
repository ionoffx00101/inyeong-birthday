import type { GiftItem } from "@/types/gift";
import GiftM5pro from "@/assets/gift/m5pro.png";
import GiftKeyboard from "@/assets/gift/keyboard.png";
import GiftHedgehog from "@/assets/gift/hedgehog.png";
import GiftKiwi from "@/assets/gift/kiwi.png";
import GiftAtom from "@/assets/gift/atom.jpg";
import GiftCrimson from "@/assets/gift/crimson-desert.jpg";

export const giftList: GiftItem[] = [
  {
    id: 1,
    name: "M5 Pro MacBook Pro 14",
    price: 5144000,
    reason: "️더 빠른 코딩, 더 멋진 코딩, 더 행복한 인영",
    image: GiftM5pro,
    storeUrl:
      "https://www.apple.com/kr/shop/xc/product/ro-mbp-m5pro-m5max-14inch-silver-bt-bs-ut-2026?option.keyboard=KH065-CL2T&option.thunderbolt=065-CL1N&option.software_final=065-CL3T&option.retina_display=065-CKYT&option.power_adapter=065-CL14&option.software_logic=065-CL3W&option.memory=065-CKX3&option.display=065-CKYX&option.storage=065-CKX7&option.countrykit=KH065-CL30&option.processor=065-CKWX",
  },
  {
    id: 2,
    name: "키크론 K1 PRO MAX RGB 슬림 로우 프로파일",
    price: 155800,
    reason: "️토독토독..",
    image: GiftKeyboard,
    storeUrl:
      "https://brand.naver.com/keychron/products/9985340760?NaPm=ct%3Dmnco3rdc%7Cci%3Dcheckout%7Ctr%3Dppc%7Ctrx%3Dnull%7Chk%3D3c3335ea4ecb2cae90011eeac02ab3bc17d6a9b3",
  },
  {
    id: 3,
    name: "고슴도치 도자기 인형",
    price: 20000,
    reason: "️사유: 귀여움",
    image: GiftHedgehog,
    storeUrl: "https://smartstore.naver.com/doahse/products/12640857143",
  },
  {
    id: 4,
    name: "키위새 이모티콘",
    price: 2500,
    reason: "️사유: 이것도 귀여움",
    image: GiftKiwi,
    storeUrl: "https://e.kakao.com/t/would-you-like-to-adopt-a-babykiwi5?t_ch=share_link_web",
  },
  {
    id: 5,
    name: "Fallout76 Atom",
    price: 46160,
    reason: "️폴아웃 76에서 예쁜 옷을 살래요",
    image: GiftAtom,
    storeUrl: "https://store.steampowered.com/app/1158670/Fallout_76_Atoms/",
  },
  {
    id: 6,
    name: "붉은사막",
    price: 92800,
    reason: "️붉은사막 해보고 싶슴다",
    image: GiftCrimson,
    storeUrl: "https://store.steampowered.com/app/3321460/_/?l=koreana",
  },
];
