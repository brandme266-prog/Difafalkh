import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://difafalkh.com';
const SITE_NAME = 'ضفاف الخليج للإعمار والاستثمار العقاري';
const DEFAULT_IMAGE = '/images/752854634_122104263573397745_1309253397501418774_n.jpg';

export default function SEO({ title, description, schema, url, image, keywords }) {
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const ogImage = image || `${SITE_URL}${DEFAULT_IMAGE}`;

  const defaultKeywords = [
    'عقارات مرسى مطروح',
    'شاليهات للبيع مرسى مطروح',
    'فلل للبيع مرسى مطروح',
    'شقق تمليك مطروح',
    'استثمار عقاري مرسى مطروح',
    'مشاريع عقارية مطروح',
    'فيستيفال مطروح',
    'سانتوريني باي مطروح',
    'فندق عروس البحر مطروح',
    'ضفاف الخليج للإعمار',
    'تطوير عقاري مطروح',
    'وحدات سكنية مطروح بالتقسيط',
    'شراء شقق مطروح تقسيط',
    'الساحل الشمالي مطروح',
    'عقارات بحرية مصر',
    'شركة عقارية مصرية سعودية',
    ...(keywords || [])
  ].join(', ');

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    image: ogImage,
    description: 'شركة ضفاف الخليج للإعمار والاستثمار العقاري - شراكة مصرية سعودية برأس مال 500 مليون جنيه. متخصصة في التطوير العقاري في مرسى مطروح والساحل الشمالي.',
    telephone: '+201555111335',
    sameAs: [
      'https://www.facebook.com/Difafalkh',
      'https://wa.me/201555111335'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'مرسي مطروح - شارع الجلاء-برج عمر المختار',
      addressLocality: 'مرسى مطروح',
      addressRegion: 'مطروح',
      addressCountry: 'EG'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '31.3543',
      longitude: '27.2373'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '09:00',
      closes: '22:00'
    },
    foundingDate: '2019',
    areaServed: ['مرسى مطروح', 'الساحل الشمالي', 'مصر'],
    priceRange: '$$$$'
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={defaultKeywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content="Arabic" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ar_EG" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo Tags */}
      <meta name="geo.region" content="EG-MT" />
      <meta name="geo.placename" content="مرسى مطروح، مصر" />
      <meta name="geo.position" content="31.3543;27.2373" />
      <meta name="ICBM" content="31.3543, 27.2373" />

      {/* Schema.org JSON-LD - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>

      {/* Schema.org JSON-LD - Custom schema if provided */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
