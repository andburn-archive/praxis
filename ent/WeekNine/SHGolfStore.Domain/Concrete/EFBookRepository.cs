using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SHGolfStore.Domain.Abstract;
using SHGolfStore.Domain.Entities;

namespace SHGolfStore.Domain.Concrete
{
    public class EFBookRepository : IBookRepository
    {
        private EFdbContext context = new EFdbContext();

        public IQueryable<Book> Books
        {
            get { return context.Books; }
        }

        public void SaveBook(Book book)
        {
            if (book.BookId == 0)
            {
                context.Books.Add(book);
            }
            else
            {
                Book b = context.Books.Find(book.BookId);
                if (b != null)
                {
                    b.Title = book.Title;
                    b.Year = book.Year;
                    b.PublisherId = book.PublisherId;
                }
            }
            context.SaveChanges();
        }

        public Book DeleteBook(int publisherId)
        {
            Book b = context.Books.Find(publisherId);
            if (b != null)
            {
                context.Books.Remove(b);
                context.SaveChanges();
            }
            return b;
        }
    }
}

