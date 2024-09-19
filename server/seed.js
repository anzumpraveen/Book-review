const mongoose = require('mongoose');  
const Book = require('./models/bookModel'); // Adjust the path to your Book model  
require("dotenv").config();  

// Sample book data  
const books = [  
  {  
    title: "To Kill a Mockingbird",  
    author: "Harper Lee",  
    description: "A novel about racial injustice and the loss of innocence in the American South.",  
    publishedYear: 1960,  
    genre: "Fiction",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG"  
  },  
  {  
    title: "1984",  
    author: "George Orwell",  
    description: "A dystopian novel set in a totalitarian society, exploring themes of mass surveillance and censorship.",  
    publishedYear: 1949,  
    genre: "Dystopian",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c3/1984first.jpg"  
  },  
  {  
    title: "Pride and Prejudice",  
    author: "Jane Austen",  
    description: "A romantic novel of manners, focusing on the relationship between Elizabeth Bennet and Mr. Darcy.",  
    publishedYear: 1813,  
    genre: "Romance",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/PrideAndPrejudiceTitlePage.jpg"  
  },  
  {  
    title: "The Great Gatsby",  
    author: "F. Scott Fitzgerald",  
    description: "A novel depicting the lavish lifestyle of the Roaring Twenties and the American Dream.",  
    publishedYear: 1925,  
    genre: "Fiction",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f7/TheGreatGatsby_1925jacket.jpg"  
  },  
  {  
    title: "One Hundred Years of Solitude",  
    author: "Gabriel García Márquez",  
    description: "A landmark novel in the magical realism style, telling the multi-generational story of the Buendía family.",  
    publishedYear: 1967,  
    genre: "Magic Realism",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9d/OneHundredYearsOfSolitude.png"  
  },  
  {  
    title: "The Catcher in the Rye",  
    author: "J.D. Salinger",  
    description: "A controversial novel about teenage alienation and angst, narrated by the iconic Holden Caulfield.",  
    publishedYear: 1951,  
    genre: "Fiction",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg"  
  },  
  {  
    title: "The Hobbit",  
    author: "J.R.R. Tolkien",  
    description: "A fantasy novel about the adventures of Bilbo Baggins, serving as a prelude to The Lord of the Rings.",  
    publishedYear: 1937,  
    genre: "Fantasy",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg"  
  },  
  {  
    title: "Fahrenheit 451",  
    author: "Ray Bradbury",  
    description: "A dystopian novel about a future American society where books are outlawed and 'firemen' burn them.",  
    publishedYear: 1953,  
    genre: "Dystopian",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg"  
  },  
  {  
    title: "Brave New World",  
    author: "Aldous Huxley",  
    description: "A dystopian novel envisioning a genetically engineered future where society is peaceful but without freedom.",  
    publishedYear: 1932,  
    genre: "Dystopian",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg"  
  },  
  {  
    title: "The Alchemist",  
    author: "Paulo Coelho",  
    description: "A philosophical novel about a young Andalusian shepherd's journey to find his destiny.",  
    publishedYear: 1988,  
    genre: "Adventure",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg"  
  },  
  {  
    title: "Moby-Dick",  
    author: "Herman Melville",  
    description: "An epic sea story of Captain Ahab's voyage in pursuit of Moby Dick, a giant white sperm whale.",  
    publishedYear: 1851,  
    genre: "Adventure",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/Moby-Dick_FE_title_page.jpg"  
  },  
  {  
    title: "The Lord of the Rings",  
    author: "J.R.R. Tolkien",  
    description: "An epic high-fantasy novel that follows hobbits and their allies in the struggle against the Dark Lord Sauron.",  
    publishedYear: 1954,  
    genre: "Fantasy",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"  
  },  
  {  
    title: "The Hunger Games",  
    author: "Suzanne Collins",  
    description: "A young adult dystopian novel set in a post-apocalyptic world where young people must fight to the death in an annual televised event.",  
    publishedYear: 2008,  
    genre: "Dystopian",  
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg"  
  }  
];  

// Connect to MongoDB  
mongoose.connect(process.env.MONGO_URI, {  
  useNewUrlParser: true,  
  useUnifiedTopology: true  
})  
.then(async () => {  
  console.log('Connected to MongoDB');  

  // Clear the Book collection  
  await Book.deleteMany({});  

  // Insert the sample data  
  await Book.insertMany(books);  
  
  console.log('Books seeded successfully');  
})  
.catch(err => {  
  console.error('Error connecting to MongoDB:', err);  
})  
.finally(() => {  
  mongoose.connection.close();  
});