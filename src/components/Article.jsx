import { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const MEDIUM_API =
    "https://api.rss2json.com/v1/api.json?rss_url=https://geliettech.medium.com/feed";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(MEDIUM_API);
        const data = await res.json();
        setArticles(data.items);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);


  const getArticleImage = (article) => {
  if (article.thumbnail) return article.thumbnail;

  // Extract first <img> src from the HTML content
  const match = article.content.match(/<img.*?src="(.*?)"/);
  return match ? match[1] : "https://via.placeholder.com/400";
};

const truncateTitle = (str, maxLength = 50) => {
  if (!str) return "";
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

const truncateDescription = (html, maxLength = 150) => {
  // Remove HTML tags
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";

  // Truncate if longer than maxLength
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

  if (loading) {
    return <p className="text-center py-10">Loading articles...</p>;
  }

  return (
    <section id="articles" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          🚀 Latest <span className="text-primary">Articles</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are my recent two articles from Medium. Each article was carefully
          articulated with attention to detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.slice(0, 2).map((article, index) => (
            <div key={index} className="h-full">
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src={getArticleImage(article)}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{truncateTitle(article.title, 60)}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {new Date(article.pubDate).toDateString()}
                  </p>
                  <div
  className="text-muted-foreground mb-4"
>
  {truncateDescription(article.description, 600)}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;