using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EDashboard.Startup))]
namespace EDashboard
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
