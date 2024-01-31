import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export const inputContents = selector({
  key: "inputContents",
  get: ({ get }) => {
    const text = get(textState);
    return text;
  },
});

export const todoListState = atom({
  key: "todoListState",
  default: [],
});
