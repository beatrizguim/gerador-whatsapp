import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}


