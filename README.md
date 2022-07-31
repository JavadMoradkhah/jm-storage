# About

The jm-storage library is simple key-value pair storage for node.js. Its API is exactly like [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) in browsers and it's very easy to use.

## Installation

```
npm i jm-storage
```

## Usage

```javascript
const Storage = require('jm-storage');

const storage = new Storage('storage.json');

// Sets the given key value or adds new key-value pair
storage.setItem(key, value);

// Returns the value of the given key
// If the key doesn't exist and if the default value is passed it returns the given default value
// Otherwise it returns null
storage.getItem(key, defaultValue);

// Returns all of the saved key-value pairs
// If storage is empty, it will return an empty object
storage.getAll();

// Removes the given key-value pair from storage
storage.removeItem(key);

// Clears the whole storage
storage.clear();
```
