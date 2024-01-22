using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DtoLayer.Dtos
{
    public class StockDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal BuyAmount { get; set; }
        public decimal SellAmount { get; set; }
        public int Tax { get; set; }
        public string PictureUrl { get; set; }
        
    }
}
