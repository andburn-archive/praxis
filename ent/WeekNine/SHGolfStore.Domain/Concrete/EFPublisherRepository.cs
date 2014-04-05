using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SHGolfStore.Domain.Abstract;
using SHGolfStore.Domain.Entities;

namespace SHGolfStore.Domain.Concrete
{
    public class EFPublisherRepository : IPublisherRepository
    {
        private EFdbContext context = new EFdbContext();

        public IQueryable<Publisher> Publishers
        {
            get { return context.Publishers; }
        }

        public void SavePublisher(Publisher publisher)
        {
            if (publisher.PublisherId == 0)
            {
                context.Publishers.Add(publisher);
            }
            else
            {
                Publisher p = context.Publishers.Find(publisher.PublisherId);
                if (p != null)
                {
                    p.PublisherName = publisher.PublisherName;
                    p.Address = publisher.Address;
                }
            }
            context.SaveChanges();
        }

        public Publisher DeletePublisher(int publisherId)
        {
            Publisher p = context.Publishers.Find(publisherId);
            if (p != null)
            {
                context.Publishers.Remove(p);
                context.SaveChanges();
            }
            return p;
        }
    }
}
