using DtoLayer.Dtos;
using ETicaretWeb.Models;
using Helpers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UILayer.Services.Implements;
using UILayer.Services.Interfaces;

namespace UILayer.Controllers
{
    [IsLogin]
    public class FirmController : Controller
    {
        // GET: Firm

        private readonly IFirmService _firmService;

        public FirmController(IFirmService firmService)
        {
            _firmService = firmService;
        }

        public ActionResult Index()
        {
            return View(_firmService.GetAll());
        }
        public ActionResult TablePartial()
        {
            return PartialView(_firmService.GetAll());
        }
        public ActionResult Create()
        {
            return View();
        }
        public ActionResult Update(int id)
        {
            return View(_firmService.GetById(id));
        }
        public ActionResult Insert(string Name, string Adress, string Phone, string IdentityNumber)
        {
            FirmDto firmDto = new FirmDto();
            firmDto.Name = Name;
            firmDto.Phone = Phone;
            firmDto.Adress = Adress;
            firmDto.IdentityNumber = IdentityNumber;

            var saveResult = _firmService.Create(firmDto);
            if (saveResult)
            {
                return RedirectToAction("Index");
            }
            return View("Create");
        }

        public ActionResult Edit(int FirmId, string Name, string Adress, string Phone, string IdentityNumber)
        {
           
            var editFirm = _firmService.GetById(FirmId);
            editFirm.Name = Name;
            editFirm.Adress = Adress;
            editFirm.Phone = Phone;
            editFirm.IdentityNumber = IdentityNumber;
           
            bool result = _firmService.Update(editFirm);
            if (result)
            {
                return RedirectToAction("Index");
            }
            return View("Update");

        }
        public ActionResult Delete(int id)
        {
            var deleteFirm = _firmService.GetById(id);
            bool result = _firmService.Delete(deleteFirm);
            if (result)
            {
                return Json(new JsonModel(true, "silindi"), JsonRequestBehavior.AllowGet);
            }
            return Json(new JsonModel(false, "silinemedi"), JsonRequestBehavior.AllowGet);

        }

    }
}