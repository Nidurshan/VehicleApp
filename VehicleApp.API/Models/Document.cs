namespace VehicleApp.API.Models
{
    public class Document
    {

        public Guid Id { get; set; } = Guid.NewGuid();
        public string Type { get; set; } = null!;
        public string Description { get; set; } = null!;
        public Guid VehicleId { get; set; }
        public Vehicle? Vehicle { get; set; }
        public DateTimeOffset ExpiryDate { get; set; }
        public bool IsValid => ExpiryDate >= DateTimeOffset.UtcNow;

        public Document()
        {

        }

        public Document(string type, string description, Guid vehicleId, DateTimeOffset expiryDate)
        {
            Type = type;
            Description = description ?? $"This is a {Type}";
            VehicleId = vehicleId;
            ExpiryDate = expiryDate;
        }
    }
}
