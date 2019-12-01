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

        public LoginViewModel LoginUser(LoginViewModel model)
        {
            List<SqlParameter> lst = new List<SqlParameter>();
            lst.Add(new SqlParameter() { ParameterName = "@Email", Value = model.Email });
            lst.Add(new SqlParameter() { ParameterName = "@Password", Value = model.Password });
            DataTable dt = objHelper.GetDataTable("LoginUser", lst);
            var lstUser =dt.ToList<LoginViewModel>();
            return lstUser[0];
        }

        public List<HPDeviceDetails> GetAllMessages(HPDeviceDetails model)
        {
            List<SqlParameter> lst = new List<SqlParameter>();
            lst.Add(new SqlParameter() { ParameterName="@PageNo", Value=model.PageNo});
            lst.Add(new SqlParameter() { ParameterName = "@PageSize", Value = model.PageSize });
            DataTable dt = objHelper.GetDataTable("Get_MessageList",lst);
            return dt.ToList<HPDeviceDetails>();
        }

        public int InsertDevice(Device model)
        {
            int deviceregid = 0;
            try
            {
                List<SqlParameter> lst = new List<SqlParameter>();
                lst.Add(new SqlParameter() { ParameterName = "@DeviceId", Value = model.DeviceId });
                lst.Add(new SqlParameter() { ParameterName = "@DeviceName", Value = model.DeviceName });
                lst.Add(new SqlParameter() { ParameterName = "@IOTConnectionString", Value = "1" });
                lst.Add(new SqlParameter() { ParameterName = "@IOTConnectionString1", Value = "2" });
                lst.Add(new SqlParameter() { ParameterName = "@IOTConnectionString2", Value = "3" });
                lst.Add(new SqlParameter() { ParameterName = "@IOTConnectionString3", Value = "4" });
                DataTable dt = objHelper.GetDataTable("InsertDevice", lst);
                deviceregid= Convert.ToInt32(dt.Rows[0][0]);
            }
            catch (Exception ex)
            {

            }
            return deviceregid;
        }


        public List<Device> Get_DeviceList(Device model)
        {
            DataTable dt = new DataTable();
            List<SqlParameter> lst = new List<SqlParameter>();
            if (model.PageNo>0)
            {
                lst.Add(new SqlParameter() { ParameterName = "@PageNo", Value = model.PageNo });
            }
            if (model.PageSize>0)
            {
                lst.Add(new SqlParameter() { ParameterName = "@PageSize", Value = model.PageSize });
            }
            if (model.PageSize>0 && model.PageNo>0)
            {
                dt = objHelper.GetDataTable("Get_DeviceList", lst);
            }
            else
            {
                dt = objHelper.GetDataTable("Get_DeviceList");
            }
            return dt.ToList<Device>();
        }


        public List<NotificationCountModel> GetNotificationCount()
        {
            DataTable dt = objHelper.GetDataTable("NotificationCount");
            return dt.ToList<NotificationCountModel>();
        }
    }
}