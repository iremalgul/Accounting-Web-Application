//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace UILayer.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class CaseDetail
    {
        public int Id { get; set; }
        public System.DateTime ProcessDate { get; set; }
        public bool InOut { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public int CaseId { get; set; }
    
        public virtual Case Case { get; set; }
    }
}