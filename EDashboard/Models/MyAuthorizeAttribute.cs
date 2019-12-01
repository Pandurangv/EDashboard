using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EDashboard.Models
{
    public class MyAuthorizeAttribute : ActionFilterAttribute
    {

        public bool IsAdmin { get; set; }

        public bool IsAgent { get; set; }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.HttpContext.Request.IsAjaxRequest())
            {
                if (SessionManager.Instance.LoginUser == null)
                {
                    Error error = new Error();
                    error.ResponseStatus = 2;
                    filterContext.Result = new JsonResult
                    {
                        Data = error,
                        JsonRequestBehavior = JsonRequestBehavior.AllowGet
                    };
                }
                else
                {
                    return;
                }
            }
            else
            {
                if (SessionManager.Instance.LoginUser==null)
                {
                    filterContext.HttpContext.Response.Cookies.Clear();
                    var redirectTarget = new System.Web.Routing.RouteValueDictionary(new { action = "Index", controller = "Home", area = "" });
                    filterContext.Result = new RedirectToRouteResult(redirectTarget);
                }
                else
                {
                    return;
                }
            }
            
        }

        public bool ValidateAuthToken(string authtoken)
        {
            bool valid = false;
            //AccountBusiness objAuth = new AccountBusiness();
            //valid=objAuth.ValidateToken(authtoken);
            valid = true;
            return valid;
        }
    }
}