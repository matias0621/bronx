import Service from "@/components/Service";

export default function ContainerService() {
  return (
    <section className="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:w-[95%] lg:mx-auto">
      <Service
        Title="Airport transfers"
        Description="With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze."
        Photo="/Chauffeur-service-airport.webp"
      />
      <Service
        Title="Intercity trips"
        Description="Your stressfree solution for traveling between cities with chauffeurs all over the world. Enjoy seamless journeys with professional drivers."
        Photo="/Chauffeur-driving-luxury-car.webp"
      />
      <Service
        Title="Wedding events"
        Description="Our friendly, and attentive service combined with thorough attention to detail ensure you can truly relax and enjoy your special day"
        Photo="/Wedding-events.webp"
      />

      <Service
        Title="Business Meeting"
        Description="Focus on your meeting with your partners, forget about the road and the car, which will distract your thoughts."
        Photo="/Business-meeting.webp"
      />
    </section>
  );
}
