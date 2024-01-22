using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UILayer.Models
{
    public class CaseViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<CaseDetailDto> Details { get; set; }
    }
}