using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ETicaretWeb.Models
{
    public class JsonModel
    {
            
        public JsonModel( bool isSuccess,string message)
        {
            this.isSuccess = isSuccess;
            this.Message = message;
        }
        public bool isSuccess { get; set; }
        public string Message { get; set; }
    }
}