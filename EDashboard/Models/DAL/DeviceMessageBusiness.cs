using EDashboard.Models.BAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace EDashboard.Models.DAL
{
    public class DeviceMessageBusiness
    {
        SettingsHelper objHelper = SettingsHelper.Instance;
        public List<HPDeviceDetails> GetAllMessages(HPDeviceDetails model)
        {
            List<SqlParameter> lst = new List<SqlParameter>();
            lst.Add(new SqlParameter() { ParameterName="@PageNo", Value=model.PageNo});
            lst.Add(new SqlParameter() { ParameterName = "@PageSize", Value = model.PageSize });
            DataTable dt = objHelper.GetDataTable("Get_MessageList",lst);
            return dt.ToList<HPDeviceDetails>();
        }

        public List<NotificationCountModel> GetNotificationCount()
        {
            DataTable dt = objHelper.GetDataTable("NotificationCount");
            return dt.ToList<NotificationCountModel>();
        }
    }
}