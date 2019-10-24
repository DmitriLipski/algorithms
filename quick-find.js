class QuickFindUF {
    constructor(n) {
        this.id = [...Array(10).keys()];
    }

    connected(p, q) {
        return this.id[p] === this.id[q];
    }

    union(p, q) {
        const pid = this.id[p];
        const qid = this.id[q];
        for (let i = 0; i < this.id.length; i++) {
            if (this.id[i] === pid) this.id[i] = qid;
        }
    }
}

const quickFind = new QuickFindUF(10);
const initialSet = [ ...quickFind.id ];

quickFind.union(3, 4);
quickFind.union(4, 5);


console.log(JSON.stringify(initialSet));
console.log(JSON.stringify(quickFind.id));

console.log(quickFind.connected(3, 4));
console.log(quickFind.connected(3, 5));