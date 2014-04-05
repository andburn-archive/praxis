using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHGolfStore.Domain.Entities
{
    class Publisher
    {
        // Primary Key
        public int PublisherId { get; set; }

        // Data attributes for the Publisher
        public string PublisherName { get; set; }
        public string Address { get; set; }

        // Association - one publisher has many books
        public virtual ICollection<Book> Books { get; set; }
    }
}
