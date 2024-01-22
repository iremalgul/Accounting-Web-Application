using DtoLayer.Dtos;
using ETicaretWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UILayer.Models;
using UILayer.Services.Implements;
using UILayer.Services.Interfaces;

namespace UILayer.Controllers
{
    [IsLogin]
    public class CaseController : Controller
    {

        private readonly ICaseService _CaseService;

        public CaseController(ICaseService CaseService)
        {
            _CaseService = CaseService;
        }
        public ActionResult Index()
        {
            return View(_CaseService.GetAll());
        }

        public ActionResult Create(string Name)
        {
            CaseDto caseDto = new CaseDto();
            caseDto.Name = Name;

            var result = _CaseService.Create(caseDto);
            if (result)
            {
                return RedirectToAction("Index");
            }
            else
                return RedirectToAction("Index");

        }


        public ActionResult Update(int id)
        {
            return View(_CaseService.GetById(id));

        }

        public ActionResult Updatecase(int CaseId, String Name)
        {
            var editCase = _CaseService.GetById(CaseId);
            editCase.Name = Name;

            var result = _CaseService.Update(editCase);
            if (result)
            {
                return RedirectToAction("Index");
            }
            return RedirectToAction("Index");

        }

        public ActionResult Delete(int Id)
        {
            var deleteCase = _CaseService.GetById(Id);
            if (_CaseService.Delete(deleteCase))
            {
                return RedirectToAction("Index");
            }
            return RedirectToAction("Index");
        }

        public ActionResult CaseDetail(int? caseId)
        {
            return View();

        }

        public ActionResult AddCaseDetail(CaseDetailDto model)
        {
            CaseDetailDto caseDetailDto = new CaseDetailDto()
            {
                CaseId = model.CaseId,
                ProcessDate = Convert.ToDateTime(model.ProcessDateStr),
                Amount = model.Amount,
                InOut = model.InOut,
                Description = model.Description
            };

            var result = _CaseService.AddCaseDetail(caseDetailDto);
            if (result)
            {
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            return Json(result, JsonRequestBehavior.AllowGet);

        }
       

        public ActionResult PartialGrid(String date, int caseId)
        {
            DateTime date2 = Convert.ToDateTime(date);
            return PartialView(_CaseService.GetAllDetails(date2, caseId));
        }


        public ActionResult DeleteCaseDetail(int id)
        {

            bool result = _CaseService.DeleteCaseDetail(id);

            if (result)
            {
                return Json(new JsonModel(true, "silindi"), JsonRequestBehavior.AllowGet);
            }
            return Json(new JsonModel(false, "silinemedi"), JsonRequestBehavior.AllowGet);

        }
    }
}