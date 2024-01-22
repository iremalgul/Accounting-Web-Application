using AutoMapper;
using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using UILayer.Models;

namespace UILayer
{
    public static class HtmlHelpers
    {
        public static List<FirmDto> GetAllFirms(this HtmlHelper helper)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Firm.ToList();
            return Mapper.Map<List<FirmDto>>(entity);

        }
        public static List<PaymentTypeDto> GetAllPaymentTypes(this HtmlHelper helper)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.PaymentType.ToList();
            return Mapper.Map<List<PaymentTypeDto>>(entity);

        }
        public static List<StockDto> GetAllStocks(this HtmlHelper helper)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Stock.ToList();
            return Mapper.Map<List<StockDto>>(entity);

        }
        public static StockDto GetStock(this HtmlHelper helper,int stokId)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Stock.FirstOrDefault(x=>x.Id == stokId);
            return Mapper.Map<StockDto>(entity);

        }
        public static List<CaseDto> GetAllCases(this HtmlHelper helper)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Case.ToList();
            return Mapper.Map<List<CaseDto>>(entity);

        }
    }
}
