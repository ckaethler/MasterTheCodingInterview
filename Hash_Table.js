// ****************************************************************************
class HashTable {
    // ------------------------------------------------------------------------
    constructor(size) {
        this.data = new Array(size);
    }

    // ------------------------------------------------------------------------
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // ------------------------------------------------------------------------
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) this.data[address] = [];
        this.data[address].push([key, value]);
        return this.data;
    }

    // ------------------------------------------------------------------------
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) return currentBucket[i][1];
            }
        } else return undefined;
    }

    // ------------------------------------------------------------------------
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keysArray.push(this.data[i][j][0])
                }
            }
        }
        return keysArray;
    }
}

// ----------------------------------------------------------------------------
// TESTING
// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 1000);
// myHashTable.set('apples', 100);
// myHashTable.set('pears', 100);
// myHashTable.set('nectarines', 100);
// myHashTable.set('peaches', 100);
// myHashTable.set('pineapples', 100);
// myHashTable.set('celery', 100);
// myHashTable.set('mangoes', 100);

// console.log(myHashTable.keys());
// console.log(myHashTable);