using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SHGolfStore.Domain.Abstract;
using SHGolfStore.Domain.Entities;

namespace SHGolfStore.WebUI.Controllers
{
    public class BookController : Controller
    {
        private IBookRepository objContext;

        public BookController(IBookRepository BookRepository)
        {
            this.objContext = BookRepository;
        }

        public ActionResult Index()
        {
            return View(objContext.Books);
        }

        public ActionResult Create()
        {
            return View(new Book());
        }

        [HttpPost]
        public ActionResult Create(Book book)
        {
            objContext.SaveBook(book);
            return RedirectToAction("Index");
        }

        public ActionResult Edit(int id)
        {
            Book Book = objContext.Books.Where(
                x => x.BookId == id).SingleOrDefault();
            return View(Book);
        }

        [HttpPost]
        public ActionResult Edit(Book model)
        {
            if (ModelState.IsValid)
            {
                objContext.SaveBook(model);
                return RedirectToAction("Index");
            }
            else
            {
                // Problem processing
                return View(model);
            }
        }

        public ActionResult Delete(int id)
        {
            Book Book = objContext.DeleteBook(id);
            return View(Book);
        }

        public ViewResult Details(int id)
        {
            Book Book = objContext.Books.Where(
                x => x.BookId == id).SingleOrDefault();
            return View(Book);
        }
    }
}
