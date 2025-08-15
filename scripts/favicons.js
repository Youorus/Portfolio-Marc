// scripts/favicons.js
// Compatible favicons v7+ (ESM) avec Node 18/20 en CommonJS

const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

(async () => {
  try {
    const src = path.join(__dirname, "..", "config", "profile.png");
    const outDir = path.join(__dirname, "..", "public");

    if (!fs.existsSync(src)) {
      console.log("Favicons: skip (config/profile.png not found)");
      process.exit(0);
    }

    // favicons v7 est ESM → import dynamique
    const { default: favicons } = await import("favicons");

    const configuration = {
      path: "/",                // prefix des assets (dans /public)
      appName: "Portfolio Marc",
      appShortName: "Portfolio",
      appDescription: "Portfolio de Marc",
      developerName: "Marc",
      developerURL: null,
      background: "#ffffff",
      theme_color: "#365b6d",
      display: "standalone",
      // Génère uniquement ce dont tu as besoin
      icons: {
        favicons: true,
        appleIcon: true,
        android: true,
        appleStartup: false,
        windows: false,
        yandex: false,
        firefox: false,
        coast: false,
      },
    };

    console.log("Generating favicons...");
    const response = await favicons(src, configuration);

    await fsp.mkdir(outDir, { recursive: true });

    // Écrit les images (buffers) et fichiers (textes) dans /public
    await Promise.all(
      response.images.map((img) =>
        fsp.writeFile(path.join(outDir, img.name), img.contents)
      )
    );
    await Promise.all(
      response.files.map((file) =>
        fsp.writeFile(path.join(outDir, file.name), file.contents)
      )
    );

    // Si tu veux injecter le HTML dans ton template, response.html est dispo
    console.log(
      `Favicons: generated ${response.images.length} images and ${response.files.length} files`
    );
  } catch (e) {
    console.warn("Favicons: skipped due to error:", e?.message || e);
    // Ne bloque pas le build en CI si ça casse
    process.exit(0);
  }
})();