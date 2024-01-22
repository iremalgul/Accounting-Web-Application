using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UILayer.Models;

namespace UILayer.Services.Interfaces
{
    public interface ICaseService
    {
        bool Create(CaseDto Case);
        bool Update(CaseDto Case);
        bool Delete(CaseDto Case);
        CaseDto GetById(int id);
        List<CaseDto> GetAll();

        bool AddCaseDetail(CaseDetailDto caseDetail);

        List<CaseDetailDto> GetAllDetails(DateTime date, int caseId);

        bool DeleteCaseDetail(int id);
    }
}
