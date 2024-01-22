using DtoLayer.Dtos;
using ETicaretWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UILayer.Services.Implements;
using UILayer.Services.Interfaces;

namespace UILayer.Controllers
{
    [IsLogin]
    public class PaymentController : Controller
    {
        // GET: Payment
        
        private readonly IPaymentService _PaymentService;

        public PaymentController(IPaymentService PaymentService)
        {
            _PaymentService = PaymentService;
        }
        public ActionResult Index()
        {
            return View(_PaymentService.GetAllTypes());
        }

        public ActionResult CreateType(string Name)
        {
            PaymentTypeDto PaymentType = new PaymentTypeDto();
            PaymentType.Name = Name;

            var result = _PaymentService.AddPaymentType(PaymentType);
            if (result)
            {
                return RedirectToAction("Index");
            }
            else
                return RedirectToAction("Index");

        }


        public ActionResult UpdateTypeView(int id)
        {
            return View(_PaymentService.GetTypeById(id));

        }


        public ActionResult UpdateType(int PaymentTypeId, String Name)
        {
            var edit = _PaymentService.GetTypeById(PaymentTypeId);
            edit.Name = Name;

            var result = _PaymentService.UpdatePaymentType(edit);
            if (result)
            {
                return RedirectToAction("Index");
            }
            return RedirectToAction("Index");

        }

        public ActionResult DeleteType(int Id)
        {
            var delete = _PaymentService.GetTypeById(Id);
            if (_PaymentService.DeletePaymentType(delete))
            {
                return RedirectToAction("Index");
            }
            return RedirectToAction("Index");
        }


        public ActionResult Add()
        {
            return View();
        }
        public ActionResult AddPayment(PaymentDto model)
        {
            PaymentDto payment = new PaymentDto()
            {
                FirmId = model.FirmId,
                Amount = model.Amount,
                Date = Convert.ToDateTime(model.DateStr),
                PaymentType = model.PaymentType,
            };

            var result = _PaymentService.AddPayment(payment);
            if (result)
            {
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
            public ActionResult PartialGrid( int firmId)
        {
            return PartialView(_PaymentService.GetPayments(firmId));
        }

        public ActionResult DeletePayment(int id) {
            bool result = _PaymentService.DeletePayment(id);

            if (result)
            {
                return Json(new JsonModel(true, "silindi"), JsonRequestBehavior.AllowGet);
            }
            return Json(new JsonModel(false, "silinemedi"), JsonRequestBehavior.AllowGet);

        }




    }
}