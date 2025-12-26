import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'organization';
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical, type = 'website' }) => {
  const { t, language } = useLanguage();
  const siteTitle = t('seo.home.title');
  const fullTitle = title === "Home" ? siteTitle : `${title} | Hisar Systems`;
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://trakyadesign.com.tr';

  // Structured Data (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hisar Systems",
    "alternateName": "Trakya Design Limited Şirketi",
    "url": baseUrl,
    "logo": `${baseUrl}/favicon.svg`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yakuplu Mahallesi, Hürriyet Bulvarı, Skyport Residence No:1 İç Kapı No: 70",
      "addressLocality": "Beylikdüzü",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-212-858-19-23",
      "contactType": "customer service",
      "email": "info@hisarsystems.com",
      "availableLanguage": ["Turkish", "English"]
    },
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hisar Systems",
    "url": baseUrl,
    "description": description,
    "inLanguage": language === 'tr' ? 'tr-TR' : 'en-US',
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Hisar Systems Engineering" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Hisar Systems" />
      <meta property="og:locale" content={language === 'tr' ? 'tr_TR' : 'en_US'} />
      <meta property="og:image" content={`${baseUrl}/favicon.svg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/favicon.svg`} />
      <meta name="twitter:site" content="@hisarsystems" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;


