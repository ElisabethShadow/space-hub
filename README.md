# Space Hub Dokumentation

## Einführung
Dieses Projekt besteht aus einem interaktiven Dashboard, das für die Web-Frontend-Aufgabe von Spacesquad entwickelt wurde. Das Dashboard ist unter Verwendung von Vue.js und SCSS gestaltet und verfügt über mehrere Widgets, Module und Komponenten für eine modulare und organisierte Architektur. Es folgt einem Mobile-First-Ansatz und demonstriert die API-Integration zur Datenabfrage und -anzeige.

## Projekteinstellungen
Um mit dem Projekt zu beginnen, führen Sie die folgenden Befehle im Stammverzeichnis des Projekts aus:

### Installation der Abhängigkeiten
```
npm install
```

### Kompiliert und lädt für die Entwicklung neu
```
npm run serve
```

### Kompiliert und minimiert für die Produktion
```
npm run build
```

### Lintet und korrigiert Dateien
```
npm run lint
```

### Anleitung zur Verwendung

1. Klonen Sie das Repository.
2. Installieren Sie die Abhängigkeiten mit `npm install`.
3. Starten Sie den Entwicklungsserver mit `npm run serve`.
4. Greifen Sie im Browser auf das Dashboard zu unter http://localhost:8080.


### Konfiguration anpassen
Weitere Informationen zur Anpassung der Konfiguration finden Sie in der Vue CLI Konfigurationsreferenz.


### Hauptmerkmale
- Mehrere Widgets: Der Ordner src/widgets enthält verschiedene Widgets, jedes mit seiner Funktionalität und seinem Zweck.
- Modulare Architektur: Der Ordner src/modules enthält Dashboard-Module und Layout-Komponenten, die eine skalierbare und wartbare Struktur bieten.
- Benutzerinteraktivität: Grundlegende interaktive Elemente wie Modals und Animationen sind in die Widgets integriert.
- Strukturierte Entwicklung: Das Repository pflegt eine saubere Commit-Historie, die auf einen systematischen Entwicklungsschwerpunkt hinweist.
- Technologie-Stack: Hauptsächlich entwickelt mit Vue.js und SCSS, im Einklang mit den technologischen Präferenzen von Spacesquad.

- Dieses Repository dient als Demonstration für die Verwendung von Vue.js zur Erstellung funktionaler und benutzerfreundlicher Web-Schnittstellen mit Schwerpunkt auf Modularität und Organisation.

### Projektstruktur

Die Struktur des Projekts ist klar definiert und ermöglicht eine effiziente Navigation und Verwaltung:

- **Öffentliches Verzeichnis (`public/`)**:
    - `index.html`: Die Einstiegspunkt-HTML-Datei für die Anwendung.
    - `icons`: Ordner, der Favicon und App-Symbole beinhaltet.

- **Src-Verzeichnis (`src/`)**: Beinhaltet den Quellcode der Anwendung.

    - **Assets (`assets/`)**:
        - **SCSS (`scss/`)**: Hier befinden sich die SCSS-Dateien für die Gestaltung der Anwendung.
            - `dashboard.scss`: Definiert Stile spezifisch für das Dashboard-Layout.
            - `globals.scss`: Enthält globale Stile, die in der gesamten App gelten.
            - `main.scss`: Die Haupt-SCSS-Datei, die alle anderen Stylesheets importiert.
            - `mixins.scss`: Bietet nützliche Mixins für wiederkehrende SCSS-Strukturen.
            - `variables.scss`: Beinhaltet SCSS-Variablen für einheitliche Gestaltungselemente wie Farben und Schriftgrößen.

    - **Komponenten (`components/`)**: Hier sind die Vue-Komponenten organisiert.
        - **Widgets (`components/widgets/`)**: Jedes Widget ist eine eigenständige Vue-Komponente.
            - `DailyRecipeWidget.vue`: Stellt tägliche Rezeptvorschläge dar.
            - `QuoteWidget.vue`: Zeigt täglich wechselnde Zitate an.
            - `SpaceWidget.vue`: Präsentiert weltraumbezogene Informationen oder Bilder.
            - `ToDoWidget.vue`: Dient als einfache To-Do-Liste für die Aufgabenverwaltung.
            - `WeatherWidget.vue`: Zeigt aktuelle Wetterinformationen an.

    - **Module (`modules/`)**: Beinhaltet wiederverwendbare Vue-Module.
        - `Dashboard.vue`: Das Haupt-Dashboard-Layout-Modul, das die Widgets organisiert.
        - `Sidebar.vue`: Die Navigationsleiste für das Umschalten zwischen Widgets.

    - **Router (`router/`)**: Konfigurationsdateien für das Vue-Router-Setup, das für zukünftiges Routing genutzt werden kann.

- **App.vue**: Die Wurzelkomponente, die das initiale Laden der Seite und die Einbindung der Hauptmodule koordiniert.

Jeder Teil der Struktur ist darauf ausgelegt, eine bestimmte Rolle innerhalb der Anwendung zu erfüllen, von der Darstellung bis hin zur Logik und dem Styling. Dies fördert die Best Practices der Softwareentwicklung und erleichtert es neuen Entwicklern, sich in das Projekt einzuarbeiten.

### Funktionen
- Interaktive Seitenleiste: In Sidebar.vue implementiert, ermöglicht die Navigation zwischen Widgets.
- Widgets: Jedes Widget ist eine eigenständige Vue-Komponente im Verzeichnis /components/widgets, die so gestaltet ist, dass sie Daten von verschiedenen APIs abruft und anzeigt.

### Entwicklungsleitfaden
-Ein neues Widget hinzufügen:
1. Erstellen Sie eine neue Vue-Datei in /components/widgets.
2. Gerüst für die Komponente mit Vorlagen-, Skript- und Style-Tags.
3. Definieren Sie die Datenstruktur und Methoden, die erforderlich sind, um Daten abzurufen und anzuzeigen.
4. Stilisieren Sie das Widget mit SCSS und stellen Sie sicher, dass es reaktionsfähig ist.

### SCSS-Styling: 
Wenn neue Stile hinzugefügt werden, verwenden Sie die vorhandenen SCSS-Dateien:
- Verwenden Sie variables.scss für neue SCSS-Variablen.
- Fügen Sie globale Stile zu globals.scss hinzu.
- Verwenden Sie mixins.scss für wiederverwendbare CSS-Eigenschaften.

### API-Integration
- Konfiguration: API-Schlüssel und Endpunkte sollten in der Datei .env gespeichert und über process.env in den Vue-Komponenten aufgerufen werden.
- Datenabruf: Verwenden Sie die Axios-Bibliothek oder die integrierten Methoden von Vue, um API-Aufrufe in den Widget-Komponenten durchzuführen.

### Mitwirken
- Codebeiträge: Beschreiben Sie den Prozess für das Einreichen von Code, einschließlich der Erstellung von Branches, Codierungsstandards und Pull-Request-Richtlinien.
- Problemberichterstattung: Geben Sie Anweisungen zur Berichterstattung über Probleme oder Fehler, einschließlich der Verwendung von GitHub Issues.

### FAQs
Zusammenstellung: Beantworten Sie häufig gestellte Fragen zum Projektsetup, zur Widget-Funktionalität und zu Datenquellen.

### Lizenz
Dieses Projekt ist unter der Creative Commons Zero v1.0 Universal -Lizenz lizenziert - siehe die Datei LICENSE.md für weitere Details.


Diese Dokumentation ist nun auf die bereitgestellte Projektstruktur zugeschnitten und sollte als umfassender Leitfaden für die Entwicklung und Nutzung des Space Hub-Dashboards dienen.
### Mitwirkende

Elisabeth Schaduw


