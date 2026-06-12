
export default function Home() {
  return (
    <div>
      
    
      {/* Hero / Front Section */}
      <section id="hero" className="hero w-full min-h-[80vh] p-8 flex flex-col items-center justify-center ">
        <h1 className=" text-4xl">Welcome to Our Restaurant</h1>
        <p>Enjoy the best dining experience with us.</p>
      </section>

      {/* About Section */}
      <section id="about" className="about text-white w-full min-h-screen p-16 ">
        <h2>About Us</h2>
        <p>We’ve been serving delicious food since 1990.</p>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu w-full min-h-screen p-16">
        <h2>Our Menu</h2>
        <p>Explore our variety of dishes.</p>
      </section>

      {/* News Section */}
      <section id="news" className="w-full min-h-screen p-16">
        <h2>Latest News</h2>
        <p>Check out our updates and events.</p>
      </section>

      {/* Reservations Section */}
      <section className="w-full min-h-screen p-16 " >
        <h2>Reservations</h2>
        <p>Book your table online.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full min-h-screen p-16 ">
        <h2>Contact Us</h2>
        <p>Get in touch with us today.</p>
      </section>
    </div>
  );
}
