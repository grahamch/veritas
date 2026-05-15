
function pricePerGramProtein(priceRands, totalWeightG, proteinPerServingG, servingSizeG) {
const proteinRatio = proteinPerServingG / servingSizeG;
const totalProteinG = totalWeightG * proteinRatio;
const costPerGram = priceRands / totalProteinG;
return Math.round(costPerGram * 100) / 100;
}

const rawData = [
    ["Biogen Iso Whey", 1169.99, 1500, 21, 30],
    ["NPL Platinum", 499.99, 1000, 24, 30],
    ["USN Hardcore Whey GH", 649.99, 2000, 22, 33]
]

let products = rawData.map(([name, price, weight, protein, serving]) => ({name, cost: pricePerGramProtein(price, weight, protein, serving)
}))

for(let {name, cost} of products.filter(item => item.cost < 1)) {
    console.log(`${name}: R${cost}`);
}



/*
products.sort((a, b) => a.cost - b.cost); 

products.forEach((p, i) => {
    console.log(`${i + 1}. ${p.name}: R${p.cost} per gram of protein`);
});
*/
