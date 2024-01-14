using VehicleApp.API.Models;

namespace VehicleApp.API.Interfaces
{
    public interface IDocumentsRepository
    {
        List<Document> GetAll();
        Document GetById(Guid id);
        Guid Create(Document document);
        Guid Update(Document document);
        Guid Delete(Guid id);
        List<Document> GetDocumentsByVehicleId(Guid vehicleId);
        List<Document> GetInvalidDocuments();
    }
}
