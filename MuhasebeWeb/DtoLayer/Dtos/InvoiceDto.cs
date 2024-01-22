using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DtoLayer.Dtos
{
    public class InvoiceDto
    {
        public int Id { get; set; }
        public System.DateTime InvoiceDate { get; set; }
        public string Number { get; set; }
        public int FirmId { get; set; }

        public virtual FirmDto Firm { get; set; }
     
    }
}
