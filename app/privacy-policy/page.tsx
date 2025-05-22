"use client";

import React from "react";

export default function PrivacyPolicy() {
  // Add dark mode detection
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    // Check if dark mode is active on initial load
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    // Set up a mutation observer to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <div
          className={`px-3 py-2 rounded-full text-xs font-medium ${
            isDarkMode
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </div>
      </div>
      <div className="bg-[#000] text-primary-foreground py-12 px-6 md:px-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl">
            Last updated: March, 2025
          </p>
        </div>
      </div>

      <div className="container mx-auto py-8 px-6 md:px-12 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This site is managed by a third-party service provider of Parts
                Central LLC (the "Online Store" and collectively with Auto Parts
                "we" or "us"). We are dedicated to protecting our customer's
                privacy. Your privacy using the Website located at URL
                https://www.partscentral.us/ ("the Site") is paramount in that
                goal. Other service providers we use on the site include credit
                card processors and shipping services.
              </p>
              <p>
                The motive of this Privacy Policy ("Policy") is to inform you
                about the types of information we gather about you and your
                organization, how we many use that information, whether we
                disclose it to anyone, and the choices you have regarding our
                use of, and your ability to correct, that information. This
                Policy might change from time to time, so kindly take a look on
                it periodically.
              </p>
              <p>
                In addition to our Privacy Policy, we also advice you read our
                Terms & Conditions for important information concerning your
                rights and obligations, as well as limitations and exclusions,
                that apply to your purchases on the Site and the use of the
                Site.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Key Topics</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>What information do we collect from you?</li>
              <li>
                Where do we collect information from you and how do we use it?
              </li>
              <li>With whom do we share your information?</li>
              <li>
                How might you delete, update or correct your personally
                identifiable information?
              </li>
              <li>
                What security precautions are in place to protect against the
                loss, misuse or alteration of your information?
              </li>
              <li>Use of Cookies</li>
              <li>Children's Privacy</li>
              <li>General Privacy Policy</li>
              <li>Contacting Us, About our Privacy Policy</li>
              <li>Privacy Policy Changes</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              You must attentively review privacy policies of any third-party
              sites accessible from this site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              What information do we collect from you?
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                To provide you with numerous products and services, the Site
                collects two types of information about its visitors:
              </p>
              <p>
                Personally Identifiable Information and Non-Personally
                Identifiable Information. Our primary goal in collecting
                information from you is to provide you with a smooth, efficient,
                and customized experience while using the Site. The Online Store
                collects information on behalf of Prime Auto Parts Pro.
              </p>
              <p>
                <strong>Personally Identifiable Information:</strong> This
                refers to information that lets us know the specifics of who you
                are. Personal information is requested when you order a product
                or service, enter contests or sweepstakes, fill out surveys, and
                correspond with us. This information may include contact
                information such as your name, mailing address, telephone number
                and e-mail address. With this information, we can fill your
                service and product orders and better provide you with
                personalized services.
              </p>
              <p>
                <strong>Non-Personally Identifiable Information:</strong> This
                refers to information that does not by itself identify a
                specific individual. We obtain certain information about you
                based upon where you shop on the Site in various ways. This
                information is compiled and analyzed on both a personal and an
                aggregated basis. This information is compiled and analyzed on
                both a personal and an aggregated basis. This information might
                include the Website's Uniform Resource Locator ("URL") that you
                just came from, which URL you next go to, what browser you are
                using, and your Internet Protocol ("IP") address. A URL is the
                global address of documents and other resources on the World
                Wide Web. An IP address is an identifier for a computer or
                device on a Transmission Control Protocol/Internet Protocol
                ("TCP/IP") network, such as the World Wide Web. Networks use the
                TCP/IP protocol to route information based on the IP address of
                the destination. In other words, an IP address is a number that
                is automatically assigned to your computer whenever you are
                surfing the Web, allowing Web servers to locate and identify
                your computer. Computers require IP addresses in order for users
                to communicate on the Internet, browse and shop.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              Where do we collect information from you and how do we use it?
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                Our foremost goal in collecting personal information is to
                provide our visitors with a superior customized online
                experience. We use the customer contact information to fill
                orders, contact prior purchasers to inform them of their order
                status and to send promotional e-mails.
              </p>
              <p>
                We may perform statistical analyses of aggregate customer
                behavior. This allows us to measure relative customer interest
                in the various areas of the Site for product development
                purposes. Any information we collect is used for our own
                internal purposes to improve the content of the Site, to enhance
                users' experiences when visiting the Site, to customize the
                content and/or layout of our pages, and to provide the services
                required by an individual customer.
              </p>
              <p className="font-semibold">
                We gather information in the following ways:
              </p>
              <div className="pl-4 space-y-4">
                <h3 className="text-lg font-medium">Shopping</h3>
                <p>
                  We collect IP addresses for the purposes of system
                  administration, to gather broad demographic information, and
                  to monitor the level of activity on the Site. We collect
                  information from visitors to the Site regarding the referring
                  URL, your IP address, which browser you used to come to the
                  Site, the country, state, the pages of the Site that you
                  viewed during your visit and any search terms entered on the
                  Site.
                </p>

                <h3 className="text-lg font-medium">Ordering</h3>
                <p>
                  When you order from us, we collect personally identifiable
                  information from you. If you order one of our products or
                  services, we will collect and maintain your name, e-mail
                  address, mailing address, telephone number, product
                  selections, credit card number, order number, to communicate
                  with you about your order and to send you promotional
                  materials. Before confirming your order, form and make changes
                  and additions to the information it contains, and these
                  changes will be automatically kept for future use.
                </p>

                <h3 className="text-lg font-medium">
                  Online Surveys and Polling
                </h3>
                <p>
                  To improve our services to you, we ask some of our customers
                  to voluntarily complete surveys, which may be collected by an
                  independent third party. Individual survey answers are
                  confidential, although Non-Personally Identifiable Information
                  is collected and disclosed to third parties. If you are not
                  willing to participate, simply decline to participate when
                  asked.
                </p>

                <h3 className="text-lg font-medium">
                  Contests and Sweepstakes
                </h3>
                <p>
                  When you enter a contest or other promotion, we might ask you
                  for contact information such as your name, mailing address and
                  e-mail address in order to administer the contest, to send you
                  promotional e-mails, notify winners and make the winners' list
                  publicly available pursuant to certain states' laws.
                </p>

                <h3 className="text-lg font-medium">
                  Newsletters, Product Updates, & Promotional E-mails
                </h3>
                <p>
                  We may offer free electronic newsletters, product updates, and
                  promotional e-mails as a service to our prior customers. We
                  might send you newsletters and e-mails periodically listing
                  current specials, promotions, and deals. In addition, there
                  may be other opportunities to subscribe to an e-mail list that
                  will send you information about the Site events, but we will
                  only add you to the list with your consent. We will not send
                  e-mails to you if you have requested us not to do so unless we
                  need to confirm for our records that you do not want to
                  receive promotional emails. This option is usually included in
                  your account registration form or at our optimal home page
                  registration form.
                </p>
                <p>
                  If you have established an account with us, to stop receiving
                  promotional emails and newsletters in the future, please go to
                  the account page and log in with your account information.
                  Once you are logged in you may scroll to the bottom of the
                  page and un-check the opt-in box. Then clock the 'Update
                  Account' button and you will be removed from our mailing list.
                  If you have not set up an account with us, but have previously
                  registered at our home page to receive future information, you
                  may unsubscribe by sending a blank email to the unsubscribe
                  address specified at the bottom of the email you receive to
                  let us know you do not wish us to send future newsletters,
                  updates or promotional emails to you.
                </p>

                <h3 className="text-lg font-medium">Cookies</h3>
                <p>
                  We use Cookies in the operation of the Site. To find out what
                  cookies are and how we use them, click here.
                </p>

                <h3 className="text-lg font-medium">
                  Contact Information and Third-Party Data
                </h3>
                <p>
                  If you contact us by telephone, e-mail or letter, we might
                  keep a record of your correspondence or comments. If you
                  report a problem with the Site, we may collect such
                  information in a file specific to you to troubleshoot
                  problems, resolve disputes and better serve your needs. If you
                  contact us through our feedback area or by calling one of our
                  customer service representatives, we ask for your name and
                  e-mail address in order to send you a reply. If other users or
                  third parties send us correspondence about your activities or
                  purchases on the Site, we may keep the information in a file
                  specific to you.
                </p>

                <h3 className="text-lg font-medium">
                  Customer Traffic Patterns
                </h3>
                <p>
                  We track customers' traffic patterns throughout their online
                  sessions, including which pages a customer view while using
                  the Site. This information is ultimately stored in the form of
                  store categories, and, in some cases, specific URLs. We use
                  your IP address to diagnose problems with our servers and
                  software and to administer the Site. We may share aggregated
                  statistics about pages viewed on the Site and sales and other
                  shopping information with third parties.
                </p>

                <h3 className="text-lg font-medium">Warranty Information</h3>
                <p>
                  From time to time, we may offer additional or extended
                  warranty or service programs on our Site. These programs are
                  often administered by third part warranty and service
                  companies. When you purchase a warranty, we pass along your
                  name, address, telephone number, e-mail address, warranty
                  purchased and information about the product purchased to the
                  warranty company.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              With whom do we share your information?
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                The information collected by the Site is used only for the
                limited purposes of processing orders, keeping you informed
                about your order status, for statistical purposes for improving
                the Site and to notify you of products or special offers that
                may be of interest to you.
              </p>
              <p>
                We will disclose your Personally Identifiable Information to
                third parties to charge your credit card, fill your order,
                deliver your order, provide customer service to you, and deliver
                promotional e-mails to you from us. For example, we must release
                your credit card number to confirm payment; and release your
                mailing address information to the delivery service to deliver
                products that you ordered. These third parties have access to
                personal information needed to perform their functions but might
                not use it for other purposes.
              </p>
              <p>
                We do not sell, trade, or rent your personal information to
                others. We might release account information when we believe
                that such release is reasonably necessary to enforce or apply
                our Terms and Conditions or to protect the rights, property and
                safety of our users, others and ourselves. In addition, we may
                assign or otherwise transfer to a third party certain of your
                information in connection with an assignment, sale, transfer or
                disposition of a portion or all our business, assets or stock.
              </p>
              <p>
                Except as otherwise stated in this Policy, at present we do not
                disclose our customers' Personally Identifiable Information to
                other merchants. In the future, with your prior permission, we
                may provide some customer information to companies with products
                or services that may be of interest to you. This would be for
                marketing purposes only and no credit card number information
                would be given. Before agreeing to release your information, you
                should first confirm that our partner's privacy policy is
                acceptable to you because once your data is released, we would
                have no further control over it.
              </p>
              <p>
                From time to time, we may be required by law enforcement or
                judicial authorities to provide Personally Identifiable
                Information to the appropriate governmental authorities. We will
                disclose Personally Identifiable Information upon receipt of a
                court order, legal process, warrant or subpoena or to cooperate
                with a law enforcement investigation. We fully cooperate with
                law enforcement agencies in identifying those who use our
                services for illegal activities. As expressed in the Terms and
                Conditions that govern this Site, we reserve the right to
                conduct an investigation and/or report to law enforcement
                agencies any activities that we in good faith believe to be
                unlawful.
              </p>
              <p>
                We may assign or otherwise transfer to a third party certain of
                your information in connection with an assignment, sale,
                transfer or disposition of a portion or all our business,
                assets, or stock. Please contact the site if you do not wish to
                have your information transferred in the manner set forth above.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              How can you update or correct your Personally Identifiable
              Information?
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                During the online ordering process you can review, change or
                delete the information that you have submitted. You may change
                any of your personal information in your account online at any
                time. Simply go to the account page and log in with your account
                information. Once you are logged in you may update your account.
                Then click on "Update Account". We encourage you to promptly
                update your information if it changes. You may ask to have some,
                or all your account information deleted or removed. Upon such a
                request by you, we will delete as much of your account
                information as possible. However, because we keep track of all
                past purchases, not all information related to past purchases
                will be completely removed from our databases due to legal
                obligations.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              What are your choices regarding collection, use and distribution
              of your information?
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                With your consent, we may from time to time send you e-mail or
                other communications regarding current promotions, specials and
                new additions to the Site. You may "opt-out," or unsubscribe
                from our newsletters, updates, and promotions, by following the
                unsubscribe instructions in any e-mail you receive from us. You
                may also unsubscribe by going to the account page and logging in
                with your account information. Once you are logged in you may
                scroll to the bottom of the page and un-check the opt-in box.
                Then click on 'Update Account' and you will not receive any
                further communications or mailings.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              What security precautions are in place to protect against the
              loss, misuse or alteration of your information?
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                We employ the industry-recognized information technology to
                protect the security of the information you submit to us. The
                importance of security for all Personally Identifiable
                Information associated with our customers is of utmost concern
                to us. Our secure servers protect the information using advanced
                encryption and firewall technology. We use Secure Socket Layer
                (SSL) technology for mutual authentication, data encryption and
                data integrity – all to ensure secure transactions for our
                customers. SSL is the industry standard security protocol to
                encode sensitive information, such as your credit card number.
              </p>
              <p>
                To most efficiently serve you, credit card transactions and
                order fulfillment are handled by established third party
                banking, process agents and distribution institutions. They
                receive the information they need to verify and authorize your
                credit card transactions and to ship your order. When collecting
                credit card information for online purchases, we offer
                secured-server transactions that encrypt your information in
                transit to thwart someone from intercepting it and misusing it.
                When you access your account information, the information is
                kept on a secure server. Furthermore, all of the customer data
                we collect is protected against unauthorized access by physical
                security means.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              Use of "cookies"
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                Like many other commercial sites, our site may utilize a
                standard technology called a "cookie" to collect information
                about how our site is used. A cookie is a small data text file,
                which a Web site stores on your computer's hard drive (if your
                Web browser permits) that can later be retrieved to identify you
                to us. Cookies were designed to help a Web site recognize a
                user's browser as a previous visitor and thus save and remember
                any preferences that may have been set while the user was
                browsing the site. A cookie cannot be read by a Web site other
                than the one that set the cookie. Cookies can securely store a
                customer's password, personalize home pages, identify which
                parts of a site have been visited or keep track of selections,
                such as those selected in a "shopping cart." Our cookies may
                collect your domain name and track your selections through the
                Site. A cookie cannot retrieve any other data from your hard
                drive, pass on a computer virus, or capture your e-mail address.
                The cookies make your use of the Site easier, make the Site run
                more smoothly and help us to maintain a secure Site. You will be
                unable to shop on the Site without your browser set to accept
                cookies. We only use cookies to gather the information indicated
                in this policy and do not use cookies to gather personal
                identifying information about you without your consent.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              Third-party sites
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                Other sites accessible through the Site have their own privacy
                policies and data collection, use and disclosure practices.
                Please consult each site's privacy policy. We are not
                responsible for the policies or practices of third parties.
                Please be aware that the Site may contain links to other sites
                on the Internet that are owned and operated by third parties.
                The information practices of those Web sites linked to the Site
                are not covered by this Privacy Policy. These other sites may
                send their own cookies to users, collect data or solicit
                personal information.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              Privacy Policy & SMS Opt-In Agreement
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <h2>1. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide,
                including but not limited to:
              </p>
              <ul>
                <li>
                  <strong>Name</strong>
                </li>
                <li>
                  <strong>Email address</strong>
                </li>
                <li>
                  <strong>Mailing address</strong>
                </li>
                <li>
                  <strong>Phone number</strong>
                </li>
                <li>
                  <strong>Order details</strong>
                </li>
              </ul>
              <p>
                Your payment details are securely processed by trusted
                third-party providers; we do not store or retain any card
                information.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>
                  Send SMS updates regarding appointments, billing alerts, and
                  shipment details
                </li>
                <li>Improve our services through anonymized analytics</li>
                <li>
                  Send promotional communications only with your explicit opt-in
                  consent
                </li>
              </ul>

              <h2>3. Data Sharing Policy</h2>
              <p>
                <strong>
                  We do not sell, rent, or share your personal information,
                  including mobile opt-in data, with any third party or
                  affiliate company for marketing purposes.
                </strong>
              </p>
              <p>
                We may share your information only with{" "}
                <strong>trusted service providers</strong> strictly necessary to
                deliver the messages you have consented to receive (e.g., SMS
                platform providers).
              </p>
              <p>
                We comply with legal obligations, such as subpoenas, only when
                required by law.
              </p>

              <h2>4. Your Rights and Control Over Your Data</h2>
              <p>You have full control over your personal data. You may:</p>
              <ul>
                <li>
                  <strong>Access, update, or request deletion</strong> of your
                  personal information (subject to legal obligations)
                </li>
                <li>
                  Manage your communication preferences by contacting{" "}
                  <a
                    href="mailto:primeautopartspro@gmail.com"
                    className="text-primary hover:underline"
                  >
                    <strong>primeautopartspro@gmail.com</strong>
                  </a>
                </li>
                <li>
                  Unsubscribe from SMS communications by replying{" "}
                  <strong>STOP</strong>
                </li>
                {/* <li>
                  Request help by texting <strong>HELP</strong> to{" "}
                  <a
                    href="tel:+18008383058"
                    className="text-primary hover:underline"
                  >
                    <strong>1-(888) 338-9066</strong>
                  </a>
                </li> */}
              </ul>

              <h2>5. SMS Opt-In Agreement</h2>
              <p>
                By opting into SMS messaging from <strong>Prime Auto Parts Pro</strong>
                , you agree to receive automated messages, including:
              </p>
              <ul>
                <li>Product inquiries</li>
                <li>Appointment reminders</li>
                <li>Billing alerts</li>
                <li>Shipment updates</li>
              </ul>
              <p>
                <strong>Message frequency:</strong> Up to 2 message per week
                (varies by interaction). Standard message and data rates may
                apply.
              </p>
              <ul>
                <li>
                  To opt-out, text <strong>STOP</strong> at any time.
                </li>
                <li>
                  For assistance, text <strong>HELP</strong> or visit our
                  Privacy Policy.
                </li>
                <li>
                  If you opt out, you will no longer receive SMS messages but
                  can opt back in by replying <strong>START</strong>.
                </li>
              </ul>

              <h2>6. SMS Opt-In via Website Contact Form</h2>
              <p>
                If you provide consent via our website's contact form, you will
                see the following opt-in checkbox:
              </p>
              <blockquote>
                <p>
                  {" "}
                  <input
                    type="checkbox"
                    id="sms_consent"
                    name="sms_consent"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  {"  "}
                  <strong>
                    By checking this box, you agree to receive SMS messages from
                    Prime Auto Parts Pro related to Product inquiries / Appointment
                    reminders / Billing alerts / Shipment updates. You may reply
                    STOP to opt-out at any time. Reply HELP for assistance. Messages and data rates may apply. Message
                    frequency will vary.
                  </strong>
                </p>
              </blockquote>

              <h2>7. Accessibility and Updates</h2>
              <p>
                This Privacy Policy is easily accessible on all pages of our
                website and appears on a{" "}
                <strong>single dedicated page or pop-up window</strong>.
              </p>
              <p>
                We may update this policy as necessary. Please review it
                periodically to stay informed about our practices.
              </p>
              <p>
                For more details, visit our full <strong>Privacy Policy</strong>{" "}
                and <strong>Terms & Conditions</strong> at{" "}
                <a href="https://www.partscentral.us/">Prime Auto Parts Pro Website</a>
                .
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              Children's Privacy
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                You must be at least 18 years old to have our permission to use
                this Site. Our policy is that we do not knowingly collect, use
                or disclose Personally Identifiable Information about visitors
                to our Site under 18 years of age. If you are the parent or
                guardian of a minor under 18 years of age and believe that they
                have disclosed personally identifiable information to us, please
                contact us so that we may delete the minor's information.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              General Privacy Policy
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                We may have additional privacy policies that govern its general
                corporate site and the use of that site. To see and review these
                policies, please visit the corporate web site of Prime Auto Parts Pro.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              Contacting Us About our Privacy Policy
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                If you have any questions about this Privacy Policy, please
                contact our Privacy Compliance Department by{" "}
                <a
                  href="mailto:primeautopartspro@gmail.com"
                  className="text-primary underline"
                >
                  clicking here
                </a>
                .
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 py-2 px-4 bg-muted/30 dark:bg-primary/10 text-foreground dark:text-primary-foreground rounded-md">
              Privacy Policy Changes
            </h2>
            <div className="space-y-4 text-muted-foreground px-4">
              <p>
                This Privacy Policy was updated on March, 2025. If we make
                material changes to any terms or conditions of the Privacy
                Policy, the changes will be posted on our homepage so that you
                will always know what information we gather, how we might use
                that information and to whom we will disclose it. We may change,
                modify, add or remove portions of this Policy at any time.
                Please be sure to check this page before proceeding to use the
                Site.
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Prime Auto Parts Pro LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
