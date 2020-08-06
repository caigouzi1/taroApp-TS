import Api from "../services/article";
import { Model } from "dva-core-ts";

export interface ModelArticle extends MODEL.ResponseStruct {
  article: {
    article: [];
    articleTotal: number;
  };

  // dispatch: {
  //   articleAll: () => void;
  // };
}

const article: Model = {
  namespace: "article",
  state: {
    article: [],
    articleTotal: 0,
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *articleAll({ payload }, { call }) {
      const response = yield call(Api.articleAll, payload);
      console.log(response);
    },
  },
};

export default article;
