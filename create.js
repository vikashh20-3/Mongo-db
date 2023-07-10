//for Node.js
await db.collection("inventory").insertOne({
  item: "canvas",
  qty: 100,
  tags: ["cotton"],
  size: { h: 28, w: 35.5, uom: "cm" },
});
//for python
db.demo.insertOne({
  item: "canvas",
  qty: 100,
  tags: ["Mechanical", "Simple"],
});

db.demo.insertMany([
  {
    item: "one",
    qty: 20,
    tags: ["demoone", "demotwo", "demothree"],
    size: { h: 2, w: 4, suf: "cms" },
  },
  {
    item: "two",
    qty: 30,
    tags: ["demoone", "demotwo", "demothree"],
    size: { h: 2, w: 4, suf: "cms" },
  },
  {
    item: "three",
    qty: 40,
    tags: ["demoone", "demotwo", "demothree"],
    size: { h: 2, w: 4, suf: "cms" },
  },
]);
