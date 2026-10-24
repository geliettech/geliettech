export default async function mediumFeed(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const feedResponse = await fetch("https://geliettech.medium.com/feed", {
      signal: controller.signal,
    });
    if (!feedResponse.ok) {
      throw new Error(`Medium feed returned HTTP ${feedResponse.status}`);
    }

    const feed = await feedResponse.text();
    response.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
    response.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );
    return response.status(200).send(feed);
  } catch (error) {
    console.error("Unable to retrieve the Medium feed", error);
    return response.status(502).json({ error: "Unable to retrieve Medium articles" });
  } finally {
    clearTimeout(timeout);
  }
}
