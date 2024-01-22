using AutoMapper;
using DtoLayer.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UILayer.Models;

namespace UILayer.App_Start
{
    public class MappingProfile : Profile
    {
        protected override void Configure()
        {
            Mapper.CreateMap<User,UserDto>().ReverseMap();
            Mapper.CreateMap<Stock, StockDto>().ReverseMap();
            Mapper.CreateMap<Firm, FirmDto>().ReverseMap();
            Mapper.CreateMap<Invoice, InvoiceDto>().ReverseMap();
            Mapper.CreateMap<InvoiceDetail, InvoiceDetailDto>().ReverseMap();
            Mapper.CreateMap<Case, CaseDto>().ReverseMap();
            Mapper.CreateMap<CaseDetail, CaseDetailDto>().ReverseMap();
            Mapper.CreateMap<Payment, PaymentDto>().ReverseMap();
            Mapper.CreateMap<PaymentType, PaymentTypeDto>().ReverseMap();

        }
    }
}