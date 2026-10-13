/* Automatisch aus dem geprüften Charakterbogen-Katalog erzeugt. */
const commonCommands=[
      ["!zauberreise volk [mensch|elf|halbelf|zwerg|halbling|gnom|halbork]","Wählt einmalig die dauerhafte Herkunft in der Schenke. Alle Klassen sind möglich; kein Fortschrittsreset, keine Kosten, kein Cooldown."],
      ["!zauberreise volk [liste|status]","Zeigt verfügbare Völker oder die eigene Herkunft und deren Boni."],
      ["!zauberreise angriff [Nr.] [kopf|flügel|klauen|waffe|runenkern]","Greift einen Gegner oder gezielt einen Körperbereich an. Ausgeschaltete Bereiche verändern dessen Angriff, Bewegung oder Spezialfähigkeit dauerhaft im Encounter."],
      ["!zauberreise verteidigen","Verbraucht im Kampf die eigene Rundenaktion und halbiert den nächsten Treffer; außerhalb eines Encounters wird kein Cooldown ausgelöst."],
      ["!zauberreise unterbrechen [Nr.]","Versucht eine angekündigte Gegnerabsicht passend zur eigenen Klasse zu unterbrechen."],
      ["!zauberreise hintergrund [gelehrter|straßenkind|soldat|händler|einsiedler]","Wählt einmalig die Vorgeschichte mit Startvorteil und passenden Boni auf spätere Entscheidungen."],
      ["!zauberreise jahreszeit [belohnung|kaufen …]","Zeigt die aktuelle Saisonquest, beansprucht die Belohnung oder kauft Teile des zeitlich passenden Saisonsets."],
      ["!zr auftragstafel [status]","Zeigt zeitweilige Spieleraufträge, Weltboss und Grabstätten. Diese Aufträge bilden keine dauerhafte Gruppe."],
      ["!zr auftragstafel anbieten [Material] [Anzahl] [Silberlohn]","Hängt einen dreitägigen Auftrag aus und hinterlegt den Lohn sicher. Annehmen, erfüllen oder als Auftraggeber abbrechen erfolgt über die Auftragskennung."],
      ["!zr zeugenaussage [prüfen a|b]","Vergleicht in der Schenke zwei widersprüchliche Aussagen. Bestätigte oder widerlegte Spuren erscheinen bei Gerüchten und Weltspuren."],
      ["!zr verhandeln [Gegner-Nr.]","Versucht im Kampf einen auf höchstens ein Drittel LP geschwächten Gegner zur Aufgabe zu bewegen. Kostet eine Aktion und Proviant; Erfolg bringt Hinweis, Moral und halbe EP statt Beute."],
      ["!zauberreise weltspuren","Zeigt Handlungen anderer Charaktere; fremde Weltspuren können Reisen am gleichen Ort erleichtern."],
      ["!zr npc pfade | handlung [Name] [beginnen|status|weiter|wahl]","Verfolgt Mirella, Elian, Ysra, Corvin, Moira und Garrik parallel. Fortschritt, Entscheidungen und bleibende Weltfolgen werden im Charakterbogen gespeichert."],
      ["!zr hinweis | hinweis teilen [Text] | schlussfolgerung [Antwort]","Verteilt unterschiedliche geheime Spuren an verschiedene Personen und belohnt das gemeinsame Zusammensetzen."],
      ["!zr rat [Vorschlag] [Begründung] | zustimmen|widersprechen @Name","Öffnet eine kurze Beratung zu Entscheidungen. Nur ein Rat und eine Reaktion pro Person werden gewertet."],
      ["!zr kundschaften | spur lesen | wetter deuten | lager sichern | botengang","Übernimmt während einer Reise eine einmalig besetzbare Zuschauerrolle."],
      ["!zr tischrunde [Antwort] | lager geschichte [Text]","Teilt kurze Rollenspielantworten. Drei verschiedene Stimmen erzeugen einen Gemeinschaftsbonus."],
      ["!zr bindung anbieten @Name [Art] | bindung annehmen","Knüpft dauerhafte Beziehungen wie Reisegefährten, Rivalen, Schuld, Mentorenschaft oder Schwurgeschwister."],
      ["!zr unterstützen [NPC] | auftrag geben @Name [Aufgabe] | nachricht für @Name [Text]","Unterstützt NPC-Geschichten oder ermöglicht direkte Zusammenarbeit und Schenkenpost zwischen Charakteren."],
      ["!zr begegnungshilfe [ablenken|vermitteln|warnen|versorgen] | wochenchronik","Lässt unterschiedliche Zuschauer eine Begegnung verändern und zeigt den Gemeinschaftsrückblick der Woche."],
      ["Whisper: !gastnpc [beschreibung|name|rolle|art|geheimnis|bestätigen|sprechen|aufgabe]","Bearbeitet und spielt den über die Kanalpunktebelohnung erstellten Gast-NPC privat; nur kurze atmosphärische Szenen gelangen in den öffentlichen Chat."],
      ["!zauberreise fund | fund zurückkehren | fund hilfe","Zeigt den vorgemerkten Fund, reist für 1 Proviant gezielt dorthin zurück oder ruft von dort eine passende Diebesklasse. Normale Reisen bleiben parallel möglich."],
      ["!zauberreise handeln @Name [Ware]","Verschenkt nach Bestätigung Silber, Runen, Proviant, Materialien, Heiltränke einer Qualität oder eine Ausrüstung per Inventarnummer."],
      ["!zauberreise handeln @Name tauschen [Ware] gegen [Ware]","Erstellt einen sicheren direkten Tausch. Beide Besitzseiten werden bei der Bestätigung erneut geprüft."],
      ["!zauberreise handel bestätigen | ablehnen","Nimmt das persönliche Handelsangebot innerhalb von zehn Minuten an oder lehnt es ab."],
      ["!zauberreise handel liste | zurückziehen @Name","Zeigt eigene ein- und ausgehende Angebote oder zieht ein noch offenes Angebot zurück."],
      ["!zauberreise marktstand zurückziehen [Nr.]","Nimmt das eigene Marktangebot zurück. Nach sieben Tagen werden alte Angebote automatisch zurückgegeben."],
      ["!gerüchte teilen @Name [Gerücht]","Teilt einen eigenen Hinweis. Pro Gerücht kann nur ein geteilter Hinweis empfangen werden; der dritte Hinweis muss selbst gefunden werden."],
      ["!gerüchte anbieten @Name [eigenes] [gesuchtes]","Bietet einen gezielten Hinweistausch an. Das Angebot bleibt zehn Minuten gültig."],
      ["!gerüchte tauschen annehmen","Nimmt das aktuelle Tauschangebot an. Danach gilt für beide Beteiligten die 30-minütige Austauschsperre."],
      ["!gerüchte lauschen | fragen | getränk [bier|met|wein|wasser]","Reagiert binnen vier Minuten auf ein offenes Tischgespräch. Getränke kosten Silber und erhöhen unterschiedlich stark die Erfolgschance; eine glaubhaft klingende Geschichte kann trotzdem falsch sein."],
      ["!zauberreise zimmer","Zeigt Zimmerstatus und Heilungsraten. Live steigt die Regeneration von +2/+1 auf +3/+2 im Schankraum und von +5/+3 auf +6/+4 im Zimmer."],
      ["!zauberreise zimmer buchen [2|4|6|8]","Bucht in der Schenke 2 bis 8 Stunden stufenunabhängige Erholung für 9 Silbermünzen je Stunde."],
      ["!bestiarium","Öffnet das persönliche, bebilderte Bestiarium mit freigeschalteten Gegnerkenntnissen."],
      ["!zimmer","Öffnet das persönliche Schenkenzimmer mit Ausrüstung, Begleiter und Trophäen."],
      ["!gerüchte status | untersuchen","Zeigt gesammelte Hinweise oder sucht nach einer neuen Spur; drei passende Hinweise schalten eine Entdeckung frei."],
      ["!rätsel start | status | lösung [Wörter]","Beginnt eine zweiminütige Rätselkammer, verteilt Klassenhinweise per Whisper und prüft die gemeinsame Lösung."],
      ["!helfer [Rolle] [@Gruppenleitung]","Unterstützt einen laufenden Gruppenkampf einmalig als Bote, Kundschafter, Schankhilfe, Stallmeister, Chronist oder Händlergehilfe."],
      ["!schicksal links|rechts|geradeaus","Stimmt während eines automatischen Schicksalsrats über den nächsten Weg ab; bei Gleichstand entscheidet das Los."],
      ["!rettung helfen","Trägt während einer Rettungsmission zum Gemeinschaftsfortschritt für gefallene Abenteurer bei."],
      ["!karawane ansehen|handeln","Nutzt das zeitlich begrenzte Angebot einer wandernden Karawane."],
      ["!monster feuer|sturm|rufen","Bestimmt während eines freigegebenen Bossmoments gemeinsam das nächste Monstermanöver."],
      ["!belagerung kämpfen|heilen|bauen|löschen|retten","Verteidigt gemeinsam die ausgebaute Schenke."],
      ["!vorbereiten status|fackel|werkzeug|seil","Prüft und ergänzt die persönliche Expeditionsausrüstung."],
      ["!reaktion ausweichen|schild|entschärfen|magie|prüfen|öffnen","Reagiert innerhalb weniger Sekunden auf Fallen oder einen Mimic."],
      ["!turnier teilnehmen","Nimmt an einem zeitlich begrenzten Schenkenturnier teil."],
      ["!gemeinschaft anfeuern|beten|warnen|lied","Füllt einmalig die gemeinsame Hilfsleiste eines laufenden Ereignisses."],
      ["!abendziel","Zeigt das gemeinsame Abenteuerziel des aktuellen Streamabends."],
      ["!zauberreise fraktion [Name]","Tritt Runenakademie, Diebesgilde, Heilerorden, Königlicher Wache, Bardenvolk oder Drachenjägern bei. Ein späterer Wechsel kostet Silber."],
      ["!zauberreise fraktionsauftrag","Nimmt eine Fraktionsmission an, zeigt den Fortschritt oder beansprucht Ruf, Silber und Runen als Belohnung."],
      ["!zauberreise questkette","Setzt die persönliche, klassenspezifische Langzeitgeschichte fort."],
      ["!zauberreise titel [Titel]","Zeigt freigeschaltete Erfolge und wählt einen sichtbaren Charaktertitel."],
      ["!zauberreise beziehungen","Zeigt Freundschaften und andere Bindungen aus gemeinsamen Abenteuern."],
      ["!zauberreise handeln @Name [Besitz] [Anzahl]","Erstellt ein sicheres Handelsangebot für Silber, Runen, Proviant oder Heiltränke."],
      ["!zauberreise handel bestätigen|ablehnen","Nimmt ein persönliches Handelsangebot an oder weist es zurück; beim Abschluss wird der Besitz erneut geprüft."],
      ["!zauberreise auktion [bieten Betrag]","Zeigt den wandernden Auktionshändler oder gibt ein bezahlbares Gebot für dessen seltenes Relikt ab."],
      ["!zauberreise weltboss [angriff]","Zeigt das zeitlich begrenzte Gemeinschaftsereignis oder greift den Weltboss an. Belohnungen richten sich nach dem persönlichen Beitrag."],
      ["!zauberreise begleiter talent [Name]","Wählt ab Begleiterstufe 3 eines von zwei artspezifischen Talenten."],
      ["!zauberreise passen","Setzt die eigene Aktion im Gruppenkampf aus, lässt die Runde fortschreiten und verursacht vorübergehend −2 auf Angriffe."],
      ["!zauberreise notration","Fordert bei leerem Proviant einmal pro Encounter Hilfe aus der ausgebauten Schenken-Vorratskammer an; verbraucht keine Aktion."],
      ["!zauberreise schenke","Zeigt Stufen und gemeinsamen Silberfortschritt aller Schenken-Ausbaupfade."],
      ["!zauberreise schenke spenden [Silbermünzen] [Ausbau]","Stiftet Silbermünzen für Heilung, Handel, Aufträge, Gruppe, Boten, Stall oder Vorrat. Jeder Bereich besitzt fünf Stufen."],
      ["!zr npc liste | npc sprechen [Nr.]","Zeigt Schenkengäste, Aufgaben und persönliche Wiederbegrüßungen."],
      ["!zr npc ambiente","Lauscht einer von 16 Schenken-Alltagsszenen mit passendem NPC-Porträt. Zwei Minuten Szenenabstand, kein Reise-Cooldown."],
      ["!zr npc geschichte [Nr.] [status|weiter|vertrauen|zweifeln]","Drei fortlaufende Kapitel; nach Kapitel eins Haltung wählen. Zehn Minuten zwischen Kapiteln, NPC-Quest für das Ende."],
      ["!zr npc ermittlung [start|spuren|fragen|lösen]","Schenkenfall prüfen; lösen [kellerwicht|händler|katze] nach Spuren und Aussagen. 15 Silber, höchstens einmal täglich."],
      ["!zr npc abend [status|beitreten|kaufen]","Zeitlich begrenzte Live-Abende mit Würfeln, Geschichten oder Händler. Kaufen nur beim Händler; automatische Auswertung nach drei Minuten."],
      ["!zr npc annehmen [Nr.] | npc status | npc abgeben","Nimmt eine persönliche NPC-Quest an, zeigt ihren Fortschritt oder übergibt die erfüllte Aufgabe in der Schenke."],
      ["!zauberreise arbeit liste | liste arbeit","Zeigt alle zeitbasierten Schenkenarbeiten mit Laufzeit und Silberlohn."],
      ["!zauberreise arbeit [putzen|holz|kueche|stall|bote]","Übernimmt eine zeitbasierte Arbeit in der Schenke. Nach Ablauf schreibt der Zeitwächter den Silberlohn automatisch gut; Status und Abbruch sind jederzeit möglich."],
      ["!zauberreise herkunft [dorf|stadt|wald|berge|wandernd]","Wählt einmalig die Herkunft, die persönliche Erzählungen und Aufgaben prägt."],
      ["!zauberreise motivation [ruhm|wissen|reichtum|schutz|freiheit]","Wählt einmalig den inneren Antrieb des Charakters."],
      ["!zauberreise spezialisierung [Pfad]","Wählt ab Stufe 5 einen von zwei Klassenpfaden."],
      ["!zauberreise position [vorne|mitte|hinten]","Legt die persönliche Position für Gruppenbegegnungen fest."],
      ["!zauberreise unterbrechen [Gegnernummer]","Verhindert bei Erfolg eine angekündigte, zur eigenen Klasse passende Gegnerfähigkeit."],
      ["!zauberreise identifizieren [Inventarnummer]","Untersucht unbekannte Beute und deckt Werte sowie mögliche Flüche auf."],
      ["!zauberreise museum [status|spenden Nr.]","Zeigt das Gemeinschaftsmuseum oder stiftet ein Erinnerungsstück."],
      ["!zauberreise rückblick","Der Chronist fasst die wichtigsten jüngsten Ereignisse zusammen."],
      ["!zauberreise wetter","Zeigt Jahreszeit, Wetter, Tageszeit, Vollmond und aktuelle Auswirkungen."],
      ["!zauberreise profil","Zeigt Werte, Leben, Silbermünzen, seltene Runen und Ausrüstung im Chat."],
      ["!zauberreise ruf","Zeigt den dauerhaften Ruf bei allen Fraktionen sowie den aktuellen Händlerpreis-Vorteil oder -Aufschlag."],
      ["!zauberreise begleiter","Zeigt den aktiven Begleiter und alle verfügbaren Arten. Im Kampf würfelt der aktive Begleiter automatisch eigene Initiative, Ziel, Treffer, kritischen Treffer und Schaden."],
      ["!zauberreise begleiter wählen [Art]","Wählt einen freigeschalteten Begleiter. Der Packesel ist sofort verfügbar."],
      ["!zauberreise begleiter name [Name]","Gibt dem aktiven Begleiter einen persönlichen Namen."],
      ["!zauberreise begleiter füttern [Art]","Verbraucht 1 Proviant und versorgt den aktiven Begleiter oder gezielt den zusätzlich mitgeführten Packesel."],
      ["!zauberreise begleiter heilen","Verbraucht einen eigenen Heiltrank und heilt einen verletzten Begleiter vollständig."],
      ["!zauberreise reise wald","Beginnt eine Einzelreise; der erste Aufbruch aus der Schenke ist immer ohne Cooldown. Im Kampf entsteht ein Gegner."],
      ["!zauberreise angriff [Nr.]","Greift im Kampf an. In Gruppen wählt die Nummer einen bestimmten Gegner."],
      ["!zauberreise heilen [Qualität]","Verbraucht einen eigenen Heiltrank zur Selbstheilung; zählt im Kampf als Aktion."],
      ["!zauberreise heilen @Name [Qualität]","Verwendet einen eigenen Trank für genau ein Gruppenmitglied; zählt als Aktion."],
      ["!zauberreise händler","Zeigt klassenspezifische Ausrüstung und Heiltränke."],
      ["!zauberreise inventar","Zeigt angelegte Gegenstände, Boni und Tränke."],
      ["!zauberreise gruppe erstellen","Gründet eine Gruppe; andere treten über den Namen der Leitung bei."],
      ["!zauberreise gruppe verlassen","Verlässt eine Gruppe friedlich außerhalb eines Kampfes. Die Gruppenleitung wird bei Bedarf übertragen."],
      ["!zauberreise gruppe auflösen","Löst als Gruppenleitung die gesamte Gruppe außerhalb eines Kampfes auf."],
      ["!zauberreise gruppenreise wald","Startet als Gruppenleitung ein gemeinsames Abenteuer; der erste Aufbruch aus der Schenke ist immer ohne Cooldown."],
      ["!zauberreise wahl [Option]","Wählt bei einer offenen Fertigkeitsprobe eine Vorgehensweise. In Gruppen zählt dies als persönliche Stimme."],
      ["!zauberreise wahl auswerten","Wertet als Gruppenleitung eine laufende Abstimmung vorzeitig aus; sonst geschieht dies nach allen Stimmen automatisch."],
      ["!zauberreise talent","Zeigt freie Talentpunkte sowie die verfügbaren Talente der eigenen Klasse."],
      ["!zauberreise talent [Name]","Erlernt mit einem freien Talentpunkt dauerhaft das gewählte Klassentalent."],
      ["!zauberreise flucht","Beendet einen Einzelkampf oder entfernt dich aus einem laufenden Gruppenkampf. Dabei gehen eine Rundenration und zusätzlich 25 % des verbleibenden Proviants verloren."],
      ["!zauberreise nach hilfe suchen","Schickt im Kampf einen Boten zur Schenke. Je nach Gefahr werden gezielt Magie, Heilung, Kampfkraft, Bardengesang oder Diebeskunst gesucht."],
      ["!zauberreise hilfeleisten @Anführer","Folgt einem Hilferuf, wenn deine Klasse gesucht wird; der Weg zum Kampf oder Fundort braucht Zeit."],
      ["!zauberreise lehrmeister","Kauft nur in der Schenke bei der eigenen Lehrperson den verdienten Stufenaufstieg."],
      ["!zauberreise kaufen proviant [Anzahl]","Kauft beim Händler eine frei wählbare Anzahl für jeweils 4 Silbermünzen pro Ration."],
      ["!zauberreise proviant kaufen [Anzahl]","Kauft direkt in der Schenke die gewünschte Anzahl für jeweils 4 Silbermünzen; ohne Proviant bleibt das Nachkaufen möglich."],
      ["!zauberreise proviant @Name","Überträgt genau eine eigene Ration auf einen anderen Charakter. Im Kampf zählt dies als Aktion und verbraucht zusätzlich die eigene Rundenration."],
      ["!zauberreise karte zusammensetzen","Verbraucht drei Kartenfragmente und schaltet einen dauerhaften Geheimweg frei."],
      ["!zauberreise reise geheimweg [Nummer]","Bereist den in der Kartenübersicht gewählten Geheimweg als mehrstufigen Verliespfad."],
      ["!zauberreise einführung","Führt in sechs Schritten durch Geschlecht, Klasse, Herkunft, Hintergrund, Motivation und die erste gewonnene Begegnung."],
      ["!zauberreise wochenauftrag","Zeigt oder beansprucht den persönlichen Wochenauftrag."],
      ["!zauberreise kampagne","Zeigt die gemeinsame Wochenchronik. Sie erzeugt keine dauerhafte Spielergruppe."],
      ["!zauberreise post [abholen]","Zeigt Botenpost oder holt gespeicherte Offline-Belohnungen sicher ab."],
      ["!zauberreise ruhmeshalle","Zeigt die erfolgreichsten Charaktere nach Begegnungssiegen."],
      ["!zauberreise genesung [behandeln]","Zeigt und behandelt dauerhafte Verletzungen in der Schenke."],
      ["!zauberreise lager","Rastet außerhalb eines Kampfes gegen 2 Proviant, heilt LP und kann eine Verletzung lindern."],
      ["!zauberreise anzeige [kompakt|normal]","Wählt kürzere oder normale Chat-Teilnachrichten."],
      ["!zauberreise drachenabenteuer status","Prüft Besetzung, Klassen und Tränke einer angenommenen Drachenjagd."],
      ["!duell / !spell","Das bestehende Magierduell bleibt unverändert und gewährt begrenzt +2 bzw. +1 auf die nächste Zauberreise-Probe."],
      ["!prost","Der bestehende Trinkspruch schenkt begrenzt +1 Schenkenmut für die nächste Probe."],
      ["!dance / !tanzen mit @Name","Der bestehende Tanz stärkt dich und einen vorhandenen Zielcharakter begrenzt mit je +1."],
      ["!hug / !cuddle / !highfive / !herzen @Name","Die bestehenden sozialen Commands stärken beide vorhandenen Charaktere begrenzt mit je +1."],
      ["!bday @Name","Der bestehende Geburtstagsgruß verleiht dem Charakter einmal im Kalenderjahr +3 auf die nächste Probe."]
      ,["!zauberreise reparieren|aufladen|zerlegen|verkaufen [Nr.]","Verwaltet Haltbarkeit, Runenladungen und Gegenstände im Lager."]
      ,["!zauberreise beruf [schmied|alchemie|kräuter|kochen|verzauberung|leder]","Wählt einmalig einen Handwerksberuf und erlernt dessen Grundrezept."]
      ,["!zauberreise handwerk rezepte","Zeigt bekannte Rezepte und die jeweils benötigten Zutaten."]
      ,["!zauberreise materialien","Zeigt den persönlichen Bestand aller Handwerksmaterialien."]
      ,["!zauberreise handwerk","Stellt das Grundrezept des gewählten Berufs her, verbraucht die Zutaten und würfelt die Qualität."]
      ,["!zauberreise forschen [Material]","Verbraucht ein Material, sammelt Erkenntnispunkte und schaltet schrittweise neue Forschungsrezepte frei."]
      ,["!zauberreise erzfeind","Zeigt den aus einer schweren Niederlage entstandenen persönlichen Erzfeind und die Rivalitätsstufe."]
      ,["!zauberreise zuschauerhilfe [bote|späher|chronist|fackel|händler] [@Leitung]","Unterstützt eine kämpfende Gruppe mit einer passenden Zuschauerrolle; jede Person besitzt 20 Minuten persönlichen Cooldown."]
      ,["!zauberreise beute bedarf|gier|passen","60-Sekunden-Gruppenbeute; bei Gleichstand entscheidet das Los."]
      ,["!zauberreise rolle [Rolle] / rasten","Übernimmt Vorhut, Kundschaft, Versorgung oder Nachhut beziehungsweise rastet gegen Proviant."]
      ,["!zauberreise karte / kopfgelder / kapitel","Verwaltet Kartenfragmente, Jagdaufträge und Handlungskapitel."]
      ,["!zauberreise initiative","Zeigt im Gruppenkampf die ausgewürfelte Zugreihenfolge von Helden, Begleitern und Gegnern."]
      ,["!zauberreise formation [standard|schutzwall|keil|verstreut]","Die Gruppenleitung wählt eine Formation: Schutzwall senkt Schaden, Keil stärkt Angriffe und Verstreut mindert Flächenschaden."]
      ,["!zauberreise bestiarium","Zeigt dauerhaft beobachtete Gegner. Wiederholte Angriffe enthüllen LP, Fähigkeiten, Schwächen und Resistenzen."]
      ,["!zauberreise kampfbericht","Gibt die letzten Ereignisse des laufenden oder vergangenen Kampfes aus."]
      ,["!zauberreise pause | fortsetzen","Die Gruppenleitung pausiert einen Kampf mit sämtlichen LP, Gegnern und Runden oder setzt ihn später fort."]
      ,["!zauberreise zuschauerhilfe @Leitung","Auch Personen ohne aktiven Charakter können alle 20 Minuten als Bote einer kämpfenden Gruppe Moral bringen."]
      ,["!zauberreise abstimmung [Option]","Stimmt 60 Sekunden lang über eine automatisch und passend zur Einzel- oder Gruppenreise ausgelöste Entscheidung ab. Das Ergebnis wirkt auf den Reisenden oder die ganze Gruppe; Gleichstand wird ausgelost. Der Broadcaster kann weiterhin manuell mit zwei Optionen starten."]
      ,["!zauberreise jahreszeit / weltruf / weltboss","Zeigt Saisonereignis, dynamischen Gemeinschaftsruf und fortlaufenden Weltboss."]
      ,["!zauberreise discord [status]","Erzeugt einen einmaligen 15-Minuten-Code zur sicheren Verknüpfung mit dem persönlichen Discord-Konto."]
      ,["!zauberreise verpasst","Fasst neue persönliche Chronikeinträge seit der letzten Nachfrage zusammen."]
      ,["!zauberreise tagebuch","Schreibt aus dem jüngsten wichtigen Ereignis einen persönlichen atmosphärischen Tagebucheintrag."]
      ,["!zauberreise weltkarte","Öffnet die persönliche Live-Weltkarte mit Orten, laufender Reise und Entdeckungen."]
      ,["!zauberreise grabstätten / bergen [Nr.]","Zeigt Spuren gefallener Gruppen und ermöglicht spätere Rettungs- oder Bergungsreisen."]
      ,["!zauberreise marktstand [liste|anbieten Nr. Preis|kaufen Nr.]","Sicherer Spielermarkt für hergestellte und gefundene Ausrüstung."]
      ,["!zr [Befehl]","Kurze, gleichwertige Form von !zauberreise. Ohne Zusatz erscheinen nur die aktuell sinnvollen Befehle."]
      ,["!zauberreise gruppenlobby","Zeigt die nur für das aktuelle Abenteuer bestehenden Gruppenbanner und die öffentliche Live-Lobby."]
      ,["!zauberreise retten @Name","Verbraucht einen gewöhnlichen Heiltrank und rettet einen kampfunfähigen Charakter."]
      ,["!zauberreise wiederbeleben @Name","Heiler-Spezialritual mit einer Ration; bringt einen kampfunfähigen Charakter mit halben LP zurück."]
      ,["!zauberreise einstellungen [Bereich] [Wert]","Steuert Erwähnungen, Discord-Chronik, lokales Profilgedächtnis, Packesel-Automatik, bevorzugte Waffe, Kontrast, Schriftgröße und Chatlänge. Animationen bleiben aktiv."]
    ],internalCommands=[
      ["!zr npc audio [ein|aus|status]","Steuert NPC-Erzählungen über den Speaker.bot-Alias erzähler. Nur d4wizzard; Porträts bleiben aktiv."],
      ["!zauberreise systemstatus [Bereich]","Interne Gesamtampel per Twitch-Whisper mit Einzelstatus für effekte, ki, cooldowns, stream, gruppen, drachen, abstimmung, welt, schenke, spieler, speicher, events, erweiterungen, statistik und fehler."],
      ["!zauberreise systemstatus abstimmung [0-100]","Zeigt die automatische Abstimmungsquote und eine laufende Abstimmung. Mit einer Zahl wird die Chance je neuer Einzel- oder Gruppenreise geändert."],
      ["!zauberreise sozialeffekte an | aus | status","Schaltet die zusätzlichen Zauberreise-Wirkungen der sozialen Commands dauerhaft ein oder aus; deren alte Chat-Ausgaben bleiben aktiv."],
      ["!zauberreise ki an | aus | status | weiter","Steuert die KI-Spielleitung, zeigt Erzählstil, Budget und Aufrufslimits oder gibt zusätzliches Tagesbudget frei."],
      ["!zauberreise ki stil [klassisch|düster|heroisch|humorvoll|märchenhaft]","Wählt den atmosphärischen Erzählstil der KI-Spielleitung. Nur für d4wizzard, Antwort per Whisper."],
      ["!zauberreise spielleitung [status|sichern|prüfen|wiederherstellen]","Zeigt interne Statistiken, erstellt einen Sicherungspunkt, prüft Charakterdaten oder stellt den letzten Sicherungspunkt wieder her."]
      ,["!zauberreise diagnose [reparieren]","Prüft Kernvariablen, JSON-Spielstände, Cloudflare- und KI-Konfiguration und ergänzt fehlende sichere Standardwerte. Nur d4wizzard, Antwort per Whisper."]
      ,["!zauberreise ereignislog","Zeigt die letzten technischen Zauberreise-Aktionen ausschließlich d4wizzard per Whisper."]
    ],classCommands={
      kampf:[["!zauberreise spezial","Verbesserter Einzelangriff mit besonders hohem Waffenschaden."],["!zauberreise schützen @Name","Fängt als Rundenaktion Angriffe auf das gewählte Gruppenmitglied ab."]],
      barde:[["!zauberreise spezial @Name","Ermutigt eine andere Klasse und verbessert deren nächste Erfolgschance."]],
      dieb:[["!zauberreise spezial","Öffnet entdeckte Türen und Truhen oder sucht nach verborgenen Schätzen."]],
      heilung:[["!heiler @Name [@Name2 …]","Starke, stufenabhängige Heilung für sich selbst und mehrere Gruppenmitglieder; zählt im Kampf als Aktion."]],
      magie:[["!zauberreise spezial [Nr.]","Vollwertiger magischer Flächenangriff: Gegner verlieren LP, Arkanschutz wird durchdrungen und die persönliche Rundenaktion wird verbraucht. Der erste Einsatz jedes neuen Encounters ist ohne Cooldown."]]
    };
const supplementalCommands=[
  ["!zr schenkenabenteuer [klein|gross]","Startet ein mehrstufiges Abenteuer direkt in oder rund um die Schenke, ohne vorherige Reise."],
  ["!zr lokalabenteuer [klein|gross]","Gleichwertiger Alias für ein lokales Schenkenabenteuer."],
  ["!zr npc liste | sprechen [Name] | geschichte [Nr.] [Aktion]","Zeigt anwesende Schenken-NPCs, beginnt Gespräche und führt deren persönliche Handlungsstränge fort."],
  ["!zr npc abend [status|beitreten|beitragen Text|kaufen]","Nimmt an einem dreißigminütigen Schenkenabend mit Ankunft, Höhepunkt und Ausklang teil."],
  ["!zr museum [status|spenden Nr.]","Zeigt das Schenkenmuseum oder stiftet ein persönliches Erinnerungsstück."],
  ["!zr erinnerung [liste|untersuchen Nr.|zeigen Nr. NPC|stiften Nr.]","Untersucht die Geschichte eines Erinnerungsstücks, zeigt es einem NPC oder stiftet es dem Museum."],
  ["!zr wanderstück [status|annehmen|weitergeben @Name Widmung]","Verfolgt und übergibt das gemeinsame Wanderstück der Schenkengemeinschaft."],
  ["!zr schenkenchronik","Zeigt persönliche Weltspuren, Museumsstücke und wichtige Erinnerungen aus der Schenke."],
  ["!charakterbogen","Flüstert dir den persönlichen Link zu Charakterbogen, Bestiarium, Karte und Befehlsbuch."]
];
commonCommands.push(...supplementalCommands);
window.ZR_COMMAND_CATALOG={commonCommands,internalCommands,classCommands};