export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-semibold tracking-tight">itsolutions</span>
          <p className="text-sm text-gray-400">
            © {currentYear} itsolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
