using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UILayer.Controllers
{
    [IsLogin]
    public class PartialsController : Controller
    {
        // GET: Partials
        public PartialViewResult LeftMenu()
        {
            return PartialView();
        }
    }
}