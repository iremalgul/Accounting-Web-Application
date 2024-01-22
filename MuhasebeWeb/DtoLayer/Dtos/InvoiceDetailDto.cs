using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DtoLayer.Dtos
{
    public class InvoiceDetailDto
    {
        public int Id { get; set; }
        public int StockId { get; set; }
        public int Count { get; set; }
        public decimal Amount { get; set; }
        public int Tax { get; set; }
        public decimal TotalAmount { get; set; }
        public int InvoiceId { get; set; }

    }
}
