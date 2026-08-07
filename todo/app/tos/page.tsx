export default function TermsOfService() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl rounded-3xl border border-border-default bg-background-elevated/70 p-6 shadow-xl backdrop-blur-xl sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary-2 sm:text-4xl">
            Terms of Service
          </h1>

          <p className="mt-2 text-sm text-text-muted">
            Last updated: August 8, 2026
          </p>
        </div>

        <div className="space-y-7 text-sm leading-7 text-text-secondary">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Todo, you agree to be bound by these Terms
              of Service. If you do not agree with these terms, please do not
              use the application.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              2. Description of the Service
            </h2>
            <p>
              Todo is a task management application designed to help you
              organize, track, and manage your daily tasks. Features may be
              added, changed, or removed over time.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              3. Your Account
            </h2>
            <p>
              You may sign in using a supported third-party authentication
              provider. You are responsible for maintaining the security of
              your account and for all activity associated with it.
            </p>
            <p className="mt-2">
              You agree to provide accurate information and not to use another
              person's account or identity to access the service.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              4. Your Data
            </h2>
            <p>
              You retain ownership of the content and information that you
              create within Todo. You are responsible for the content you
              choose to store in the application.
            </p>
            <p className="mt-2">
              You should not use Todo as the sole place to store information
              that is critical, irreplaceable, or requires guaranteed
              availability.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              5. Acceptable Use
            </h2>
            <p>
              You agree not to misuse the service, attempt to gain unauthorized
              access, interfere with its operation, or use it for unlawful
              purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              6. Third-Party Services
            </h2>
            <p>
              Todo may rely on third-party services, including authentication,
              hosting, and database providers. Your use of those services may
              also be subject to their respective terms and policies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              7. Availability
            </h2>
            <p>
              Todo is provided on an as-is and as-available basis. We do not
              guarantee that the service will always be available, uninterrupted,
              secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              8. Changes to the Service
            </h2>
            <p>
              We may modify, suspend, or discontinue parts of the service at
              any time. We may also update these Terms of Service when
              necessary. Continued use of Todo after changes take effect
              constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              9. Termination
            </h2>
            <p>
              Access to Todo may be suspended or terminated if you violate
              these terms or misuse the service. You may stop using the
              application at any time.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              10. Disclaimer
            </h2>
            <p>
              Todo is intended as a productivity tool and is not intended to
              provide professional, financial, medical, legal, or other
              specialized advice.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-text-primary">
              11. Contact
            </h2>
            <p>
              If you have questions about these Terms of Service, please
              contact the developer through the contact information provided
              with the application.
            </p>
          </section>
        </div>

        <div className="mt-10 border-t border-border-default pt-6 text-center">
          <a
            href="/"
            className="inline-flex rounded-xl bg-primary-2 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-hover"
          >
            Back to Sign In
          </a>
        </div>
      </div>
    </main>
  );
}