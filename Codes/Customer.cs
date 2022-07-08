using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SerializableDemo
{
    [Serializable]
    class Customer
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String ContactNo { get; set; }
        public String Email { get; set; }
    }
}
