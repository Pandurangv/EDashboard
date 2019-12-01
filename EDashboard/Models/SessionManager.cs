using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EDashboard.Models
{
    public class SessionManager
    {
        static SessionManager _Instance = null;
        private SessionManager()
        {

        }

        public static SessionManager Instance
        {
            get
            {
                if (_Instance == null)
                {
                    _Instance = new SessionManager();
                }
                return _Instance;
            }
        }


        public LoginViewModel LoginUser
        {
            get
            {
                LoginViewModel emp = null;
                if (HttpContext.Current.Session["AuthUser"] != null)
                {
                    emp = (LoginViewModel)HttpContext.Current.Session["AuthUser"];
                }
                return emp;
            }
            set
            {
                HttpContext.Current.Session["AuthUser"] = value;
            }
        }


    }

    
}