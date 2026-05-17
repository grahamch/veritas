// Exercise 1:

let price = 1999;
let discountPercent = 5;

function discountedPrice(price, discountPercent) {
    price = price - (price * discountPercent / 100);
    return Math.round(price * 100) / 100 ;
}

console.log(discountedPrice(price, discountPercent));

// Exercise 2:

let supplement = {
    name: "Super Whey Concentrate", 
    brand: "My Wellness", 
    price: 1349.99, 
    weightG: 3000, 
    category: "Whey protein"
};

function describe(supplement) {
    console.log(`We recommend ${supplement.name} from ${supplement.brand}, which costs R${supplement.price} and weighs ${supplement.weightG / 1000}kg`);
}

describe(supplement);

// Exercise 3:

let VATPercent = 15;
const prices = [299.99, 149.50, 89.99, 450.00, 199.95];

function addVAT(price, VAT) {
    price = price * (1 + VAT / 100);
    return Math.round(price * 100) / 100;
    
}

let pricesInclVAT = prices.map(price => addVAT(price, VATPercent));
console.log(pricesInclVAT);

// Exercise 4:

let cheapPrices = pricesInclVAT.filter(price => price < 200);
cheapPrices.sort((a, b) => a - b);
console.log(cheapPrices);

// Exercise 5:

const supplements = [
    { name: "Vitamin C", price: 89.99, stock: true },
    { name: "Magnesium", price: 149.99, stock: false },
    { name: "Omega 3", price: 219.99, stock: true },
    { name: "Zinc", price: 79.99, stock: true },
    { name: "Vitamin D", price: 189.99, stock: false }
]

// Filters to only in-stock items

let inStockSupplements = supplements.filter(item => item.stock == true);

// Sorts by price ascending

inStockSupplements.sort((a, b) => a.price - b.price);

// Prints each one as: "1. Vitamin C — R89.99"
let i = 0;
for(let {name, price} of inStockSupplements) {
    
    console.log(`${++i}. ${name} - R${price}`);
}

