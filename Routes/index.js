const express = require("express");
const router = express.Router();

const BooksControllers = require("../Controllers/BooksControllers");

router.get("/register", BooksControllers.registerBook);
router.post("/register", BooksControllers.resgisterBookSave);
router.get("/list", BooksControllers.listAllBooks);
router.post("/details", BooksControllers.showDetails);
router.get("/filter/:isReaded", BooksControllers.filterBooks);
router.post("/delete", BooksControllers.deleteBook);
router.post("/update", BooksControllers.updateBook);
router.post("/updateSave", BooksControllers.updateBookSave);

module.exports = router;