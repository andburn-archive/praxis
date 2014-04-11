using Ebuy.Website.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ebuy.Website.Controllers
{
    public class AuctionsController : Controller
    {
        //
        // GET: /Auctions/

        public ActionResult Index()
        {
            return View();
        }

        //
        // GET: /Auctions/Details/5

        public ActionResult Details(int id = 0)
        {
            var auction = new Ebuy.Website.Models.Auction
            {
                Id = id,
                Title = "Brand new Widget 2.0",
                Description = "This is a brand new version 2.0 Widget!",
                StartPrice = 1.00m,
                CurrentPrice = 13.40m,
                StartTime = DateTime.Parse("2012-6-15 12:34 PM"),
                EndTime = DateTime.Parse("2012-6-22 12:34 PM"),
            };
            return View(auction);
        }

        //
        // GET: /Auctions/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Auctions/Create

        [HttpPost]
        public ActionResult Create(Auction auction)
        {
            return View(auction);            
        }

        //
        // GET: /Auctions/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Auctions/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Auctions/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Auctions/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
