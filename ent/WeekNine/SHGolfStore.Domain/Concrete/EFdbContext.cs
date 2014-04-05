using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SHGolfStore.Domain.Entities;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations.Schema;

namespace SHGolfStore.Domain.Concrete
{
    public class EFdbContext : DbContext
    {
        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Publisher>().HasKey(p => p.PublisherId);
            modelBuilder.Entity<Publisher>().Property(c => c.PublisherId)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            modelBuilder.Entity<Book>().HasKey(b => b.BookId);
            modelBuilder.Entity<Book>().Property(b => b.BookId)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            modelBuilder.Entity<Book>().HasRequired(p => p.Publisher)
                .WithMany(b => b.Books).HasForeignKey(b => b.PublisherId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
