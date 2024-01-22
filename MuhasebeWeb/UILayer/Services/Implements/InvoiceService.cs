using AutoMapper;
using DtoLayer.Dtos;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UILayer.Models;
using UILayer.Services.Interfaces;
using static Unity.Storage.RegistrationSet;

namespace UILayer.Services.Implements
{
    public class InvoiceService : IInvoiceService
    {
        

        public bool CreateWithDetail(InvoiceViewModel model)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                Invoice ınvoice = new Invoice()
                {
                    Number = model.Number,
                    FirmId = model.FirmId,
                    InvoiceDate = Convert.ToDateTime(model.InvoiceDate),
                };
                muhasebeWebEntities.Invoice.Add(ınvoice);
                foreach (var row in model.Details)
                {
                    InvoiceDetail detail = new InvoiceDetail
                    {
                        InvoiceId = ınvoice.Id,
                        StockId = row.StockId,
                        Amount = row.Amount,
                        Count = row.Count,
                        Tax = row.Tax,
                        TotalAmount = row.TotalAmount,
                    };
                    muhasebeWebEntities.InvoiceDetail.Add(detail);
                }

                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        

        public List<DtoLayer.Dtos.InvoiceDto> GetAll()
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Invoice.ToList();
            return Mapper.Map<List<DtoLayer.Dtos.InvoiceDto>>(entity);
        }

        public InvoiceViewModel GetInvoiceForUpdate(int invioceId)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Invoice.FirstOrDefault(x => x.Id == invioceId);
           
            InvoiceViewModel model = new InvoiceViewModel();
            model.Id = invioceId;
            //2008-05-13T22:33:00
            model.InvoiceDate = entity.InvoiceDate.ToString("yyyy-MM-ddTHH:mm");
            model.Number = entity.Number;
            model.FirmId = entity.FirmId;
            model.Details = new List<InvoiceDetailDto>();
            foreach (var row in entity.InvoiceDetail.ToList())
            {
                model.Details.Add(new InvoiceDetailDto{
                    Id = row.Id,
                    StockId = row.StockId,
                    Count = row.Count,
                    Amount = row.Amount,
                    Tax = row.Tax,
                    TotalAmount = row.TotalAmount,
                    InvoiceId = row.InvoiceId,
                });
            }


            return model;
        }
        public int AddInvoiceRow(InvoiceDetailDto model)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = Mapper.Map<InvoiceDetail>(model);
            muhasebeWebEntities.InvoiceDetail.Add(entity);
            muhasebeWebEntities.SaveChanges();
            return entity.Id;
        }
        public bool DeleteInvoiceRow(int id)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var detail = muhasebeWebEntities.InvoiceDetail.FirstOrDefault(x => x.Id == id);
            muhasebeWebEntities.InvoiceDetail.Remove(detail);
            int affected = muhasebeWebEntities.SaveChanges();
            return affected > 0;
            
        }

        public bool Update(InvoiceViewModel model)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var detail = muhasebeWebEntities.Invoice.FirstOrDefault(x => x.Id == model.Id);
            detail.InvoiceDate = Convert.ToDateTime(model.InvoiceDate);
            detail.Number = model.Number;
            detail.FirmId = model.FirmId;
            return muhasebeWebEntities.SaveChanges() > 0;
                    
        }

        public List<InvoiceDetailDto> GetInvoiceDetail(int id)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var details = muhasebeWebEntities.InvoiceDetail.Where(x => x.InvoiceId == id).ToList();

            return Mapper.Map<List<DtoLayer.Dtos.InvoiceDetailDto>>(details);

        }

        public bool DeleteInvioce(int id)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var invoice = muhasebeWebEntities.Invoice.FirstOrDefault(x => x.Id == id);
            var details =muhasebeWebEntities.InvoiceDetail.Where(x => x.InvoiceId == id).ToList();
            foreach (var item in details)
            {
                muhasebeWebEntities.InvoiceDetail.Remove(item);
                muhasebeWebEntities.SaveChanges();
            }
           
            muhasebeWebEntities.Invoice.Remove(invoice);
            muhasebeWebEntities.SaveChanges();
            return true;
        }
    }
}