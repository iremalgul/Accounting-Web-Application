using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UILayer.Models;
using UILayer.Services.Interfaces;

namespace UILayer.Controllers
{
    [IsLogin]
    public class InvoiceController : Controller
    {
        private readonly IInvoiceService _invoiceService;

        public InvoiceController(IInvoiceService invoiceService)
        {
            _invoiceService = invoiceService;
        }
        public ActionResult Index()
        {
            return View(_invoiceService.GetAll());
        }

        public ActionResult AddInvoice()
        {
            return View();
        }
        public ActionResult UpdateInvoice(int id)
        {
            return View(_invoiceService.GetInvoiceForUpdate(id));
        }
        public ActionResult DeleteRow(int id)
        {
            return Json(_invoiceService.DeleteInvoiceRow(id));
        }
        public ActionResult AddRow(InvoiceDetailDto model)
        {
            return Json(_invoiceService.AddInvoiceRow(model));
        }

        public ActionResult SaveInvoice(UILayer.Models.InvoiceViewModel model)
        {
            bool result = false;
            if (model.Id == 0)
                result = _invoiceService.CreateWithDetail(model);
            else
                result = _invoiceService.Update(model);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Detail(int id)
        {
            return View(_invoiceService.GetInvoiceForUpdate(id));  
        }

        public ActionResult DeleteInvoice(int id)
        {
           if(_invoiceService.DeleteInvioce(id))
            {
                return RedirectToAction("Index");
            }
            return RedirectToAction("Index");
        }
    }
}