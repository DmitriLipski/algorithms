class QuickUnionUF {
    constructor(n) {
        this.id = [...Array(10).keys()];
    }

    root(i) {
        while (i !== this.id[i]) i = this.id[i];
        return i;
    }

    connected(p, q) {
        return this.root(p) === this.root(q);
    }

    union(p, q) {
        const i = this.root(p);
        const j = this.root(q);
        this.id[i] = j;
    }
}

const quickUnion = new QuickUnionUF(10);
const initialSet = [ ...quickUnion.id ];

quickUnion.union(3, 4);
quickUnion.union(4, 5);


console.log(JSON.stringify(initialSet));
console.log(JSON.stringify(quickUnion.id));

console.log(quickUnion.connected(3, 4));
console.log(quickUnion.connected(3, 5));