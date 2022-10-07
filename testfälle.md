# Testfälle

## Testfall 1: Tasks anzeigen
- WENN  Auf Tasks-Seite /index.html
- DANN  Alle Tasks werden angezeigt

## Testfall 2: Eine neue Task hinzufügen
- WENN  Auf Add Task-Seite /addTask.html
        Namen der Task ins Einput-Feld eingeben
        Auf den Button Add Task klicken
- DANN  Eine neue Task wird zur Liste hinzugefügt

## Testfall 3: Eine bestehende Task bearbeiten
- WENN  Auf Tasks-Seite /index.html
        Entweder die Checkbox makrkieren, um task als beendet kennzuzeichnen, 
        oder change Title Button klicken, dann neuen Titel eingeben und dann Save Button klicken
- DANN  Die Tasks sollten bearbeitet wieder abgespeichert werden

## Testfall 4: Eine bestehende Task löschen
- WENN  Auf Tasks-Seite /index.html
        Auf den roten Knopf mit einem Müll-Icon klicken
- Dann  Task sollte von der Liste gelöscht werden

## Testfall 5: Mittels Email und Passwort kann unauthentifizierter sich anmelden
- WENN  Auf Login Seite /login.html
        Beliebige Email eingeben
        Passwort m294 eingeben
        Login Button drücken
- DANN  Die Tasks von dem Benutzer werden angezeigt und auf der Login Seite wird angezeigt, dass man eingelogt ist

## Testfall 6: Als authentifizierter Benutzer kann man Tasks anzeigen, bearbeiten und löschen
- WENN  Angemeldet
        Auf Task Seite /index.html
- DANN  Man hat die Möglichkeit Tasks anzuzeigen, zu bearbeiten und zu löschen

## Testfall 7: Als Benutzer kann man direkt auf eine Aufgabe zugreifen$
- WENN  Angemeldet
        Auf Search Task Seite /search.html
        ID der Task eingeben
- DANN  Informationen zu der gesuchten Task werden angezeigt

## Testfall 8: Als Benutzer werde ich bei fehlerhaften Eingaben gewarnt (Es gibt mehrere Warnungen bei fehlerhaften Eingaben aber werde nur einer beschreiben)
- WENN  Nicht eingeloggt 
        Auf Login Seite /login.html
        Falschen Passwort eingeben
- DANN  Wrong Password wird als Fehlermeldung angezeigt

## Testfall 9: Als Benutzer werden mir Fehler auf eine benutzerfreundliche Art angezeigt (Es gibt mehrere Warnungen bei fehlerhaften Eingaben aber werde nur einer beschreiben)
- WENN  Auf Search Task Seite /search.html
        ID eingegeben wird, die nicht existiert
- DANN  Wird eine benutzerfreundliche Warnung gezeigt