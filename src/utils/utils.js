export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
};

export const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

export const slepp = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  })
}

// 毫秒转换天
export const msToDay = (ms) => {
  return (ms / (1000 * 60 * 60 * 24)).toFixed(2)
}

// 秒转换天
export const sToDay = (s) => {
  return (s / (60 * 60 * 24)).toFixed(2)
}

export const parse18 = (v) => v * 10 ** 18;

export const unParse18 = (v) => v / 10 ** 18;

// usdt数量 / 价格 / 40% = 所需质押dk数量
export const pledgeDKNumber = (v, price) =>( v / price / 0.4).toString().split(".")[0];