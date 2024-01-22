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
    public class PaymentService : IPaymentService
    {
        public bool AddPayment(PaymentDto payment)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var entity = Mapper.Map<Payment>(payment);
                muhasebeWebEntities.Payment.Add(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool AddPaymentType(PaymentTypeDto paymentType)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var entity = Mapper.Map<PaymentType>(paymentType);
                muhasebeWebEntities.PaymentType.Add(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeletePayment(int id)
        {
            try
            {
                MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
                var delete = muhasebeWebEntities.Payment.FirstOrDefault(x => x.Id == id);
                muhasebeWebEntities.Payment.Remove(delete);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeletePaymentType(PaymentTypeDto delete)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var data = muhasebeWebEntities.PaymentType.FirstOrDefault(x => x.Id == delete.Id);
                var entity = Mapper.Map(delete, data);
                muhasebeWebEntities.PaymentType.Remove(entity);
                muhasebeWebEntities.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public List<PaymentTypeDto> GetAllTypes()
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.PaymentType.ToList();
            return Mapper.Map<List<PaymentTypeDto>>(entity);
        }

        public List<PaymentDto> GetPayments(int firmId)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.Payment.Where(x => x.FirmId == firmId).ToList();
            return Mapper.Map<List<PaymentDto>>(entity);
        }

        public PaymentTypeDto GetTypeById(int id)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var entity = muhasebeWebEntities.PaymentType.FirstOrDefault(x => x.Id == id);
            return Mapper.Map<PaymentTypeDto>(entity);
        }

        public bool UpdatePaymentType(PaymentTypeDto edit)
        {

            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            try
            {
                var data = muhasebeWebEntities.PaymentType.FirstOrDefault(x => x.Id == edit.Id);
                var entity = Mapper.Map(edit, data);
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