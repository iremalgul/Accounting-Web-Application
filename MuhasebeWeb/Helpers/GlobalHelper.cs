using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Helpers
{
    public static class GlobalHelper
    {
        public static decimal StringToDecimal(string cost)
        {
            decimal tutar;
            decimal.TryParse(cost.Replace(",", "").Replace('.', ','), out tutar);
            return tutar;
        }
    }
}
