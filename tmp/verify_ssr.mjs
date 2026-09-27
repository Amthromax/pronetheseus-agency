const pages = [
  "http://localhost:8080/",
  "http://localhost:8080/services",
  "http://localhost:8080/case-studies",
  "http://localhost:8080/case-studies/energy-giant-ai-voice",
];

Promise.all(pages.map((url) => fetch(url).then((r) => r.text()))).then((htmls) => {
  htmls.forEach((html, i) => {
    console.log("\n==========================================");
    console.log("PAGE:", pages[i]);
    console.log("==========================================");
    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const desc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    const ogTitle = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
    const ogDesc = html.match(
      /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i,
    );
    const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);

    console.log("Title:", title ? title[1] : "NONE");
    console.log("Desc:", desc ? desc[1] : "NONE");
    console.log("OG Title:", ogTitle ? ogTitle[1] : "NONE");
    console.log("OG Desc:", ogDesc ? ogDesc[1] : "NONE");
    console.log("Canonical:", canonical ? canonical[1] : "NONE");
  });
});
