using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using UILayer.Models;

namespace UILayer
{
    public static class LoginHelper
    {
        public static bool Login(string username, string password)
        {
            MuhasebeMVCWebEntities muhasebeWebEntities = new MuhasebeMVCWebEntities();
            var user = muhasebeWebEntities.User.FirstOrDefault(x => x.UserName == username && x.Password == password);
            if (user != null)
            {
                HttpContext.Current.Session["user"] = user;

                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
