import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Shree Balajee Printing & Flex | Dhanbad",
  description = "Best printing shop in Dhanbad for flex, banners, hoarding, visiting cards & wedding cards.",
  url = "https://www.balajeeflex.com",
  image = "https://www.balajeeflex.com/og-image.jpg"
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Shree Balajee Printing & Flex",
          url,
          telephone: "+917645980320",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dhanbad",
            addressRegion: "Jharkhand",
            postalCode: "828114",
            addressCountry: "IN",
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;



// // ── File: src/SEO.jsx ──
// // Har page ke <head> mein SEO tags inject karta hai

// import { Helmet } from "react-helmet-async";

// const SEO = () => {
//   return (
//     <Helmet>
//       {/* ── BASIC SEO ── */}
//       <title>Shree Balajee Printing & Flex | Katras Bazar, Dhanbad</title>
//       <meta
//         name="description"
//         content="Shree Balajee Printing & Flex - Dhanbad ka sabse trusted printing shop. Flex printing, banner, hoarding, visiting card, shadi card, digital printing aur bahut kuch. Katras Bazar, Dhanbad. Call: 7645980320"
//       />
//       <meta
//         name="keywords"
//         content="Balajee Flex, Shree Balajee Printing, flex printing Dhanbad, banner printing Dhanbad, hoarding Dhanbad, visiting card Dhanbad, shadi card Dhanbad, digital printing Dhanbad, Katras Bazar printing, printing shop Dhanbad, flex Jharkhand, balajeeflex"
//       />
//       <meta name="author" content="Shree Balajee Printing & Flex" />
//       <meta name="robots" content="index, follow" />
//       <link rel="canonical" href="https://www.balajeeflex.com" />

//       {/* ── OPEN GRAPH (Facebook, WhatsApp preview) ── */}
//       <meta property="og:type" content="website" />
//       <meta property="og:url" content="https://www.balajeeflex.com" />
//       <meta property="og:title" content="Shree Balajee Printing & Flex | Dhanbad" />
//       <meta
//         property="og:description"
//         content="Dhanbad ka #1 printing shop — flex, banner, hoarding, visiting card, shadi card, digital printing. Katras Bazar. Call: 7645980320"
//       />
//       <meta property="og:image" content="https://www.balajeeflex.com/og-image.jpg" />
//       <meta property="og:locale" content="en_IN" />
//       <meta property="og:site_name" content="Shree Balajee Printing & Flex" />

//       {/* ── TWITTER CARD ── */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content="Shree Balajee Printing & Flex | Dhanbad" />
//       <meta
//         name="twitter:description"
//         content="Dhanbad ka #1 printing shop — flex, banner, hoarding, visiting card. Call: 7645980320"
//       />
//       <meta name="twitter:image" content="https://www.balajeeflex.com/og-image.jpg" />

//       {/* ── LOCAL BUSINESS SCHEMA (Google ko location samajhata hai) ── */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "LocalBusiness",
//           name: "Shree Balajee Printing & Flex",
//           alternateName: "Balajee Flex",
//           url: "https://www.balajeeflex.com",
//           logo: "https://www.balajeeflex.com/logo.jpeg",
//           image: "https://www.balajeeflex.com/og-image.jpg",
//           description:
//             "Dhanbad ka trusted printing shop — flex, banner, hoarding, visiting card, shadi card, digital printing aur framing.",
//           telephone: "+917645980320",
//           priceRange: "₹₹",
//           address: {
//             "@type": "PostalAddress",
//             streetAddress: "Katras Bazar, Bhagat Singh Chowk, Near Bank of India",
//             addressLocality: "Dhanbad",
//             addressRegion: "Jharkhand",
//             postalCode: "828114",
//             addressCountry: "IN",
//           },
//           geo: {
//             "@type": "GeoCoordinates",
//             latitude: 23.8169002,
//             longitude: 86.2936481,
//           },
//           openingHoursSpecification: [
//             {
//               "@type": "OpeningHoursSpecification",
//               dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//               opens: "10:00",
//               closes: "19:00",
//             },
//           ],
//           sameAs: [
//             "https://www.facebook.com/balajeekatras",
//             "https://www.instagram.com/balajeekatras",
//             "https://wa.me/917645980320",
//           ],
//           hasMap: "https://www.google.com/maps/place/Shree+Balajee+Printing+%26+Flex/@23.8169002,86.2936481,15z",
//           aggregateRating: {
//             "@type": "AggregateRating",
//             ratingValue: "4.6",
//             reviewCount: "502",
//           },
//         })}
//       </script>
//     </Helmet>
//   );
// };

// export default SEO;