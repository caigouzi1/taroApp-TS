import { create } from "dva-core-ts";
// import createLoading from "dva-loading-ts";

let app;
let store;
let dispatch;
let registered;

function createApp(opt) {
  // redux日志
  opt.onAction = [
    // createLogger()
  ];
  app = create(opt);
  // app.use(createLoading({}));

  // if (!registered) opt.models.forEach(model => app.model(model));
  // registered = true;
  if (!registered) {
    opt.models.forEach((model) => app.model(model));
    // opt.models.forEach((key) => app.model(key.default));
    registered = true;
  }

  app.start();

  store = app._store;
  app.getStore = () => store;
  app.use({
    onError(err) {
      console.log(err);
    },
  });

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};
