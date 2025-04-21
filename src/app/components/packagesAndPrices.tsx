import Title from "./shared/title";

export default function PackagesAndPrices() {

  const packages = [
    {
      title: 'One-Pager (statisch)',
      price: '500 €',
      features: [ 'DSGVO-konform', 'Impressum', 'Kein CMS' ],
    },
    {
      title: 'One-Pager (mit CMS)',
      price: '800 €',
      features: [ 'DSGVO-konform', 'Impressum', 'Mit CMS – Inhalte selbst pflegen & aktualisieren' ],
    },
    {
      title: 'Kleine Webseite (4 Seiten)',
      price: '1.200 €',
      features: [ '4 Seiten', 'DSGVO-konform', 'Mit CMS – Inhalte selbst pflegen & aktualisieren' ],
    },
    {
      title: 'Mittlere Webseite (8 Seiten)',
      price: '1.600 €',
      features: [ '8 Seiten', 'DSGVO-konform', 'Mit CMS – Inhalte selbst pflegen & aktualisieren' ],
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
                Jetzt anfragen
              </a>
            </div>
          )) }
        </div>
        <div
          className="bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg rounded-lg p-6 mt-8 justify-center">
          <h3 className="text-xl font-semibold mb-4">Individuelles Projekt</h3>
          <p className="text-2xl font-bold  mb-4">ab 2.000 €</p>
          <ul className="mb-4">
            <li>✅ Maßgeschneidertes Design</li>
            <li>✅ Erweiterte Funktionalitäten</li>
            <li>✅ Persönliche Beratung</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-grey-50 text-primary px-4 py-2 rounded hover:bg-primary-dark"
          >
            Projekt anfragen
          </a>
        </div>
      </div>
    </div>
  )
}