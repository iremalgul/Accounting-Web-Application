
using System.Web.Mvc;
using UILayer.Services.Implements;
using UILayer.Services.Interfaces;
using Unity;
using Unity.Mvc5;

namespace UILayer
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            container.RegisterType<IUserService, UserService>();
            container.RegisterType<IStockService, StockService>();
            container.RegisterType<IFirmService, FirmService>();
            container.RegisterType<IInvoiceService, InvoiceService>();
            container.RegisterType<ICaseService, CaseService>();
            container.RegisterType<IPaymentService, PaymentService>();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}