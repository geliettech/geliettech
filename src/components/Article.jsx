import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const formatDate = (date) => {
  if (!date) return "";
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime()) ? "" : parsedDate.toDateString();
};

const parseMediumFeed = (xml) => {
  const document = new DOMParser().parseFromString(xml, "application/xml");
  if (document.querySelector("parsererror")) {
    throw new Error("The Medium feed returned invalid XML");
  }

  return Array.from(document.querySelectorAll("channel > item"))
    .map((item) => ({
      guid: item.querySelector("guid")?.textContent?.trim(),
      title: item.querySelector("title")?.textContent?.trim(),
      link: item.querySelector("link")?.textContent?.trim(),
      pubDate: item.querySelector("pubDate")?.textContent?.trim(),
    }))
    .filter((article) => article.guid && article.title && article.link);
};

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/medium-feed", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        setArticles(parseMediumFeed(await response.text()));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError("Unable to load articles at the moment.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchArticles();
    return () => controller.abort();
  }, []);

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
        ) : error ? (
          <p className="py-10 text-center text-red-500">{error}</p>
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
        {!loading && !error && articles.length === 0 && (
          <p className="py-10 text-center text-muted-foreground">
            No articles are available right now. Visit{" "}
            <a
              href="https://medium.com/@geliettech"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              my Medium profile
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
};

export default Articles;
