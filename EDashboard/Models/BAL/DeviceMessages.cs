using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EDashboard.Models.BAL
{
    public class HPDeviceDetails:Error
    {

        public string DeviceId { get; set; }


        public long MessageId { get; set; }

        public decimal BatteryStatus { get; set; }
        public decimal BatteryState { get; set; }
        public decimal BatteryVoltage { get; set; }
        public decimal BatteryCurrent { get; set; }


        public decimal BMSDischarge { get; set; }
        public decimal BMSCharge { get; set; }
        public decimal BMSFullCap { get; set; }
        public decimal BMSRemCap { get; set; }
        public decimal BMSMaxVol { get; set; }
        public decimal BMSMinVol { get; set; }
        public decimal BMSMaxTemp { get; set; }
        public decimal BMSMinTemp { get; set; }
        public decimal BMSMOTemp { get; set; }
        public decimal ChargerStatus { get; set; }
        public decimal ChargerCurrent { get; set; }
        public decimal ChargerVolt { get; set; }
        public decimal Mode { get; set; }
        public decimal PowerStage { get; set; }
        public decimal KillSwitch { get; set; }
        public decimal Reverse { get; set; }
        public decimal Throttle { get; set; }
        public decimal Speed { get; set; }
        public decimal StartAssist { get; set; }
        public decimal Errors { get; set; }
        public decimal Reserved { get; set; }
        public decimal HMIMIL { get; set; }
        public decimal CurrDC { get; set; }
        public decimal VoltDC { get; set; }
        public decimal MotorTemp { get; set; }
        public decimal ControllerTemp { get; set; }
        public long NotificationId { get; set; }
        public DateTime CreatedDate { get; set; }

    }
    public class DeviceMessages :Error
    {
        public string DeviceId { get; set; }
        public Int64 MessageId { get; set; }
        public Double CellMinVoltage { get; set; }
        public Double CellMaxVoltage { get; set; }
        public Double PackExtLoad { get; set; }
        public Double PackSumCells { get; set; }
        public Double PackIMaster { get; set; }
        public Double PackSoCInternal { get; set; }
        public Double SoH { get; set; }
        public Double Status { get; set; }
        public Double AuxT1 { get; set; }
        public Double AuxT2 { get; set; }
        public Double AuxT3 { get; set; }
        public Double AuxT4 { get; set; }
        public Double AuxT5 { get; set; }
        public Double AuxT6 { get; set; }
        public Double CMU1CellV1 { get; set; }
        public Double CMU1CellV2 { get; set; }
        public Double CMU1CellV3 { get; set; }
        public Double CMU1CellV4 { get; set; }
        public Double CMU1CellV5 { get; set; }
        public Double CMU1CellV6 { get; set; }
        public Double CMU1CellV7 { get; set; }
        public Double CMU1CellV8 { get; set; }
        public Double CMU1CellV9 { get; set; }
        public Double CMU1CellV10 { get; set; }
        public Double CMU1CellV11 { get; set; }
        public Double CMU1CellV12 { get; set; }
        public Double CMU2CellV1 { get; set; }
        public Double CMU2CellV2 { get; set; }
        public Double CMU2CellV3 { get; set; }
        public Double CMU2CellV4 { get; set; }
        public Double CMU2CellV5 { get; set; }
        public Double CMU2CellV6 { get; set; }
        public Double CMU2CellV7 { get; set; }
        public Double CMU2CellV8 { get; set; }
        public Double CMU2CellV9 { get; set; }
        public Double CMU2CellV10 { get; set; }
        public Double CMU2CellV11 { get; set; }
        public Double CMU2CellV12 { get; set; }
        public DateTime NotificationDate { get; set; }
        public int DeviceRegId { get; set; }

    }


    public class NotificationCountModel
    {
        public int TotalDevices { get; set; }
        public int ActiveDevices { get; set; }
        public int TotalNotifications { get; set; }
        public int TodaysNotification { get; set; }

    }

    public class Device : Error
    {
        public int DeviceRegId { get; set; }

        public string DeviceId { get; set; }

        public string DeviceName { get; set; }

        public string IOTConnectionString { get; set; }
        public string IOTConnectionString1 { get; set; }
        public string IOTConnectionString2 { get; set; }
        public string IOTConnectionString3 { get; set; }

        public bool? IsDelete { get; set; }

        public DateTime? CreatedDate { get; set; }
    }
}