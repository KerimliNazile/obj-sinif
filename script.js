
// const array1=["Heyva","Alma","Armud","Nar"]
// class fruit{
//     constructor(...fruit){
//         this.fruit=[...fruit]
//     }
//     Search(value){
//         if(this.fruit.includes(value)){
//             console.log(true);
//         }
//         else{
//             console.log(false);
//         }
//     }
// }
// let myClass= new fruit("Heyva","Alma","Armud","Nar")
// myClass.Search("Nar")
// myClass.Search("Saftali")




// const array1=[22,34,50]
// class num {
//     constructor(num) {
//         this.num = num
//     }
//     bolen() {
//         for (let i = 0; i <= this.num; i++) {
//             if (this.num % i === 0) {
//                 console.log(i);
//             }
//         }
//     }
// }
// let myClass = new num(50)
// myClass.bolen()

// class Admin {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }
//     Login(name, kod) {
//         if (this.email === username && this.password === kod) {
//             console.log("Enter");
//         }
//         else {
//             console.log("False");
//         }
//     }
// }
// let username = prompt("What is your name?");
// let kod = prompt("Enter password");
// let myClass = new Admin("Nazile","1406");
// myClass.Login(username,kod);



// class Human{
//     constructor(name,age,height){
//         this.name=name
//         this.age=age
//         this.height=height
//     }

// }
// class Doctor extends Human{
//         constructor( name,age,experience ){
//             super(name,age,this.height)
//             this.experience=experience
//         }
//     }
//     const myClass=new Human("Nazile",19,"2il")
//     console.log(myClass)



const array1 = [
    {
        "id": 2,
        "description": "Sweet and savory sauces relishes spreads and seasonings",
        "name": "Condiments"
    },
    {
        "id": 1,
        "description": "Soft drinks coffees teas beers and ales",
        "name": "Beverages"
    },
    {
        "id": 3,
        "description": "Desserts candies and sweet breads",
        "name": "Confections"
    },
    {
        "id": 4,
        "description": "Cheeses",
        "name": "Dairy Products"
    },
    {
        "id": 5,
        "description": "Breads crackers pasta and cereal",
        "name": "Grains/Cereals"
    },
    {
        "id": 6,
        "description": "Prepared meats",
        "name": "Meat/Poultry"
    },
    {
        "id": 7,
        "description": "Dried fruit and bean curd",
        "name": "Produce"
    },
    {
        "id": 8,
        "description": "Seaweed and fish",
        "name": "Seafood"
    }
]


// console.table(array1)
// array1.sort((a,b) => (a.id > b.id) ? 1 : ((b.id> a.id) ? -1 : 0))
// console.table(array1)
// array1.sort((a,b) => (a.name > b.name) ? 1 : ((b.name> a.name) ? -1 : 0))
// console.table(array1)
// array1.sort((a,b) => (a.description > b.description) ? 1 : ((b.description> a.description) ? -1 : 0))
// console.table(array1)
// console.table(array1);
let keyword="Se"

console.table(array1.filter(item => item.description.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())));
