export const priceGenerator = (min = 5, max = 12) =>  { 
    return (Math.random() * (max - min + 1) + min).toFixed(2);
}

