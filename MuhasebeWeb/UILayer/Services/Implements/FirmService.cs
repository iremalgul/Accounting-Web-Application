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
    public class FirmService : IFirmService
    {
        public bool Create(FirmDto firm)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var entity = Mapper.Map<Firm>(firm);
                muhasebeWebEntities.Firm.Add(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool Update(FirmDto firm)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var data = muhasebeWebEntities.Firm.FirstOrDefault(x => x.Id == firm.Id);
                var entity = Mapper.Map(firm, data);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool Delete(FirmDto firm)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var data = muhasebeWebEntities.Firm.FirstOrDefault(x => x.Id == firm.Id);
                var entity = Mapper.Map(firm, data);
                muhasebeWebEntities.Firm.Remove(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public List<FirmDto> GetAll()
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Firm.ToList();
            return Mapper.Map<List<FirmDto>>(entity);
        }

        public FirmDto GetById(int id)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Firm.FirstOrDefault(x => x.Id == id);
            return Mapper.Map<FirmDto>(entity);
        }

        
    }
}