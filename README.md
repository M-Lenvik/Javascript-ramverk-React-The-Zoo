# Kurs: Javascript ramverk - React

## Utbildning till Frontend Developer på Medieinstitutet

Detta är ett interaktivt zoo där besökare kan utforska djur och mata dem. Projektet är byggt med React, TypeScript och SCSS.

Skapad av **Marie Lenvik** <br> https://github.com/M-Lenvik

## Innehållsförteckning

1. [Beskrivning av projektet](#-beskrivning-av-projektet--the-zoo)
2. [Kom igång med projektet](#kom-igång-med-projektet)
3. [Teknikstack](#-teknikstack)
4. [Uppgiftsbeskrivning](#uppgiftsbeskrivning)
5. [Projektbeskrivning](#projektbeskrivning)
   1. [Funktionalitet](#funktionalitet)
   2. [Arkitektur](#arkitektur)
6. [Slutbetyg](#-slutbetyg)
7. [Bilder](#bilder)

## 🔍 Beskrivning av projektet 🦁 The Zoo

The Zoo är en interaktiv webbapplikation som simulerar ett digitalt zoo där besökare kan utforska olika djur, läsa om dem och mata dem. Applikationen hämtar djurdatan från ett externt API och presenterar informationen på ett användarvänligt sätt med tydlig visuell feedback om djurens matningsstatus.

Applikationen implementerar ett tidsbaserat matningssystem där djur kan matas enligt specifika regler: på detaljsidan kan ett djur matas om det inte har fått mat på minst 4 timmar, medan översiktssidan visar statusindikationer baserat på något annorlunda tidsintervall för att ge användaren en snabb översikt över vilka djur som behöver uppmärksamhet.

Genom att använda React Router för navigation, Context API och useReducer för state management, samt localStorage för persistens, skapar applikationen en sömlös användarupplevelse där matningsstatus bevaras mellan sessioner.

## Kom igång med projektet

**🛠️ Installera genom följande:**

1. **Kloning av projektet**
   - `git clone https://github.com/Medieinstitutet/fed24d-the-zoo-M-Lenvik.git`
   - `cd fed24d-the-zoo-M-Lenvik`

2. **Installera alla beroenden**
   Projektet är ett Vite-projekt. Kör följande kommando för att installera alla nödvändiga paket enligt package.json:

```shell
npm install
```

3. **Starta localhost**
   Projektet kör nu lokalt på localhost:5173 (eller annan port om 5173 är upptagen). Navigera till projektets rotmapp och kör:

```shell
npm run dev
```

💡 **Tips:** Se till att du har Node.js och npm installerat innan du börjar.

4. **Bygga för produktion**
   För att bygga projektet för produktion:

```shell
npm run build
```

5. **Förhandsgranska produktionsbygg**
   För att förhandsgranska produktionsversionen:

```shell
npm run preview
```

## 💻 Teknikstack
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white) <br>
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) <br>
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) <br>
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

**Tekniska val och motiveringar:**

**React:** Dess komponentbaserade arkitektur med funktionella komponenter och hooks uppmuntrar återanvändbar kod och tydlig separation of concerns. React 19 används med funktionella komponenter och hooks för state management.

**TypeScript:** Lägger till kompileringstid-typsäkerhet, fångar fel under utveckling snarare än i produktion och förbättrar utvecklarupplevelsen. Alla komponenter, helpers och services är fullt typade.

**Vite:** Fungerar som byggverktyg och utvecklingsserver, erbjuder betydligt snabbare start och hot module replacement jämfört med äldre bundlers. Konfigurerad för React med TypeScript.

**SCSS (Sass):** Används för styling med variabler, mixins, nesting och en BEM-inspirerad namngivningskonvention. Designen följer en mobile-first responsiv approach med breakpoints för olika skärmstorlekar.

**React Router:** Client-side routing hanteras med createHashRouter, vilket är nödvändigt för korrekt routing på GitHub Pages statisk hosting, vilket möjliggör en flersidig upplevelse inom en single-page application-arkitektur. Router använder layouts, child-routes och error-element för en strukturerad navigationsupplevelse.

**Context API + useReducer:** State management förlitar sig på Reacts Context API med en dedikerad animalReducer. Detta tillvägagångssätt ger en tydlig och skalbar statestruktur, håller arkitekturen enkel och lämplig för projektets omfattning. Reducer hanterar åtgärder för att sätta djur, mata djur och återställa matningsstatus.

**localStorage:** Djurens matningsstatus sparas lokalt med localStorage, vilket undviker behovet av backend-infrastruktur samtidigt som data förblir sparad mellan sessioner på samma enhet och webbläsare.

**REST API:** Djurdata hämtas från ett externt API (https://animals.azurewebsites.net/api/animals) via en service-funktion som hanterar fel gracefully och returnerar säkra fallback-värden.

**Tekniska referenser:**
- React 19 dokumentation
- TypeScript dokumentation
- Vite dokumentation
- React Router dokumentation (createHashRouter för GitHub Pages)
- SCSS/Sass dokumentation

## Uppgiftsbeskrivning
# The Zoo

I denna inlämningsuppgift kommer ni att bygga ett zoo. Zoo:t har ett antal djur som kommer behöva matas.

Er uppgift kommer att göra en startsida till zoo:t. Denna bör vara väl genomtänkt grafiskt, ha en tydlig uppgyggnad
och använda sig av så många css-tekniker ni har lärt er som möjligt.

På startsidan skall det någonstans finnas en länk till en djur-sida där besökare kan se vilka djur som finns och en
kort beskrivning av varje djur tillsammans med en bild. Tyvärr har några av djurens bilder blivit fel och dessa behöver
ni hantera på ett bra sätt.

När en användare klickar på ett djur kommer användaren till en djur-sida där bara ett djur presenteras. Här kommer det
finnas mer information om djuret än det fanns på översiktssidan. Presentationen bör fortfarande hanteras på ett bra sätt
genom olika css-tekniker som ni har lärt er.

På djursidan kommer det att finnas en knapp för att mata ett djur. Följande regler gäller för matningen av ett djur:

- Om ett djur inte har fått mat på fyra timmar skall knappen Mata gå att klicka på.
- Om ett djur har fått mat inom fyra timmar skall knappen vara oklickbar.
- När ett djur inte har fått mat på tre timmar skall en indikation på att djuret snart behöver matas visas.

På översiktssidan för djuren skall det också vara synligt om ett djur är mätt, hungrigt eller i desperat behov av mat.
Men på denna översiktssida är tiderna lite annorlunda än för detaljsidan. Här gäller

- Om ett djur inte fått mat på tre timmar skall det visas en varning om att djuret snart behöver mat.
- Om ett djur inte har fått mat på fem timmar skall det visas en notis om att nu behöver djuret matas.

Exakt hur ni löser detta kommer att vara upp till er. Men, stäm av er lösning med mig så att jag kan komma med
förslag eller idéer om hur ni skulle kunna göra den annorlunda vid behov.

Djuren finns på följande url: https://animals.azurewebsites.net/api/animals

## Betygskriterier

### Betyg G

- Ni skall använda en router för att visa olika sidor i er applikation.
- I er routerlösning skall ni kunna använda olika koncept såsom layouts, child-routes och error-element korrekt.
- Ni behöver visa en översiktssida för djuren där det går att klicka på ett djur.
- Ni skall kunna mata ett djur på djur-detaljsidan och spara tiden när djuret matades.
- Ni hanterar trasiga bild-länkar korrekt.
- Ni behöver använda någon annan teknik än ren css för styling i denna uppgift. Det kan vara tailwind, scss, material ui eller någonting annat.

### Betyg VG

- Samtliga krav från betyg G skall vara uppfyllda.
- Ni behöver välja att antingen hämta data med hjälp av begreppet tjänster eller en custom hook.
- Ni behöver använda er av context istället för props för att kommunicera mellan komponenter.
- Ni behöver använda er av reducers istället för state för hanteringen av djur.
- När ni har matat ett djur och kommer tillbaka till djur-sidan skall eventuellt matningen nollställas, om rätt villkor angående tiderna här ovan stämmer.
- På översiktsidan skall djurens status presenteras på ett diskret sätt beroende på tiderna beskriva här ovan.
- Ni använder er av subtila animeringar vid klick på knappar, eventuellt sidladdningar och route-förändringar samt där ni känner att det behövs

## Övrigt

Kom ihåg att stämma av de idéer ni har med mig innan ni börjar koda. Ofta finns det någonting som behöver itereras några gånger och det är bra att göra
detta innan ni kommer för långt i er tänkta lösning.

Rita gärna upp er lösning så ni enklare förstår hur ni skall dela upp era komponenter och förstå hur kommunikationen mellan komponenter sker.

Välj en teknik gällande css som ni antingen vill lära er mer om eller som ni tycker är rolig och håll er till ert val genom projektet, även om det verkar som att saker inte fungerar som ni vill. Det kan vi lösa tillsammans.

Ha roligt, skratta och lär er massor!


## Projektbeskrivning
### Funktionalitet

**Steg 1: Startsida**
Användare börjar på startsidan där syftet med applikationen presenteras. Härifrån kan de navigera till översikten över alla djur eller till informationssidan.

**Steg 2: Djuröversikt**
I djuröversikten visas alla djur från API:t i en grid-layout. Varje djur presenteras med:
- Bild (med hantering av trasiga bildlänkar)
- Namn och kort beskrivning
- Visuell statusindikation baserat på matningsstatus:
  - **Mätt:** Djuret har fått mat inom de senaste 3 timmarna
  - **Hungrig:** Djuret har inte fått mat på 3-5 timmar (varning visas)
  - **Desperat:** Djuret har inte fått mat på över 5 timmar (notis visas)

Användare kan klicka på ett djur för att navigera till dess detaljsida.

**Steg 3: Djurdetaljsida**
På detaljsidan presenteras omfattande information om det valda djuret:
- Stor bild med djurets namn
- Latinskt namn och födelsedatum
- Kort och lång beskrivning
- Matningsstatus med tydlig textbeskrivning
- Tidpunkt för senaste matning
- "Mata"-knapp som är:
  - **Aktiverad:** Om djuret inte har fått mat på minst 4 timmar
  - **Inaktiverad:** Om djuret har fått mat inom 4 timmar (med visning av återstående tid)
- Varning om djuret börjar bli hungrigt (efter 3 timmar)

När användaren matar ett djur uppdateras matningstiden och statusen ändras omedelbart.

**Steg 4: Om-sida**
En informationssida som beskriver projektet och dess syfte.

**Ytterligare funktioner:**
- Automatisk uppdatering av matningsstatus i realtid
- Persistens av matningsdata mellan sessioner via localStorage
- Felhantering för trasiga bildlänkar med fallback-bilder

### Arkitektur

Applikationen följer en tydlig separation of concerns med fyra huvudlager:

**Services (src/services/)**
Ansvarar för att hämta djurdatan från det externa API:t. `animalService.ts` hanterar fetch-anrop, felhantering och returnerar alltid säkra fallback-värden (tom array vid fel) för att förhindra att applikationen kraschar.

**Helpers (src/helpers/)**
Organiserade efter ansvar:
- `feeding.ts` – matningslogik och statusberäkningar (tidsberäkningar, statusbestämning för översikt vs detalj, textformatering)
- `image.ts` – bildhantering med fallback för trasiga bildlänkar

**Global State – Context + Reducer (src/context/, src/reducers/)**
All djurstatus hanteras genom AnimalContext och animalReducer.
- Åtgärder uppdaterar status oföränderligt
- Varje statusändring sparas automatiskt till localStorage
- Sparad status återställs vid appladdning
- Reducer hanterar: SET_ANIMALS, FEED_ANIMAL, RESET_FEEDING_STATUS

**Components och Pages (src/components/, src/pages/)**
- Pages är routade vyer som komponerar komponenter
- Components är återanvändbara eller sidspecifika byggstenar
- Varje komponent har sin egen .tsx och .scss
- Komponenter är organiserade i feature-baserad struktur: `AnimalCard/`, `ZooList/`, `StartPage/`, `Header/`, `About/`


**Datamodell:**
- **Animal-modell** innehåller: id, name, latinName, yearOfBirth, shortDescription, longDescription, imageUrl, medicine, isFed, lastFed
- **State** innehåller: array av Animal-objekt med uppdaterade matningstider


## 🏆 Slutbetyg
**Betyg: Väl Godkänt**
<br>
<img width="508" height="305" alt="Betyg_the_zoo" src="https://github.com/user-attachments/assets/e198bae3-1559-4e12-abda-a13b773939ab" />

## Bilder

<details>
<summary><strong>Skärmdumpar från webbplatsen</strong></summary>

**Startsida**
![Startsida med introduktion](public/images/first_page.png)

**Djuröversikt**
![Översikt över alla djur](public/images/animals.png)

