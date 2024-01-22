using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UILayer.Services.Interfaces
{
    public interface IFirmService
    {
        bool Create(FirmDto firm);
        bool Update(FirmDto firm);
        bool Delete(FirmDto firm);
        List<FirmDto> GetAll();
        FirmDto GetById(int id);
    }
}