const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let products = ["Bread", "Milk", "Cheese"]

console.log("=== PRODUCTS ===")
console.log(products)
console.log("1 - add, 2 - delete, 3 - show, 0 - exit")

rl.on('line', (input) =>{
    switch (input) {
        case "0":
            console.log("Bye!");
            rl.close()
            break;

        case "1":
            rl.question("New prodect: ", (item) => {
                products.push(item);
                console.log(products)
            });
            break;
        case "2":
            rl.question("Product number you want delete: ", (num) => {
                let idx = Number(num) - 1;
                products.splice(idx, 1);
                console.log(products);
            });
        case "3":
            console.log(products);
            break;
        case "4":
            rl.question("Product you want to check (type number): ", (num) => {
                let idx = Number(num) - 1;
                console.log(products[idx]);
            });
            break;
        default:
            console.log("Wrong Command!")
    }
});

