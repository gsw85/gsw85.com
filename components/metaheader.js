import { siteURL } from "@/constant/site";

export default function metaheader(
  titleInit = "",
  descriptionInit = "",
  keywordsInit = "",
  path = "/"
) {
  const title = titleInit
    ? titleInit
    : "Goh S.W. | A Visionary and a Passionate Entrepreneur";

  const description = descriptionInit
    ? descriptionInit
    : "Dr. Goh Shu Wei has had the opportunity to invest in and be involved in real estate, technology and civil engineering projects around the world";

  const urlPath = siteURL + path;

  return {
    metadataBase: new URL(siteURL),
    title,
    description,
    icons: {
      icon: [
        {
          rel: "icon",
          url: "/icon.svg",
          type: "image/svg+xml",
          sizes: "any",
        },
        {
          rel: "icon",
          url: "/favicon.ico",
          type: "image/x-icon",
          sizes: "any",
        },
        {
          rel: "icon",
          url: "/favicon.png",
          type: "image/png",
          sizes: "32x32",
        },
      ],
    },
    openGraph: {
      title,
      description,
      url: urlPath,
      siteName: "Goh S.W.",
      type: "website",
      images: [{ url: "/img/profile.jpg", width: 400, height: 400 }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/img/profile.jpg"],
    },
    alternates: { canonical: urlPath },
  };
}
