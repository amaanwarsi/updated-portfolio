const Footer = () => {
  return (
    <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
      <div className="container">
        <div className="border-x border-primary/10">

          <div className="max-w-3xl mx-auto px-4 sm:px-7 py-4 md:py-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-neutral-500">

            <p>© {new Date().getFullYear()} — All rights reserved</p>

            <p>
              Created with care by{" "}
              <span className="underline decoration-dotted underline-offset-4 text-neutral-900">
                Amaan Warsi
              </span>
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;