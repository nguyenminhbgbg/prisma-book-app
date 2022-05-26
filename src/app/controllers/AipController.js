const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient()

class SiteController{

    // [GET]  api/users
    async users(req, res, next){
        const allUsers = await prisma.user.findMany({})
        res.json(allUsers);
    }
    // [GET]  api/Genre
    async Genres(req, res, next){
        const genre = await prisma.genre.findMany({})
        res.json(genre);
    }
    // [GET]  api/Books
    async Books(req, res, next){
        const recipes = await prisma.book.findMany({
            include: { Chapters: true },
        })
        res.json(recipes);
    }
    // [GET]  api/Chapter
    async Chapters(req, res, next){
        const ingredients = await prisma.chapter.findMany({
        })
        res.json(ingredients);
    }
    // [GET]  api/Chapter/:id
    async ChaptersId(req, res, next){
        const bookId = req.params.id
        const ingredients = await prisma.chapter.findMany({
            where: {
                bookId
              },
        })
        res.json(ingredients);
    }
    async BooksWithGenres(req, res, next){
        const genre = req.params.genre
        const ingredients = await prisma.book.findMany({
            where: {
                genre
              },
        })
        res.json(ingredients);
    }
    
    // [POST]  api/Chapter
    async createBook(req, res, next){
        console.log(req.body);
        const { bookName, author, description, rating, language, readed,
        backgroundColor, navTintColor, genre, pageNo, completion, lastRead, bookCover, chapter } = req.body
        
        try {
            const book = await prisma.book.create({
                data: {
                    bookName,
                    author,
                    description,
                    rating,
                    language,
                    readed,
                    backgroundColor,
                    navTintColor,
                    genre,
                    pageNo,
                    completion,
                    lastRead,
                    bookCover,
                    Chapters: {
                        createMany: {
                            data:  chapter
                        }
                      },
                },
              })
        }catch(e) {
            res.json(e);
        }
        res.json(book);
    }

    // [POST]  api/register
    async register(req, res, next) {
        let data = req.body;
        const { email } = data;
        data.password = bcrypt.hashSync(data.password, 10);
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (user) {
          return res
            .status(200)
            .send({ status: false, message: "This email have been used" });
        } else {
          let result = await prisma.user.create({
            data,
          });
          return res
            .status(200)
            .send({ status: true, result, message: "Register success" });
        }
    }
    // [POST]  api/login
    async login(req, res, next) {
        let data = req.body;
        const { email, password } = data;
        const user = await prisma.user.findUnique({
            where: {
            email,
            }
        });

        if (!user) {
            return res
            .status(200)
            .send({ status: false, message: "User not registered" });
        }else{
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name, email: user.email}, 'verySecretValue', {expiresIn: '1h'})
                    const {password, ...others} = user
                    res.json({
                        status: true,
                        message: 'Đăng nhập thành công!',
                        token,
                        others
                    })
                }else{
                    res.json({
                        status: false,
                        message: 'Mật khẩu không đúng, vui lòng thử lại!'
                    })
                }
            })
        }
    }
}
module.exports = new SiteController();
