import React from 'react';
import { PageId } from '../types';

interface ProductsPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = () => {
  return (
    <div className="w-full min-h-[70vh] bg-white">
      {/* Products page intentionally left blank */}
    </div>
  );
};
