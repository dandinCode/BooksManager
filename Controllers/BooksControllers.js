const { where } = require("sequelize");
const Books = require("../Models/Books");

module.exports = class BooksControllers{
    static registerBook(req, res){
        res.render("register");
    }

    static async resgisterBookSave(req, res){
        const {title, author, gender, company, abstract} = req.body;
        let isReaded;
        if(req.body.isReaded === "on"){
            isReaded = 1;
        } else{
            isReaded = 0;
        }

        await Books.create({title, author, gender, company, abstract, isReaded});

        res.redirect("/book/register");
    }

    static async listAllBooks(req, res){
        const books = await Books.findAll({raw: true});
        res.render("list", {books});
    }

    static async showDetails(req, res){
        const {id} = req.body;

        const book = await Books.findOne({raw: true, where: {id}});

        res.render("details", {book})
    }

    static async filterBooks(req, res){
        const {isReaded} = req.params;

        const books = await Books.findAll({raw: true, where: {isReaded}});

        res.render("list", {books});
    }

    static async deleteBook(req, res){
        const {id} = req.body;
        console.log(`\n aqui oh`)
        await Books.destroy({where: {id}});

        res.redirect("/book/list");
    }

    static async updateBook(req, res){
        const {id} = req.body;

        const book = await Books.findOne({raw: true, where: {id}});
        res.render("edit", {book});
    }

    static async updateBookSave(req, res){
        const {id, title, author, gender, company, abstract} = req.body;

        
        let isReaded;
        if(req.body.isReaded === "on"){
            isReaded = 1;
        } else{
            isReaded = 0;
        }

        const atualBook = {
            title: title,
            author: author,
            gender: gender,
            company: company,
            abstract: abstract,
            isReaded: isReaded
        }
        const update = await Books.update(atualBook, {raw: true, where: {id}});
        if(update){
            const book = await Books.findOne({raw: true, where: {id}});
            res.render("details", {book});
        }else{
            res.redirect("/book/list");
        }


    }
}