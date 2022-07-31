const { writeFileSync, readFileSync } = require('fs');

const stringify = (data) => JSON.stringify(data, null, '  ');

const parse = (data) => JSON.parse(data || '{}');

function Storage(storagePath) {
  this.setItem = function (key, value) {
    const data = parse(readFileSync(storagePath, { flag: 'a+' }).toString());
    data[key] = value;
    writeFileSync(storagePath, stringify(data));
  };
  this.getItem = function (key, defaultValue = null) {
    const data = parse(readFileSync(storagePath, { flag: 'a+' }).toString());
    return data[key] || defaultValue;
  };
  this.getAll = function () {
    return parse(readFileSync(storagePath, { flag: 'a+' }).toString());
  };
  this.removeItem = function (key) {
    const data = parse(readFileSync(storagePath, { flag: 'a+' }).toString());
    if (key in data) {
      delete data[key];
    }
    writeFileSync(storagePath, stringify(data));
  };
  this.clear = function () {
    writeFileSync(storagePath, stringify({}), { flag: 'w' });
  };
}

module.exports = Storage;
