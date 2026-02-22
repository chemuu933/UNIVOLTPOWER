import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-9xl mb-4 text-amber-500">404</h1>
      <h2 className="text-3xl mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-8 max-w-md mx-auto">
        Sorry, the page you're looking for doesn't exist. It may have been moved or deleted.
      </p>
      <Button asChild size="lg">
        <Link to="/">
          <Home className="mr-2 w-4 h-4" /> Back to Home
        </Link>
      </Button>
    </div>
  );
}
