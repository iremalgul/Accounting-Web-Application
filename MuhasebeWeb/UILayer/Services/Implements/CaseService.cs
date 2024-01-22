using AutoMapper;
using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UILayer.Models;
using UILayer.Services.Interfaces;

namespace UILayer.Services.Implements
{
    public class CaseService : ICaseService
    {
        public bool Create(CaseDto Case)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var entity = Mapper.Map<Case>(Case);
                muhasebeWebEntities.Case.Add(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool Update(CaseDto Case)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var data = muhasebeWebEntities.Case.FirstOrDefault(x => x.Id == Case.Id);
                var entity = Mapper.Map(Case, data);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool Delete(CaseDto Case)
        {

            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var data = muhasebeWebEntities.Case.FirstOrDefault(x => x.Id == Case.Id);
                var entity = Mapper.Map(Case, data);
                muhasebeWebEntities.Case.Remove(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public List<CaseDto> GetAll()
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Case.ToList();
            return Mapper.Map<List<CaseDto>>(entity);
        }

        public CaseDto GetById(int id)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Case.FirstOrDefault(x => x.Id == id);
            return Mapper.Map<CaseDto>(entity);
        }

        public bool AddCaseDetail(CaseDetailDto caseDetail)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var entity = Mapper.Map<CaseDetail>(caseDetail);
                entity.ProcessDate = entity.ProcessDate.Date;
                muhasebeWebEntities.CaseDetail.Add(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public List<CaseDetailDto> GetAllDetails(DateTime date,int caseId)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.CaseDetail.Where(x => x.ProcessDate == date.Date && x.CaseId==caseId).ToList();
            return Mapper.Map<List<CaseDetailDto>>(entity);
        }

        public bool DeleteCaseDetail(int id)
        {
            try
            {
                MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
                var delete = muhasebeWebEntities.CaseDetail.FirstOrDefault(x => x.Id == id);
                muhasebeWebEntities.CaseDetail.Remove(delete);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }
    }
}