import Title from "../components/shared/title";

export default function Imprint() {
  return (
    <>
      <div className="container py-16 md:py-20" id="imprint">
        <Title title={ 'Imprint' }
               subtitle={ 'Information according to § 5 DDG' }
               text={ '' }></Title>
        <div className="mt-6">
          <p className="text-lg leading-relaxed text-gray-700">
            Christian Dechant <br/>
            Langenbieberer Str. 14 <br/>
            36145 Hofbieber <br/>
          </p>
        </div>

        <div className="mt-6">
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Represented by: </strong><br/>
            Christian Dechant
          </p>
        </div>

        <div className="mt-6">
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Contact:</strong> <br/>
            Phone: 0179-4352347 <br/>
            E-Mail: <a href="mailto:freelancer@christiandechant.de"
                       className="text-primary underline">freelancer@christiandechant.de</a>
          </p>
        </div>

        <div className="mt-6">
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>Responsible for content according to § 55 Abs. 2 RStV:</strong> <br/>
            Christian Dechant <br/>
            Langenbieberer Str. 14 <br/>
            36145 Hofbieber
          </p>
        </div>

        <div className="mt-10">
          <h2 className="font-header text-2xl font-medium text-black sm:text-3xl lg:text-4xl">Disclaimer</h2>

          <div className="mt-6">
            <h3 className="font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">Liability for
              Contents</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              The contents of our pages were created with utmost care. However, we cannot guarantee the accuracy,
              completeness, and timeliness of the contents. As a service provider, we are responsible for our own
              content
              on these pages in accordance with § 7 Abs.1 DDG under general laws. However, according to §§ 8 to 10 DDG,
              we are not obligated as a service provider to monitor transmitted or stored external information or to
              investigate circumstances that indicate illegal activity. Obligations to remove or block the use of
              information under general laws remain unaffected. However, liability in this regard is only possible from
              the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove
              the content immediately.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">Liability for Links</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Our offer contains links to external third-party websites, the contents of which we have no influence
              over.
              Therefore, we cannot assume any liability for these external contents. The respective provider or operator
              of the pages is always responsible for the contents of the linked pages. The linked pages were checked for
              possible legal violations at the time of linking. Illegal contents were not recognizable at the time of
              linking. However, permanent content control of the linked pages is not reasonable without concrete
              evidence
              of a violation of the law. If we become aware of any legal violations, we will remove such links
              immediately.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">Copyright</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              The contents and works created by the site operators on these pages are subject to German copyright law.
              Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law
              require the written consent of the respective author or creator. Downloads and copies of this site are
              only permitted for private, non-commercial use. Insofar as the content on this site was not created by the
              operator, the copyrights of third parties are respected. In particular, third-party content is identified
              as such. Should you nevertheless become aware of a copyright infringement, we ask that you notify us
              accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">Data Protection</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              The use of our website is usually possible without providing personal data. Insofar as personal data
              (e.g., name, address, or email addresses) are collected on our pages, this is done, as far as possible,
              on a voluntary basis. These data will not be passed on to third parties without your explicit consent.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              We would like to point out that data transmission on the Internet (e.g., communication by email) can have
              security gaps. Complete protection of data against access by third parties is not possible. The use of
              contact data published as part of the legal notice obligation by third parties for sending unsolicited
              advertising and information materials is hereby expressly prohibited. The operators of the pages expressly
              reserve the right to take legal action in the event of unsolicited advertising, such as spam emails.
            </p>
          </div>
        </div>
      </div>
    </>
  )
    ;
}