function pricePerGramProtein(priceRands, totalWeightG, proteinPerServingG, servingSizeG) {
const proteinRatio = proteinPerServingG / servingSizeG;
const totalProteinG = totalWeightG * proteinRatio;
const costPerGram = priceRands / totalProteinG;
return Math.round(costPerGram * 100) / 100;
}

const products = [
    { name: "Biogen Iso Whey", cost: pricePerGramProtein(1169.99, 1500, 21, 30) },
    { name: "NPL Platinum", cost: pricePerGramProtein(800.99, 2000, 25, 40) },
    { name: "USN Hardcore Whey GH", cost: pricePerGramProtein(789.99, 1800, 27, 33) },
];

products.sort((a, b) => a.cost - b.cost); 

products.forEach((p, i) => {
    console.log(`${i + 1}. ${p.name}: R${p.cost} per gram of protein`);
});
