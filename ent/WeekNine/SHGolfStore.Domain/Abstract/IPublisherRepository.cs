using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SHGolfStore.Domain.Entities;

namespace SHGolfStore.Domain.Abstract
{
    public interface IPublisherRepository
    {
        IQueryable<Publisher> Publishers { get; }

        void SavePublisher(Publisher publisher);

        Publisher DeletePublisher(int publisherId);
    }
}
