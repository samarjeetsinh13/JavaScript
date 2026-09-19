const coding = ['Js', 'rb', 'py', 'java', 'cpp']

const value = coding.forEach((item)=>{
    // console.log(item);
})
//foreach don't return any values 
// console.log(value)//undefined


const arr = [1,2,3,4,5,64,4,654,7]

const newNum = arr.filter((num) => num > 4)

console.log(newNum)

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", pages: 281, isRead: true },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian", pages: 328, isRead: false },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", pages: 180, isRead: true },
  { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", pages: 310, isRead: true },
  { id: 5, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", pages: 309, isRead: false },
  { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", pages: 234, isRead: false },
  { id: 7, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", pages: 279, isRead: true },
  { id: 8, title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", pages: 208, isRead: true },
  { id: 9, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "History", pages: 512, isRead: false },
  { id: 10, title: "Educated", author: "Tara Westover", genre: "Biography", pages: 352, isRead: true }
];


const userChoice = books.filter((bk)=>bk.genre == 'History')
const isRead = books.filter((bk)=> bk.isRead && bk.pages>=300)
// console.log((userChoice));
// console.log(isRead);

const newArr = arr.map((num)=> num+=10)

console.log(newArr);


//chaining

const newNums = arr
                .map((num)=> num * 20)
                .map((num)=> num+10)
                .filter((num)=> num > 120)

console.log(newNums);
