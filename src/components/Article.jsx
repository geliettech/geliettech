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
    <section id="articles" className="section-shell bg-primary/[0.035]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <header className="mb-12 text-left md:mb-14">
          <p className="section-kicker">Notes & ideas</p>
          <h2 className="section-title">
            Latest <span className="text-primary">articles</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            Thoughts, lessons, and useful ideas from my work in web development.
          </p>
        </header>
        {loading ? (
          <p className="text-center py-10">Loading articles...</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {articles.slice(0, 4).map((article) => (
              <article
                key={article.guid}
                className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:p-7"
              >

                {/* Content */}
                <div className="space-y-3 text-left">
                  <h3 className="line-clamp-2 text-lg font-semibold tracking-tight">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
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