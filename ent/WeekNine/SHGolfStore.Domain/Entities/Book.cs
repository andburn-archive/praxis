using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHGolfStore.Domain.Entities
{
    public class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Year { get; set; }

        // Foreign Key setup
        public int PublisherId { get; set; }
        public virtual Publisher Publisher { get; set; }
    }
}
