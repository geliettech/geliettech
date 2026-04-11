import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const MEDIUM_API =
  "https://api.rss2json.com/v1/api.json?rss_url=https://geliettech.medium.com/feed";


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
        console.error(err);
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
    <section id="articles" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <header className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            🚀 Latest <span className="text-primary">Articles</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Discover my latest Medium articles-each one thoughtfully written to deliver meaningful insights, practical value, and a great reading experience.
          </p>
        </header>
        {loading ? (
          <p className="text-center py-10">Loading articles...</p>
        ) : (
          <div className="flex flex-col gap-6">
            {articles.slice(0, 4).map((article) => (
              <article
                key={article.guid}
                className="flex flex-col justify-between bg-card rounded-xl shadow-sm hover:shadow-lg transition p-5 md:p-6 h-full"
              >

                {/* Content */}
                <div className="space-y-3 text-left">
                  <h3 className="text-base md:text-lg font-semibold line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs md:text-sm text-foreground/80">
                    {formatDate(article.pubDate)}
                  </p>
                  <div className="mt-4">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm md:text-base text-primary hover:text-primary/80 transition"
                    >
                      Read full article
                      <FaArrowRight className="text-xs md:text-sm" />
                    </a>
                  </div>
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