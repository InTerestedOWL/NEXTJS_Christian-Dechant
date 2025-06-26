import Title from "./shared/title";

export default function PackagesAndPrices() {
  const packages = [
    {
      title: 'One-Pager (static)',
      price: '€500',
      features: [ 'GDPR compliant', 'Legal notice', 'No CMS' ],
    },
    {
      title: 'One-Pager (with CMS)',
      price: '€800',
      features: [ 'GDPR compliant', 'Legal notice', 'With CMS - maintain & update content yourself' ],
    },
    {
      title: 'Small Website (4 pages)',
      price: '€1,200',
      features: [ '4 pages', 'GDPR compliant', 'With CMS - maintain & update content yourself' ],
    },
    {
      title: 'Medium Website (8 pages)',
      price: '€1,600',
      features: [ '8 pages', 'GDPR compliant', 'With CMS - maintain & update content yourself' ],
    },
  ];

  return (
    <div id="pricing" className="bg-grey-50">
      <div className="container py-16 md:py-20">
        <Title title="Packages and Prices" subtitle="These are the Packages and prices I offer." text={ null }></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          { packages.map((pkg, index) => (
            <div key={ index } className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{ pkg.title }</h3>
              <p className="text-2xl font-bold text-primary mb-4">{ pkg.price }</p>
              <ul className="mb-4">
                { pkg.features.map((feature, idx) => (
                  <li key={ idx }>✅ { feature }</li>
                )) }
              </ul>
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
              >
                Request Now
              </a>
            </div>
          )) }
        </div>
        <div
          className="bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg rounded-lg p-6 mt-8 justify-center">
          <h3 className="text-xl font-semibold mb-4">Custom Project</h3>
          <p className="text-2xl font-bold mb-4">from €2,000</p>
          <ul className="mb-4">
            <li>✅ Custom Design</li>
            <li>✅ Advanced Features</li>
            <li>✅ Personal Consultation</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-grey-50 text-primary px-4 py-2 rounded hover:bg-primary-dark"
          >
            Request Project
          </a>
        </div>
      </div>
    </div>
  );
}