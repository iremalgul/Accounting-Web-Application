using Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UILayer.Services.Interfaces;

namespace UILayer.Controllers
{
    public class IsLogin : ActionFilterAttribute
    {
        

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (HttpContext.Current.Session["user"] == null)
            {
                var userName = CookieHelper.GetCookie(filterContext.HttpContext.Request, Constants.COOKIEUSERNAME);
                var password = CookieHelper.GetCookie(filterContext.HttpContext.Request, Constants.COOKIEPASSWORD);

                if (userName == null || password == null)
                {
                    filterContext.Result = new RedirectResult("~/Auth/Index");
                    return;
                }
                else
                {
                    bool isLogin = LoginHelper.Login(userName, password);
                    if (isLogin)
                    {
                        HttpContext.Current.Session["user"] = isLogin;
                        base.OnActionExecuting(filterContext);
                        return;
                    }
                    else
                    {
                        filterContext.Result = new RedirectResult("~/Auth/Index");
                        return;
                    }
                }

            }
            base.OnActionExecuting(filterContext);
        }
    }
}