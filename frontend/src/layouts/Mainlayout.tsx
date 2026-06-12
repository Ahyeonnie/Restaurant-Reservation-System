import type { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';



export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <Navbar />
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
