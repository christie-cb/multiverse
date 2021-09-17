const richard = {
    name: "Richard",
    parents: [ { name: "Marlene"}, { name: "Richard" }],
    printParents: function() {
       console.log(this.parents[0].name);
       console.log(this.parents[1].name);
    },
};


const debbie = {
    name: "Debbie",
    parents: [ { name: "Carol" }, { name: "Timothy" }],
    printParents: function() {
       console.log(this.parents[0].name);
       console.log(this.parents[1].name);
    },
};

const christie = {
    name: "Christie Beauchamp",
    parents: [debbie, richard],
    printParents: function() {
       console.log(this.parents[0].name);
       console.log(this.parents[1].name);
    },
};

console.log(christie.name);
console.log(christie.parents);
christie.printParents();
