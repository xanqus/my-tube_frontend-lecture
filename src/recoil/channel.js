import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const modalActiveState = atom({
  key: "modalActiveState",
  default: true,
  effects_UNSTABLE: [persistAtom],
});
