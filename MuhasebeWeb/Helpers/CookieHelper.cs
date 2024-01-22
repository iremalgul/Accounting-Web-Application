using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Helpers
{
    public static class CookieHelper
    {                   
        public static void CreateCookie(HttpResponseBase res,string name, string value)
        {
            HttpCookie cookieVisitor = new HttpCookie(name, value);
            // cookieVisitor.Expires = DateTime.Now.AddDays(2);
            res.Cookies.Add(cookieVisitor);
        }
        public static string GetCookie(HttpRequestBase req,string name)
        {
            //Böyle bir cookie mevcut mu kontrol ediyoruz
            if (req.Cookies.AllKeys.Contains(name))
            {
                //böyle bir cookie varsa bize geri değeri döndürsün
                return req.Cookies[name].Value;
            }
            return null;
        }
        public static void DeleteCookie(HttpResponseBase res,HttpRequestBase req,string name)
        {
            //Böyle bir cookie var mı kontrol ediyoruz
            if (GetCookie(req,name) != null)
            {
                //Varsa cookiemizi temizliyoruz
                res.Cookies.Remove(name);
                //ya da 
                res.Cookies[name].Expires = DateTime.Now.AddDays(-1);
            }
        }
    }
}