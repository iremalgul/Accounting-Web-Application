using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UILayer.Models;

namespace UILayer.Services.Interfaces
{
    public interface IInvoiceService
    {
        List<InvoiceDto> GetAll();
        bool CreateWithDetail(InvoiceViewModel model);
        bool Update(InvoiceViewModel model);
        InvoiceViewModel GetInvoiceForUpdate(int invioceId);
        bool DeleteInvoiceRow(int id);
        int AddInvoiceRow(InvoiceDetailDto model);
        List<InvoiceDetailDto> GetInvoiceDetail(int id);

        bool DeleteInvioce(int id); 
    }
}