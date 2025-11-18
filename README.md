# Laboratorium Frameworki Frontendowe (Vite / React)

Projekt ten stanowi realizację laboratoriów (Lab 1-5) z przedmiotu "Frameworki Frontendowe". Aplikację zbudowałem przy użyciu ekosystemu React i Vite, kładąc nacisk na czystą architekturę kodu oraz profesjonalne standardy deweloperskie.

Kod źródłowy został w pełni udokumentowany (JSDoc w języku angielskim dla zachowania uniwersalności), a historia zmian w systemie Git odzwierciedla postępy prac nad poszczególnymi zadaniami.

## Główne Technologie

- React 19 (wykorzystanie hooków i komponentów funkcyjnych)
- Vite (jako nowoczesne narzędzie budujące i serwer deweloperski)
- React Router DOM v7 (routing po stronie klienta)
- Bootstrap v4.1.2 (globalne style CSS)
- React-Bootstrap v2 (biblioteka komponentów UI)
- React Hook Form (obsługa i walidacja formularzy)
- PropTypes (walidacja typów danych w komponentach)
- ESLint (statyczna analiza kodu)

## Implementacja Laboratoriów

Projekt podzieliłem na historyczne gałęzie (branche) Git, które służą podglądu każdego etapu pracy. Gałąź `main` zawiera aktualną, scaloną wersję wszystkich zadań.

### Laboratorium 1: Komponenty i Właściwości

- Zaimplementowałem podstawowe komponenty (`ProfileCard`, `ProfileParagraph`).
- Stworzyłem skrypt do generowania danych (`module-data-generator.cjs`).
- Zintegrowałem style `bootstrap` z komponentami Reacta.

### Laboratorium 2: Routing i Struktura Projektu

- Wdrożyłem `react-router-dom` do obsługi nawigacji SPA (Single Page Application).
- Zaprojektowałem hierarchiczny układ aplikacji (`RootLayout`, `<Outlet>`).
- Stworzyłem strony widoków (`Home`, `Lab01`, `NotFound`) oraz obsługę parametrów URL (`Lab02` ze szczegółami profilu).

### Laboratorium 3: Zarządzanie Stanem (useReducer)

- Stworzyłem generyczny komponent kontenera (`MyContainer`).
- Zaimplementowałem złożoną logikę stanu (akcje `rate`, `check`, `delete`) przy użyciu hooka `useReducer`.
- Rozbudowałem kartę profilu (`ProfileCardV2`) i dodałem komponent oceny (`RatingBar`).

### Laboratorium 4: Kontekst API i Formularze

- Przeprowadziłem refaktoryzację stanu globalnego, przenosząc `useReducer` do `AppContext`, co wyeliminowało problem "prop drilling".
- Stworzyłem formularz dodawania z walidacją przy użyciu React Hook Form.
- Implementacja formularza edycji osoby przy użyciu czystego JavaScriptu i FormData (zgodnie z wymogami laboratorium).
- Integracja obu formularzy z AppReducer (akcje `add` i `edit`).

### Laboratorium 5: useEffect i Własne Hooki

- Napisałem własne hooki `useData` i `useDispatch` dla czystszego dostępu do kontekstu.
- Zaimplementowałem hook `useFetch` do asynchronicznego pobierania danych z API (JSONPlaceholder).
- Zbudowałem zaawansowany widok tabeli z sortowaniem po stronie klienta (`TableDataReducer`) i zagnieżdżonymi danymi.

## Kluczowe Decyzje Projektowe i Odstępstwa

Podczas realizacji projektu podjąłem kilka świadomych decyzji architektonicznych, ulepszając rozwiązania sugerowane w instrukcjach na rzecz bardziej współczesnych standardów.

### 1. Integracja Bootstrap (Lab 2):

- Instrukcja: Sugerowała dołączenie skryptów JS Bootstrapa przez tagi `<script>` w `index.html`.
- Moje rozwiązanie: Zrezygnowałem z tego podejścia. Zainstalowałem `bootstrap` i `react-bootstrap` przez NPM. Dzięki temu unikam konfliktów typów MIME, a bundler (Vite) ma pełną kontrolę nad zależnościami projektu.

### 2. Routing (Lab 2):

- Instrukcja: Zawierała nieścisłości w nazwach pakietów (`react-router`).
- Moje rozwiązanie: Od początku używam `react-router-dom`, co jest standardem dla aplikacji webowych. Zastosowałem również nowoczesne podejście do definiowania tras (zagnieżdżone `<Route>` wewnątrz `App.jsx`).

### 3. Walidacja Typów (PropTypes):

- Problem: Czysty JavaScript nie zapewnia weryfikacji typów propsów, co może prowadzić do błędów.
- Moje rozwiązanie: W każdym komponencie przyjmującym propsy zaimplementowałem walidację za pomocą `prop-types`. Zwiększa to czytelność kodu i ułatwia debugowanie, stanowiąc dobrą alternatywę dla TypeScriptu w mniejszych projektach.

### 4. Architektura Katalogów

- Zastosowałem podział na `components/common`, `components/layout`, `components/profile` oraz dedykowane foldery `hooks`, `context` i `data`. Zapewnia to lepszą skalowalność projektu niż trzymanie wszystkiego w jednym folderze.

## Uruchomienie Projektu

### 1. Sklonuj repozytorium:

```
git clone https://github.com/MateuszCaputa/frontend-frameworks-lab-vite.git
```

### 2. Przejdź do folderu projektu:

```
cd frontend-frameworks-lab-vite
```

### 3. Zainstaluj zależności:

```
npm install
```

### 4. Uruchom serwer deweloperski:

```
npm run dev
```
