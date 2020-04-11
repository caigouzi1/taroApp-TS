import Api from "../services/article";

export default {
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
