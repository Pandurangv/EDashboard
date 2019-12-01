using EDashboard.Models.BAL;
using EDashboard.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EDashboard.Controllers
{
    public class DeviceRegistrationController : Controller
    {
        // GET: DeviceRegistration
        public ActionResult Index()
        {
            return View();
        }

        DeviceMessageBusiness objMsg = new DeviceMessageBusiness();
        public ActionResult GetDeviceList(Device model)
        {
            return Json(objMsg.Get_DeviceList(model));
        }

        public ActionResult InsertDevice(Device model)
        {
            return Json(objMsg.InsertDevice(model));
        }
    }
}