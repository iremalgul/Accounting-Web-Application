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
    public class StockService : IStockService
    {
        public bool Create(StockDto stock)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var entity = Mapper.Map<Stock>(stock);
                muhasebeWebEntities.Stock.Add(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool Update(StockDto stock)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var data = muhasebeWebEntities.Stock.FirstOrDefault(x => x.Id == stock.Id);
                var entity = Mapper.Map(stock, data);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool Delete(StockDto stock)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var data = muhasebeWebEntities.Stock.FirstOrDefault(x => x.Id == stock.Id);
                var entity = Mapper.Map(stock, data);
                muhasebeWebEntities.Stock.Remove(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public List<StockDto> GetAll()
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Stock.ToList();
            return Mapper.Map<List <StockDto>>(entity);
        }

        public StockDto GetById(int id)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Stock.FirstOrDefault(x => x.Id == id);
            return Mapper.Map<StockDto>(entity);
        }

       
    }
}