// import { useEffect, useState } from "react";

// const Articles = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const MEDIUM_API =
//     "https://api.rss2json.com/v1/api.json?rss_url=https://geliettech.medium.com/feed";

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const res = await fetch(MEDIUM_API);
//         const data = await res.json();
//         setArticles(data.items || []);
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);


//   const getArticleImage = (article) => {
//     if (article.thumbnail) return article.thumbnail;

//     // Extract first <img> src from the HTML content
//     const match = article.content.match(/<img.*?src="(.*?)"/);
//     return match ? match[1] : "https://via.placeholder.com/400";
//   };

//   const truncateTitle = (str) => {
//     if (!str) return "";
//     return str;
//   };


//   if (loading) {
//     return <p className="text-center py-10">Loading articles...</p>;
//   }

//   return (
//     <section id="articles" className="py-24 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           🚀 Latest <span className="text-primary">Articles</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are my recent articles from Medium. Each article was carefully
//           articulated with attention to detail.
//         </p>

//         <div className=" flex flex-col gap-2">
//           {articles?.slice(0, 2).map((article, index) => (
//             <div key={index} className="flex bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full">
//               <div className="w-32 overflow-hidden">
//                 <img
//                   src={getArticleImage(article)}
//                   alt={article.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold mb-2">{truncateTitle(article.title)}</h3>
//                 <p className="text-sm text-gray-500 mb-2">
//                   {new Date(article.pubDate).toDateString()}
//                 </p>

//                 <a
//                   href={article.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-primary/80 hover:text-primary transition-colors duration-300"
//                 >
//                   Read full article
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Articles;
import { useEffect, useState } from "react";

const MEDIUM_API =
  "https://api.rss2json.com/v1/api.json?rss_url=https://geliettech.medium.com/feed";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/400";

/**
 * Extract article image from thumbnail or content
 */
const getArticleImage = (article) => {
  if (article?.thumbnail) return article.thumbnail;

  const match = article?.content?.match(/<img.*?src="(.*?)"/);
  return match ? match[1] : PLACEHOLDER_IMAGE;
};

/**
 * Format date safely
 */
const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toDateString();
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(MEDIUM_API);

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        setArticles(data?.items ?? []);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError("Unable to load articles at the moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }


  return (
    <section id="articles" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Latest <span className="text-primary">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are my recent articles from Medium. Each article is carefully
            written with attention to detail.
          </p>
        </header>
        {loading ? (
          <p className="text-center py-10">Loading articles...</p>
        ) : (
          <div className="flex flex-col gap-4">
            {articles.slice(0, 2).map((article) => (
              <article
                key={article.guid}
                className="flex bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full"
              >
                <img
                  src={getArticleImage(article)}
                  alt={article.title || "Article image"}
                  className="w-40 object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="p-3 flex flex-col gap-2 text-left">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {article.title}
                    </h3>
                    <p className="text-xs md:text-sm text-foreground/80">
                      {formatDate(article.pubDate)}
                    </p>
                  </div>

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/80 hover:text-primary transition-colors duration-300"
                  >
                    Read full article
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Articles;