using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UILayer.Models
{
    public class InvoiceViewModel
    {
        public int Id { get; set; }
        public string InvoiceDate { get; set; }
        public string Number { get; set; }
        public int FirmId { get; set; }
        public List<InvoiceDetailDto> Details { get; set; }
    }
}