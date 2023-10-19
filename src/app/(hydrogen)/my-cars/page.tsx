import { Metadata } from 'next';
import PageHeader from '@/app/shared/page-header';

// SEO metadata
export const metadata: Metadata = {
  title: 'My Cars | All of your cars in one place',
};

const pageHeader = {
  title: 'MyCar',
  breadcrumb: [
    {
      href: '/',
      name: 'Home',
    },
    {
      name: 'My Car',
    },
  ],
};

export default function NewPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
    <div>
        <h1>List of cars here</h1>
    </div>
    </>
  );
}