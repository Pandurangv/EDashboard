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

        

    }
}