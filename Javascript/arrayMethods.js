const items = [
  { name: 'Bike', price:  100},
  { name: 'TV', price: 200},
  { name: 'Album', price: 10},
  { name: 'Book', price: 5},
  { name: 'Phone', price: 500},
  { name: 'Computer', price: 1000},
  { name: 'Keyboard', price: 25}
]

// filter
const filteredItems = items.filter((item) => {
  return item.price <= 100
})

// console.log(items);
// console.log(filteredItems);

// map
const itemNames = items.map((item) => {
  return item.name
})

// find
const foundItem = items.find((item) => {
  return item.name === 'Book'
})

// forEach
items.forEach((item) => {
  console.log(item.name)
})

// some
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100
})

// every
const hasInexpensiveItems = items.every((item) => {
  return item.price <= 1000
})

// reduce
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal
}, 0)

// includes
const items2 = [1, 2, 3, 4, 5];

const includesTwo = items.includes(2);