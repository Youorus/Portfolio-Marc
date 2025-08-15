// next.config.js
const isProd = process.env.NODE_ENV === "production";

/**
 * Construit un basePath correct :
 * - seulement en production
 * - doit commencer par "/"
 * - sinon chaîne vide (valeur par défaut Next)
 */
function getBasePath() {
  const bp = process.env.BASE_PATH;
  if (!isProd || !bp) return "";
  return bp.startsWith("/") ? bp : `/${bp}`;
}

const basePath = getBasePath();

// Log utile pendant le build CI
console.warn(
  `P.S. [basePath] is {${basePath || "(empty)"}} — set BASE_PATH in env for subpath deploys.`
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Export statique pour GitHub Pages / hébergement statique
  output: "export",
  trailingSlash: true,           // évite les 404 sur GitHub Pages
  images: { unoptimized: true }, // requis avec `output: "export"`

  // Sous-chemin seulement si nécessaire
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  // Évite publicRuntimeConfig (déprécié). Si tu dois exposer la valeur au client,
  // préfère une variable `NEXT_PUBLIC_BASE_PATH`.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
