using VehicleApp.API.Interfaces;
using VehicleApp.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IVehiclesRepository, VehiclesRepository>();
builder.Services.AddScoped<IDocumentsRepository, DocumentRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowEverything",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowEverything");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
