using Microsoft.AspNetCore.Mvc;
using VehicleApp.API.Interfaces;
using VehicleApp.API.Models;

namespace Cars.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly IVehiclesRepository _vehiclesRepository;

        public VehiclesController(IVehiclesRepository vehiclesRepository)
        {
            _vehiclesRepository = vehiclesRepository;
        }

        [HttpGet]
        public List<Vehicle> GetAll()
        {
            return _vehiclesRepository.GetAll();
        }

        [HttpGet("{id}")]
        public Vehicle GetById(Guid id)
        {
            return _vehiclesRepository.GetById(id);
        }

        [HttpPost]
        public Guid Create(Vehicle vehicle)
        {
            return _vehiclesRepository.Create(vehicle);
        }

        [HttpPut("{id}")]
        public Guid Update(Vehicle vehicle)
        {
            return _vehiclesRepository.Update(vehicle);
        }

        [HttpDelete("{id}")]
        public Guid Delete(Guid id)
        {
            return _vehiclesRepository.Delete(id);
        }
    }
}