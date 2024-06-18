const express =  require('express');
const app = express();
app.use(express.json());
app.get("/",((req,res) =>{
    res.send("Hello world");
}));
const books = [
    {id: 1,name:"book1",author: "author1"},
    {id: 2,name:"book2",author: "author2"},
    {id: 3,name:"book3",author: "author3"},
    {id: 4,name:"book4",author: "author4"},
    {id: 5,name:"book5",author: "author5"},
    {id: 6,name:"book1",author: "author2"}];
//localhost:3000/api/books
app.get("/api/books",((req,res) =>{
    res.send(books);
}));
//localhost:3000/api/books/:id
app.get("/api/books/:id",((req,res) =>{
    const reqId = req.params.id;
    let book = books.filter(item => item.id == reqId);
    if(book.length == 0){
        res.status(404).send("book is not available");
        return;
    }
    res.send(book);
}));
app.get("/api/books/:name/:author",((req,res) =>{
    res.send(req.params);
}));
app.post("/api/books",(req,res) =>{
    // console.log(req.body);

    //let data = req.body;data.name,data.author
    let {name,author} = req.body;
    console.log(name,author);
    const newBook = {
        id: books.length+1,
        name: name,
        author:author
    };
    books.push(newBook);
    res.status(201).send(newBook);
});
app.delete("/api/books/:bookId",(req,res)=>{
    const reqId = req.params.bookId;
    let book = books.find((item) => item.id == reqId)
    if (book.length ==0){
        res.status(404).send("<h1> Book Not Found</h1>")
        return;
    }
       const index = books.indexOf(book);
       //console.log(index);
       books.splice(index, 1)
       res.send(book);
    });
    app.put("/api/books/:bookId",(req,res)=>{
        const reqId = req.params.bookId;
        let book = books.find((item) => item.id == reqId)
        if (book.length ==0){
            res.status(404).send("<h1> Book Not Found</h1>")
            return;
        }
        book.name = req.body.name;
        book.author = req.body.author;
        res.send(book);
        });
app.listen((3000),() =>{
    console.log("Server running on port 3000");
});