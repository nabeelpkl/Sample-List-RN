const configs = {
  SERVER_URL: "http://www.mocky.io/v2",
};

const get = key => configs[key];

export default {
  get,
};
