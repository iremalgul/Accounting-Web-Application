using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UILayer.Services.Interfaces
{
    public interface IPaymentService
    {
        bool AddPaymentType(PaymentTypeDto paymentType);
        bool DeletePaymentType(PaymentTypeDto delete);
        List<PaymentTypeDto> GetAllTypes();
        List<PaymentDto> GetPayments(int firmId);
        PaymentTypeDto GetTypeById(int id);
        bool UpdatePaymentType(PaymentTypeDto edit);

        bool AddPayment(PaymentDto payment);
        bool DeletePayment(int id);
    }
}