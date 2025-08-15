// next.config.js
const isProd = process.env.NODE_ENV === "production";

function getBasePath() {
  const bp = process.env.BASE_PATH;
  if (!isProd || !bp) return "";
  return bp.startsWith("/") ? bp : `/${bp}`;
}

const basePath = getBasePath();

console.warn(
  `P.S. [basePath] is {${basePath || "(empty)"}} — set BASE_PATH in env for subpath deploys.`
);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? "/Portfolio-Marc" : "" }
};