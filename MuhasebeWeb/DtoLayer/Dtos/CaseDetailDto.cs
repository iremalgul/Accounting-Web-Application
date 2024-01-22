using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DtoLayer.Dtos
{
    public class CaseDetailDto
    {
        public int Id { get; set; }
        public System.DateTime ProcessDate { get; set; }
        public string ProcessDateStr { get; set; }
        public bool InOut { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public int CaseId { get; set; }

        public virtual CaseDto Case { get; set; }
        
    }
}
