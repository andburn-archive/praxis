using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Ninject;

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
                System.Web.Routing.RequestContext, Type controllerType)
        {
            return controllerType == null 
                ? null
                : (IController) ninjectKernel.Get(controllerType);
        }

        private void AddBindings() 
        {
            // add stuff here
        }
    }
}