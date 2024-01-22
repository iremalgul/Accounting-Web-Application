using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DtoLayer.Dtos
{
    public class PaymentDto
    {
        public int Id { get; set; }
        public int FirmId { get; set; }
        public decimal Amount { get; set; }
        public System.DateTime Date { get; set; }
        public string DateStr { get; set; }
        public int PaymentType { get; set; }

        public virtual FirmDto Firm { get; set; }
        public virtual PaymentTypeDto PaymentType1 { get; set; }

    }
}
