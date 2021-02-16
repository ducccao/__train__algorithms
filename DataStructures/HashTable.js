class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    const hash = this.calculateHash(key);

    if (!this.values.hasOwnProperty(hash)) {
      this.value[hash] = {};
    }

    if (!this.values[hash].hashOwnProperty(key)) {
      this.length++;
    }

    this.values[hash][key] = value;
  }

  search(key) {
    const hash = this.calculateHash(key);

    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    }
    return null;
  }
}

class HashEntry {
  constructor(key, data) {
    this.key = key;
    this.value = data;
    this.next = null;
  }
}

let entry = new HashEntry(3, "Educative");
console.log(String(entry.key) + "," + entry.value);
