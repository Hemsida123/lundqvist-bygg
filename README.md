# Lundqvist Bygg – alla hemsidefiler

Packa upp zip-filen. Ladda upp samtliga HTML-filer, styles.css, script.js, favicon.svg, robots.txt, sitemap.xml och hela assets-mappen till GitHub eller webbhotellet. Index.html ska ligga i webbplatsens rot. Det räcker inte att ladda upp enbart index.html.

Sidan fungerar utan installation, databas eller byggverktyg. Telefonknappar öppnar telefonfunktionen och mejlknappar öppnar besökarens mejlprogram. Originalhemsidan är inte ändrad.

## Viktigt före skarp lansering: SEO
Detta är en förhandsversion. Den har medvetet noindex,nofollow i HTML och Disallow: / i robots.txt, så den inte konkurrerar med kundens riktiga webbplats på Google.

När kunden godkänt slutlig domän behöver ni:
1. Ändra robots-meta i HTML-filerna till index,follow (404-sidan kan fortsätta vara noindex).
2. Byta förhandsvisningens domän i canonical, og:url, og:image och sitemap.xml till den slutliga domänen. För GitHub Pages ska även projektsökvägen finnas med.
3. Tillåta indexering i robots.txt och ange sitemapens slutliga adress.
4. Vid ersättning av den gamla sajten: omdirigera dess /referenser/, /kontakt/ och /portfolio_page/... till rätt nya sidor via webbhotellet.
5. Kontrollera HTTPS, kontaktuppgifter och bildrättigheter samt skicka sitemap i Google Search Console.

SEO-grunden finns: unika titlar och beskrivningar, svenska sidtexter, semantiska rubriker, bildtexter/alt-texter, interna länkar, företagsdata och sitemap. Ingen ranking kan garanteras.

## Bilder och omdömen
Bilder, logotyp, team och projektinformation är hämtade från företagets befintliga webbplats och komprimerade. Källor finns i ASSET-SOURCES.json. Inga projektbilder är AI-genererade. Kunden behöver godkänna att bilderna får publiceras i den nya versionen.

Omdömesrutan anger en kataloguppgift: Kundernas.se listar Lars Lundqvist Bygg på Hakarpsvägen 123 med 5,0 av 5 från 1 omdöme, kontrollerat 21 oktober 2026. Det är inte en verifierad Google- eller Reco-widget. Inga kundcitat har hittats på. Kontrollera uppgiften igen vid lansering.

13 HTML-filer ingår, inklusive sex projektsidor och en 404-sida. Mobilmeny, projektfilter, bildvisning, kontaktlänkar och sidbredder har testats. Förhandsvisningen är separat från kundens befintliga webbplats.
