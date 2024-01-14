using VehicleApp.API.Data;
using VehicleApp.API.Interfaces;
using VehicleApp.API.Models;

namespace VehicleApp.API.Services
{
    public class DocumentRepository : IDocumentsRepository
    {
        private static List<Document> documents = Database.Documents;

        public List<Document> GetAll()
        {
            return documents;
        }

        public Document GetById(Guid id)
        {
            var document = documents.Single(d => d.Id == id);
            return document;
        }

        public Guid Create(Document document)
        {
            documents.Add(document);
            return document.Id;
        }

        public Guid Update(Document document)
        {
            var existingDocument = documents.Single(d => d.Id == document.Id);

            existingDocument.Id = document.Id;
            existingDocument.Type = document.Type;
            existingDocument.Description = document.Description;
            existingDocument.VehicleId = document.VehicleId;
            existingDocument.ExpiryDate = document.ExpiryDate;

            return document.Id;
        }

        public Guid Delete(Guid id)
        {
            var existingDocument = GetById(id);
            documents.Remove(existingDocument);
            return existingDocument.Id;
        }

        public List<Document> GetDocumentsByVehicleId(Guid vehicleId)
        {
            var documentsByVehicleId = documents.Where(d => d.VehicleId == vehicleId).ToList();
            return documentsByVehicleId;
        }

        public List<Document> GetInvalidDocuments()
        {
            var invalidDocuments = documents.Where(d => !d.IsValid).ToList();
            return invalidDocuments;
        }
    }
}
