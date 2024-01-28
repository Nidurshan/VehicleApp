using System.Data.SqlClient;

namespace VehicleApp.API.Models
{
    public class Vehicle
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Model { get; set; }
        public string Number { get; set; }
        public string Type { get; set; }

        public List<Document> Documents { get; set; }


        public Vehicle()
        {
            
        }

        public Vehicle(string model, string number, string type, List<Document> documents)
        {
            Model = model;
            Number = number; 
            Type = type;
            Documents = documents;
        }
    }
}
