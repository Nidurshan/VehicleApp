using VehicleApp.API.Data;
using VehicleApp.API.Interfaces;
using VehicleApp.API.Models;

namespace VehicleApp.API.Services
{
    public class VehiclesRepository : IVehiclesRepository
    {
        private static List<Vehicle> vehicles = Database.Vehicles;
        private static List<Document> documents = Database.Documents;

        private readonly IDocumentsRepository _documentsRepository;

        public VehiclesRepository(IDocumentsRepository documentsRepository)
        {
            _documentsRepository = documentsRepository;
        }

        public List<Vehicle> GetAll()
        {
            foreach(var vehicle in vehicles)
            {
                vehicle.Documents = _documentsRepository.GetDocumentsByVehicleId(vehicle.Id);
            }
            return vehicles;
        }

        public Vehicle GetById(Guid id)
        {
            var vehicle = vehicles.Single(c => c.Id == id);
            vehicle.Documents = _documentsRepository.GetDocumentsByVehicleId(vehicle.Id);
            return vehicle;
        }

        public Guid Create(Vehicle vehicle)
        {
            vehicles.Add(vehicle);
            return vehicle.Id;
        }

        public Guid Update(Vehicle vehicle)
        {
            var existingVehicle = vehicles.Single(v => v.Id == vehicle.Id);

            existingVehicle.Model = vehicle.Model;
            existingVehicle.Number = vehicle.Number;
            existingVehicle.Type = vehicle.Type;

            existingVehicle.Documents = vehicle.Documents;

            return existingVehicle.Id;
        }

        public Guid Delete(Guid id)
        {
            var existingVehicle = GetById(id);
            vehicles.Remove(existingVehicle);
            return existingVehicle.Id;
        }
    }
}
