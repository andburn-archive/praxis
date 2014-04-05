using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Ninject;
using SHGolfStore.Domain.Abstract;
using SHGolfStore.Domain.Concrete;

namespace SHGolfStore.WebUI.Infrastructure
{
    public class NinjectControllerFactory : DefaultControllerFactory
    {
        private IKernel ninjectKernel;

        public NinjectControllerFactory()
        {
            ninjectKernel = new StandardKernel();
            AddBindings();
        }

        protected override IController GetControllerInstance(
                System.Web.Routing.RequestContext requestContext, Type controllerType)
        {
            return controllerType == null 
                ? null
                : (IController) ninjectKernel.Get(controllerType);
        }

        private void AddBindings() 
        {
            ninjectKernel.Bind<IPublisherRepository>().To<EFPublisherRepository>();
            ninjectKernel.Bind<IBookRepository>().To<EFBookRepository>();
        }
    }
}