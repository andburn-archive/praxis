using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SHGolfStore.Domain.Entities;

namespace SHGolfStore.Domain.Abstract
{
    public interface IBookRepository
    {
        IQueryable<Book> Books { get; }
    }
}
