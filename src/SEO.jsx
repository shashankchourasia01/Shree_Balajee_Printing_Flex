// deep
// SEO.js - Updated version
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Shree Balajee Printing & Flex | Best Printing Shop in Dhanbad",
  description = "Best printing shop in Dhanbad for flex, banners, hoarding, visiting cards & wedding cards. Quality printing at affordable prices since 2010.",
  url = "https://www.balajeeflex.com",
  image = "https://www.balajeeflex.com/og-image.jpg"
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content="flex printing Dhanbad, banner printing Katras, Balajee Flex, printing shop near me, hoarding Dhanbad, wedding cards Dhanbad, visiting cards printing" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Shree Balajee Printing & Flex" />
      <meta name="geo.region" content="IN-JH" />
      <meta name="geo.placename" content="Dhanbad" />
      
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Shree Balajee Printing & Flex" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Local Business Schema - Enhanced */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Shree Balajee Printing & Flex",
          "description": description,
          "url": url,
          "telephone": "+917645980320",
          "email": "balajeeflex@gmail.com",
          "image": image,
          "priceRange": "₹₹",
          "openingHours": "Mon-Sat 09:00-20:00",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Katras Bazar, Main Road",
            "addressLocality": "Dhanbad",
            "addressRegion": "Jharkhand",
            "postalCode": "828114",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.7956",
            "longitude": "86.4304"
          },
          "sameAs": [
            "https://www.instagram.com/balajeeflex",
            "https://www.facebook.com/balajeeflex"
          ]
        })}
      </script>
      
      {/* Services Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Our Printing Services",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Flex Printing" },
            { "@type": "ListItem", "position": 2, "name": "Vinyl Printing" },
            { "@type": "ListItem", "position": 3, "name": "Hoarding" },
            { "@type": "ListItem", "position": 4, "name": "Wedding Cards" },
            { "@type": "ListItem", "position": 5, "name": "Visiting Cards" },
            { "@type": "ListItem", "position": 6, "name": "Digital Printing" }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;


// import { Helmet } from "react-helmet-async";

// const SEO = ({
//   title = "Shree Balajee Printing & Flex | Dhanbad",
//   description = "Best printing shop in Dhanbad for flex, banners, hoarding, visiting cards & wedding cards.",
//   url = "https://www.balajeeflex.com",
//   image = "https://www.balajeeflex.com/og-image.jpg"
// }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>

//       <meta name="description" content={description} />
//       <meta name="robots" content="index, follow" />
//       <link rel="canonical" href={url} />

//       {/* Open Graph */}
//       <meta property="og:type" content="website" />
//       <meta property="og:url" content={url} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={image} />

//       {/* Twitter */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={image} />

//       {/* Local Business Schema */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "LocalBusiness",
//           name: "Shree Balajee Printing & Flex",
//           url,
//           telephone: "+917645980320",
//           address: {
//             "@type": "PostalAddress",
//             addressLocality: "Dhanbad",
//             addressRegion: "Jharkhand",
//             postalCode: "828114",
//             addressCountry: "IN",
//           },
//         })}
//       </script>
//     </Helmet>
//   );
// };

// export default SEO;
