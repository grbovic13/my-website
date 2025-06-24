export default function Landing() {
  return (
    <div>
      <header className="bg-gray-100 text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Launch Your U.S. Business from Anywhere</h1>
        <p className="text-lg md:text-xl mb-6">Fast LLC setup, EIN registration, BOI filing and banking solutions.</p>
        <a href="/register" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Get Started</a>
      </header>
      <section className="py-16 px-4" id="services">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-xl font-medium mb-2">LLC Formation in the U.S.</h3>
            <p className="text-sm">We handle all paperwork and filings to create your U.S. LLC quickly.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-xl font-medium mb-2">EIN Application</h3>
            <p className="text-sm">Get your Employer Identification Number fast to open bank accounts.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-xl font-medium mb-2">BOI Filing</h3>
            <p className="text-sm">Beneficial Ownership Information filing to keep you compliant.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <h3 className="text-xl font-medium mb-2">Stripe & Mercury Setup</h3>
            <p className="text-sm">Set up payments and banking, even if you're not in the U.S.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-100" id="contact">
        <h2 className="text-3xl font-semibold text-center mb-10">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
            <input id="name" type="text" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
            <input id="email" type="email" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea id="message" rows="4" className="w-full border border-gray-300 rounded p-2"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700" type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
