using Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;
using UILayer.Services.Interfaces;

namespace UILayer.Controllers
{
    public class AuthController : Controller
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Login(string username,string password, string remember)
        {
            var sifreli = PasswordHelper.Encrypt(password);
            var result = _userService.Login(username, sifreli);
            if (result != null)
            {
                if (remember == "on")
                {
                    CookieHelper.CreateCookie(this.Response, Constants.COOKIEUSERNAME, username);
                    CookieHelper.CreateCookie(this.Response, Constants.COOKIEPASSWORD, sifreli);
                    return RedirectToAction("Index", "Home");
                }
                //giriş tamam
            }
            return View("Index");
        }
    }
}