import Service from "@/components/Service";

export default function ContainerService() {
  return (
    <>
      <Service
        Title="Airport transfers"
        Description="With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze."
        Photo="/Chauffeur-service-airport.jpg"
      />
      <Service
        Title="Intercity trips"
        Description="Your stressfree solution for traveling between cities with chauffeurs all over the world."
        Photo="/Chauffeur-driving-luxury-car.jpg"
      />
      <Service
        Title="Wedding events"
        Description="Our friendly, and attentive service combined with thorough attention to detail ensure you can truly relax and enjoy your special day"
        Photo="/prueba.png"
      />

      <Service
        Title="Business Meeting"
        Description="Focus on your meeting with your partners, forget about the road and the car, which will distract your thoughts."
        Photo="/prueba.png"
      />
    </>
  );
}
