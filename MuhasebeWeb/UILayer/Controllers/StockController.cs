using DtoLayer.Dtos;
using ETicaretWeb.Models;
using Helpers;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;
using UILayer.Models;
using UILayer.Services.Interfaces;

namespace UILayer.Controllers
{
    [IsLogin]
    public class StockController : Controller
    {
        private readonly IStockService _stockService;

        public StockController(IStockService stockService)
        {
            _stockService = stockService;
        }

        public ActionResult Index()
        {
            return View(_stockService.GetAll());
        }
        public ActionResult Create()
        {
            return View();
        }
        public ActionResult Update(int id)
        {
            return View(_stockService.GetById(id));
        }
        public ActionResult Insert(string Name, string BuyAmount, string SellAmount, int Tax, HttpPostedFileBase File)
        {
            StockDto stockDto = new StockDto();
            stockDto.Name = Name;
            stockDto.BuyAmount = GlobalHelper.StringToDecimal(BuyAmount);
            stockDto.SellAmount = GlobalHelper.StringToDecimal(SellAmount);
            stockDto.Tax = Tax;
            if (File != null)
            {
                string yuklemeYeri = null;
                string dosyaYolu = Path.GetFileName(File.FileName);
                yuklemeYeri = Path.Combine(Server.MapPath("~/Pictures"), dosyaYolu);
                File.SaveAs(yuklemeYeri);
                stockDto.PictureUrl = File.FileName;
            }
            var saveResult = _stockService.Create(stockDto);
            if (saveResult)
            {
                return RedirectToAction("Index");
            }
            return View("Create");
        }

        public ActionResult Edit (int StockId,string Name, string BuyAmount, string SellAmount, int Tax, HttpPostedFileBase File)
        {
            // id den stockdtoyu bul
            var editStock = _stockService.GetById(StockId); 
            editStock.Name = Name;
            editStock.BuyAmount = GlobalHelper.StringToDecimal(BuyAmount);
            editStock.SellAmount = GlobalHelper.StringToDecimal(SellAmount);
            editStock.Tax = Tax;

            //resim yükle
           
            if (File != null)
            {
                string yuklemeYeri = null;
                string dosyaYolu = Path.GetFileName(File.FileName);
                yuklemeYeri = Path.Combine(Server.MapPath("~/Pictures"), dosyaYolu);
                File.SaveAs(yuklemeYeri);
                editStock.PictureUrl = File.FileName;
            }

            bool result= _stockService.Update(editStock);
            if (result)
            {
                return RedirectToAction("Index");
            }
            return View("Update");
            
        }
        public ActionResult Delete(int id)
        {
            var deleteStock = _stockService.GetById(id);
            bool result = _stockService.Delete(deleteStock);
            if (result)
            {
                return Json(new JsonModel(true, "silindi"), JsonRequestBehavior.AllowGet);
            }
            return Json(new JsonModel(false, "silinemedi"), JsonRequestBehavior.AllowGet);

        }

        public ActionResult TablePArtial() 
        {
            return PartialView(_stockService.GetAll());
        }
    }
}