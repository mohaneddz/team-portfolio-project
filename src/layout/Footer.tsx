const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Fusion. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
