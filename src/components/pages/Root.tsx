import { Outlet } from 'react-router-dom';
import { Header } from '../public/header';
//import { Footer } from '../public/Footer';

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
