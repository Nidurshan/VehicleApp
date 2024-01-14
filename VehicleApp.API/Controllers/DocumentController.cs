using Microsoft.AspNetCore.Mvc;
using VehicleApp.API.Interfaces;
using VehicleApp.API.Models;
using VehicleApp.API.Services;

namespace Cars.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DocumentsController : ControllerBase
    {
        private readonly IDocumentsRepository _documentsRepository;

        public DocumentsController(IDocumentsRepository documentsRepository)
        {
            _documentsRepository = documentsRepository;
        }

        [HttpGet]
        public List<Document> GetAll()
        {
            return _documentsRepository.GetAll();
        }

        [HttpGet("{id}")]
        public Document GetById(Guid id)
        {
            return _documentsRepository.GetById(id);
        }

        [HttpPost]
        public Guid Create(Document document)
        {
            return _documentsRepository.Create(document);
        }

        [HttpPut("{id}")]
        public Guid Update(Document document)
        {
            return _documentsRepository.Update(document);
        }

        [HttpDelete("{id}")]
        public Guid Delete(Guid id)
        {
            return _documentsRepository.Delete(id);
        }

        [HttpGet("vehicle/{id}")]
        public List<Document> GetDocumentsByVehicleId(Guid id)
        {
            return _documentsRepository.GetDocumentsByVehicleId(id);
        }

        [HttpGet("invalid")]
        public List<Document> GetInvalidDocuments()
        {
            return _documentsRepository.GetInvalidDocuments();
        }
    }
}