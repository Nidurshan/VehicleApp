using VehicleApp.API.Models;

namespace VehicleApp.API.Interfaces
{
    public interface IVehiclesRepository
    {
        List<Vehicle> GetAll();

        Vehicle GetById(Guid id);
        
        Guid Create(Vehicle vehicle);

        Guid Update(Vehicle vehicle);

        Guid Delete(Guid id);
    }
}
