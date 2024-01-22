using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UILayer.Services.Interfaces
{
    public interface IStockService
    {
        bool Create(StockDto stock);
        bool Update(StockDto stock);
        bool Delete(StockDto stock);
        List<StockDto> GetAll();
        StockDto GetById(int id);
    }
}
