using Cars.API.Controllers;
using Microsoft.AspNetCore.Mvc.Formatters;
using VehicleApp.API.Models;

namespace VehicleApp.API.Data
{
    public static class Database
    {
        public static List<Vehicle> Vehicles { get; set; } = new()
        {
            new Vehicle("Volvo", "TN9945", "Van", new List<Document>()),
            new Vehicle("Tesla", "FT5049", "Truck", new List<Document>())
        };

        public static List<Document> Documents { get; set; } = new()
        {
            new Document(DocumentTypes.VehicleLicense, null, Vehicles[0].Id, new DateTimeOffset(new DateTime(2023, 12, 30))),
            new Document(DocumentTypes.VehicleInsurance, null, Vehicles[0].Id, new DateTimeOffset(new DateTime(2024, 12, 30))),
            new Document(DocumentTypes.EmissionCertificate, null, Vehicles[0].Id, new DateTimeOffset(new DateTime(2024, 12, 30))),
            new Document(DocumentTypes.VehicleLicense, null, Vehicles[1].Id, new DateTimeOffset(new DateTime(2024, 12, 30)))
        };
    }
}
