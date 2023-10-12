import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist'),
};
export const devServer = {
  setupMiddlewares: function (app, server) {
    app.use(function (req, res, next) {
      console.log('Time:', Date.now());
      next();
    });
  },
};
