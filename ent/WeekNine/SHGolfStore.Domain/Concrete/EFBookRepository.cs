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
    }
}

