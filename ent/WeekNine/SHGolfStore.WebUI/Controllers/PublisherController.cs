using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SHGolfStore.Domain.Abstract;
using SHGolfStore.Domain.Entities;

namespace SHGolfStore.WebUI.Controllers
{
    public class PublisherController : Controller
    {
        private IPublisherRepository objContext;

        public PublisherController(IPublisherRepository publisherRepository)
        {
            this.objContext = publisherRepository;
        }

        public ActionResult Index()
        {
            return View(objContext.Publishers);
        }

        public ActionResult Create()
        {
            return View(new Publisher());
        }

        [HttpPost]
        public ActionResult Create(Publisher publish)
        {
            objContext.SavePublisher(publish);
            return RedirectToAction("Index");
        }

        public ActionResult Edit(int id)
        {
            Publisher publisher = objContext.Publishers.Where(
                x => x.PublisherId == id).SingleOrDefault();
            return View(publisher);
        }

        [HttpPost]
        public ActionResult Edit(Publisher model)
        {
            if (ModelState.IsValid)
            {
                objContext.SavePublisher(model);
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
            Publisher publisher = objContext.DeletePublisher(id);
            return View(publisher);
        }

        public ViewResult Details(int id)
        {
            Publisher publisher = objContext.Publishers.Where(
                x => x.PublisherId == id).SingleOrDefault();
            return View(publisher);
        }
    }
}
