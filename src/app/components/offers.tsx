import Title from "./shared/title";

export default function Offers() {
  const packages = [
    {
      title: 'Static One-Pager',
      description: 'Ideal for a professional online presence with minimal maintenance. Perfectly suited for personal portfolios or simple business landing pages.',
      features: [ 'Fully GDPR compliant', 'Legal notice & Privacy policy included', 'Optimized for mobile devices', 'Blazing fast performance (no CMS overhead)' ],
    },
    {
      title: 'Interactive One-Pager (with CMS)',
      description: 'The flexibility of a modern website combined with the simplicity of a one-pager. Perfect for frequently changing content.',
      features: [ 'User-friendly Content Management System (CMS)', 'Update text and images yourself without coding', 'GDPR compliant & Legal notice', 'Contact form integration' ],
    },
    {
      title: 'Business Website (up to 4 pages)',
      description: 'A comprehensive solution for small businesses needing space for services, team, and contact information.',
      features: [ 'Individual design for up to 4 pages', 'Full CMS integration', 'SEO optimized structure', 'GDPR compliant' ],
    },
    {
      title: 'Enterprise Website (up to 8 pages)',
      description: 'A robust digital foundation for growing businesses, offering extensive space for all your content and services.',
      features: [ 'Up to 8 custom pages', 'Advanced CMS capabilities', 'Professional SEO & Analytics setup', 'Premium design & high performance' ],
    },
  ];

  return (
    <div id="pricing" className="bg-grey-60 border-t border-lila">
      <div className="container py-16 md:py-20">
        <Title title="My Offers" subtitle="Tailored web solutions to bring your ideas to life." text={ null }></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          { packages.map((pkg, index) => (
            <div key={ index }
                 className="group bg-white shadow-md rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-transparent hover:border-primary">
              <div>
                <h3 className="text-xl font-semibold mb-2">{ pkg.title }</h3>
                <p className="text-grey-10 mb-4 text-sm">{ pkg.description }</p>
                <ul className="mb-6 space-y-2">
                  { pkg.features.map((feature, idx) => (
                    <li key={ idx } className="text-sm flex items-start">
                      <span className="mr-2 text-primary">✅</span>
                      <span>{ feature }</span>
                    </li>
                  )) }
                </ul>
              </div>
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark text-center transition-colors"
              >
                Request Now
              </a>
            </div>
          )) }
        </div>
        <div
          className="bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg rounded-lg p-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-2">Custom Project</h3>
              <p className="mb-4">Need something more specific? I develop tailored web applications, complex
                integrations, or unique digital experiences exactly to your requirements.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li>✅ Individual Software Architecture</li>
                <li>✅ API & Third-Party Integrations</li>
                <li>✅ Advanced Web Technologies</li>
                <li>✅ Personal Consultation & Strategy</li>
              </ul>
            </div>
            <div className="md:w-1/3 text-center">
              <a
                href="#contact"
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-grey-50 transition-colors"
              >
                Let&#39;s Talk!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}