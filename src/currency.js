const digitsRE = /(\d{3})(?=\d)/g;

export function currency(value, currency, decimals) {
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return "";
  currency = currency != null ? currency : "$";
  decimals = decimals != null ? decimals : 3;
  var stringified = Math.abs(value).toFixed(decimals);
  var _init = decimals ? stringified.slice(0, -1 - decimals) : stringified;

  var i = _init.length % 3;
  var head = i > 0 ? _init.slice(0, 2) + (_init.length > 3 ? "," : "") : "";
  var _float = decimals ? stringified.slice(-1, -decimals) : "";
  var sign = value < 0 ? "-" : "";
  return (
    sign + currency + head + _init.slice(0).replace(digitsRE, "$1,") + _float
  );
}
