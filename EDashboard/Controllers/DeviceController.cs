using EDashboard.Models;
using EDashboard.Models.BAL;
using EDashboard.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EDashboard.Controllers
{
    public class DeviceController : Controller
    {
        // GET: Device
        [MyAuthorize]
        public ActionResult Index()
        {
            return View();
        }

        DeviceMessageBusiness objMsg = new DeviceMessageBusiness();
        public ActionResult DeviceMessges(HPDeviceDetails model)
        {
            return Json(objMsg.GetAllMessages(model));
        }

        public ActionResult GetNotificationCount(HPDeviceDetails model)
        {
            return Json(objMsg.GetNotificationCount());
        }
    }
}