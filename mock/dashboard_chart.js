function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [25, 43, 98, 62, 81, 37];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
