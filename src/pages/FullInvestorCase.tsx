import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FullInvestorCase = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <nav className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
                <img
                src="/lovable-uploads/Logo1.png"
                alt="JodaSkills Logo"
                className="w-16 h-16"
                />
                <h1 className="text-2xl font-bold text-gray-900">JodaSkills & I-know</h1>
            </div>
            <Link to="/investor-case">
                <Button variant="outline">← Tilbake til oversikt</Button>
            </Link>
        </nav>

        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="text-3xl md:text-4xl text-center">
                Globalt Business Case (Fulltekst)
                </CardTitle>
            </CardHeader>
        </Card>

        <Accordion type="single" collapsible className="w-full space-y-4">
          
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold">1. Innledning – Et verdensproblem vi har valgt å løse</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              Helt siden Verdens helseorganisasjon i 2006 la frem rapporten Working Together for Health har verden visst at vi står overfor en bemanningskrise i helsetjenestene. Den gang estimerte WHO at 57 land hadde kritisk mangel på leger, sykepleiere og jordmødre – og det globale gapet ble beregnet til 2,4 millioner helsearbeidere. Samtidig ble det pekt på at denne mangelen ikke var en tilfeldighet. Den var et resultat av svake utdanningssystemer, utilstrekkelig planlegging og en vedvarende skjevfordeling mellom rike og fattige land.
              <br/><br/>
              I årene etter har dette problemet ikke blitt løst – det har blitt forsterket. Spesielt i høyinntektsland som Norge, Sverige, Storbritannia og andre OECD-land har vi løst vår egen bemanningskrise ved å rekruttere kvalifisert arbeidskraft fra land som selv har knapt med ressurser. Dette har skapt en global urettferdighet som WHO har advart mot i en rekke oppdaterte strategier, senest i Global Strategy on Human Resources for Health: Workforce 2030.
              <br/><br/>
              Samtidig har vi i vesten lukket øynene for at problemet egentlig ligger mye nærmere: Vi har ikke maktet å utdanne, bruke og beholde nok helsepersonell i våre egne systemer. Vi har i stedet kompensert ved å kjøpe vikarer til rekordpriser og la ufaglært arbeidskraft fylle hullene i vaktplanene, uten at de får den nødvendige opplæringen. I Norge alene viser rapporter fra Helsedirektoratet at over 72 530 årsverk utføres av ansatte uten helsefaglig utdanning – og bruken av vikarer har nå passert fire milliarder kroner i året. Dette er tall som får investorer til å sperre opp øynene – fordi de viser at vi betaler for konsekvensene, men nekter å ta tak i årsakene.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold">2. Norge og Norden – demografi som unnskyldning</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              I Norge og resten av Norden har begrepet «demografi» blitt et fast refreng når politikere forklarer hvorfor helsetjenestene er under press. Vi får høre at vi blir eldre, at vi får færre unge, og at vi derfor må «omstille oss». Dette er naturligvis riktig som fakta: Andelen eldre øker. Men internasjonalt er det påfallende at begrepet «demografi» nesten ikke brukes på samme måte. Når WHO eller OECD snakker om helsebemanning, snakker de om kapasitet i utdanning, arbeidsmiljø, rekruttering og fordeling av oppgaver – ikke primært om demografi.
              <br/><br/>
              I praksis brukes «demografi» som en unnskyldning for å dekke over en systemsvikt: Vi har ikke planlagt for utdanning av nok folk. Vi har tillatt at fagfolk slutter fordi arbeidsmiljøet er for krevende. Vi har ikke klart å rekruttere bredt nok i distriktene. Og når hullene blir store, betaler vi for vikarer og nødløsninger fremfor å bygge opp langsiktige strukturer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold">3. Hva gjør lavinntektsland som Uganda – og hva kan vi lære?</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              I kontrast til denne ad-hoc-modellen finner vi et av de mest vellykkede eksemplene på nasjonalt eierskap til lokal helsebemanning: Uganda. Allerede på 1990-tallet begynte Uganda å bygge opp sine Community Health Workers – landsbyhelsearbeidere som rekrutteres lokalt, får enkel, men målrettet opplæring og løser helt grunnleggende helseoppgaver. I dag har Uganda over 179 000 Community Health Workers som dekker 75 prosent av landet.
              <br/><br/>
              Resultatene taler for seg selv: Mødredødeligheten har falt fra 506 per 100 000 fødsler til 336. Vaksinedekningen for barn har økt fra 52 prosent til over 80 prosent. Malariadødsfall er mer enn halvert i landsbyer som har Community Health Workers. Modellen er enkel, billig og bærekraftig, og WHO og UNICEF har løftet den frem som «best practice» for ressurssvake land.
              <br/><br/>
              Poenget er dette: Uganda har gjort manuelt det vi i JodaSkills og I-know nå kan gjøre digitalt – og på global skala.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold">4. Norge – konsekvenser av å ikke lære av de beste</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              I Norge mangler vi en helhetlig strategi for hvordan vi systematisk skal bruke ufaglært arbeidskraft som en ressurs – ikke som en lapp på et hull. I dag har vi en situasjon der ufaglærte ansatte kan gå fra å jobbe i barnehage én uke til å håndtere demente pasienter uten relevant opplæring uken etter. En sykepleier med bachelorgrad får tre uker til overlapping når hun begynner i en ny jobb på sykehjem. En ufaglært assistent får tre vakter og en sjekkliste. Resten må de lære «på jobben».
              <br/><br/>
              Prisen betales i turnover, svikt i pasientsikkerhet og høye kostnader for vikarer. KS har anslått at turnover for ufaglærte alene koster kommunesektoren over 297 millioner kroner årlig. Når man legger til vikarbyråkostnader, snakker vi om over fire milliarder kroner i ren brannslukking.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold">5. Det globale regnestykket</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              Ifølge McKinsey-rapporten Closing the gap on the healthcare workforce shortage fra mai 2023, kan det å tette gapet i helsearbeiderstyrken redusere den globale sykdomsbyrden med hele syv prosent og tilføre verdensøkonomien 1,1 billioner dollar i årlig verdiskaping. Dette er ikke småpenger. Dette er tallet på hva vi taper fordi vi ikke løser bemanningskrisen på en smart måte.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold">6. Hvem er egentlig disse helsearbeiderne – og hvorfor er de vår nøkkel</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              Når vi i JodaSkills snakker om «de ufaglærte», snakker vi ikke om en ensartet masse. Vi snakker om mennesker i alle aldre – fra 17 til 70 år – med svært ulike forutsetninger for å lære, forstå og bli forstått. De representerer ulike kulturer, ulike språk, ulike digitale ferdigheter – men de har én ting til felles: De står i frontlinjen for å holde eldreomsorgen og store deler av omsorgstjenesten oppe når alt annet vakler.
              <br/><br/>
              I Norge utgjør denne gruppen over 72 000 ansatte i dag (Kilde: Helsedirektoratet, «Personalsammensetning og opplæringsbehov i pleie- og omsorgssektoren», 2024). De gjør alt fra stell og personlig hygiene til matlaging, aktivisering, transport og praktiske oppgaver. De er ofte de første som ser en forverring i en pasients tilstand – men de har sjelden kompetansen til å vurdere hva som skal gjøres videre, eller til å formidle det på riktig måte.
              <br/><br/>
              Internasjonalt er dette bildet likt. Verdens helsearbeidere på grasrotnivå – fra Ugandas Community Health Workers til pleieassistenter i Europa – deler det samme behovet: De må forstå hva de skal gjøre. De må vite hvor de skal henvende seg når noe går galt. Og de må ha tilgang til oppdatert kunnskap på et språk og i et format de faktisk forstår.
              <br/><br/>
              Det er derfor WHO i sine Global Strategy on Human Resources for Health (2016) og WHO Community Health Worker Guidelines (2018) løfter frem behovet for å «tenke nytt om hvem vi lærer opp, hva vi lærer dem opp i, og hvordan vi gjør det» (Kilde: WHO HRH Strategy 2030, WHO CHW Guidelines 2018).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold">7. Læring – fra klasserom til kunstig intelligens</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            I helsesektoren har vi lenge holdt fast på en gammeldags måte å tenke opplæring på: Nye ansatte skal sitte i klasserom, gå på obligatoriske kurs, lese tunge prosedyrer og huske alt – for så å praktisere det perfekt når de møter en ekte pasient. Dette var fornuftig da vi hadde stabil bemanning, høy fagdekning og tid til å gi alle veiledning.
            <br/><br/>
            Slik er det ikke lenger. Verden har endret hvordan vi lærer. I dag bruker folk mobilen for å slå opp det de trenger – når de trenger det. Vi ser korte videoer, vi søker i chat, vi stiller et spørsmål til en AI eller kollega og får svar umiddelbart. Det er dette som er realiteten for læring i 2025 – men i helse tvinger vi fortsatt ansatte til å bruke timevis på generiske e-læringskurs som de må fullføre for å «ha dokumentert opplæring».
            <br/><br/>
            Resultatet er godt kjent: Kursene blir gjennomført, men kunnskapen glemmes like raskt som den ble pugget. Ledere har ingen reell oversikt over hva ansatte faktisk kan – annet enn at de har «fullført» et kurs. Dette er vel dokumentert i flere Fafo-studier og i tall fra KS, som viser at kunnskapsnivået i frontlinjen varierer dramatisk (Kilde: Fafo 2023, KS Kompetansestatus 2024).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-xl font-semibold">8. De fem store sårene – problemet oppsummert</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            Etter over ti år med forsknings- og utviklingsarbeid i Dynamisk Helse og Jodacare, og gjennom utallige intervjuer med helsepersonell, ledere og pårørende, har vi identifisert fem store sår som tapper sektoren for penger, kraft og trygghet:
            <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Teknologi på museum:</strong> Kommunene investerer milliarder i velferdsteknologi som aldri blir tatt i bruk fordi ingen lærer opp folk på en praktisk måte. Kilde: Helsedirektoratet Velferdsteknologi-rapport 2022.</li>
                <li><strong>Kommunikasjon på avveie:</strong> I mangel på trygge kommunikasjonskanaler etablerer ansatte egne grupper på Messenger, Snap og Facebook. Her flyter taushetsbelagt informasjon sammen med uformell prat – uten sporbarhet eller sikkerhet. Kilde: Sykepleien.no 2023.</li>
                <li><strong>Læring i bakvendtland:</strong> Opplæringen er for tung, for teoretisk og for lite knyttet til reelle situasjoner. Kunnskap som ikke huskes er verdiløs. Kilde: Fafo 2023.</li>
                <li><strong>Lovpålagt kvalitet uten system:</strong> 97 prosent av kommunene bruker utdaterte kvalitetssystemer som forutsetter at fagfolk selv skal lage prosedyrer og revidere dem. Når det ikke skjer, mangler ansatte styringsverktøy, og ingen tar ansvar for å holde prosedyrene levende. Kilde: KS 2024.</li>
                <li><strong>Ressursfordeling i silo:</strong> Kommunen har oppgaver. NAV har folk. Men systemet for å koble folk til oppgaver er gammeldags, rigid og tungvint. Det finnes ingen fleksibel bro som utnytter de ressursene vi allerede betaler for. Kilde: NAV Statistikk 2024.</li>
            </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-xl font-semibold">9. Konsekvensene – hva koster det oss?</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            For Norge alene viser regnestykket at vi årlig bruker over fire milliarder kroner på vikarer, 297 millioner kroner på opplæring av ufaglærte som ofte slutter innen 12 måneder, og millioner i tapte gevinster på grunn av feil og avvik som kunne vært unngått (Kilder: KS, Fafo, Helsedirektoratet).
            <br/><br/>
            Globalt er bildet enda større. Ifølge McKinsey kan en smartere utnyttelse av arbeidsstyrken og bedre opplæring fjerne syv prosent av sykdomsbyrden og tilføre verdensøkonomien 1,1 billioner dollar i økt produktivitet og reduserte helsekostnader (Kilde: McKinsey, «Closing the gap on the healthcare workforce shortage», 2023).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-xl font-semibold">10. En ny vei: JodaSkills og I-know</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            Vi har brukt årevis på å forstå hva som faktisk virker, og enda flere år på å bygge teknologi som kan bære det. Vår erfaring fra to selskaper, SkillAid (Dynamisk Helse) og Jodacare, har lært oss at løsningen aldri er ett nytt kurs, én ny app eller én ny portal. Løsningen ligger i et sammenhengende økosystem som knytter sammen kunnskap, kvalitet, teknologi, kommunikasjon og oppgaver – i sanntid, på språk folk forstår.
            <br/><br/>
            Dette er essensen i I-know – vår nye plattform som for første gang digitaliserer prinsippene bak Ugandas Community Health Worker-modell for et globalt, moderne helsesystem.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger className="text-xl font-semibold">11. Hva er I-know – modulene som løser problemet</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            I-know er bygget som en modulbasert Software-as-a-Service (SaaS)-plattform. Hver modul kan kjøpes separat, men alle bygger på samme innholdsbase og snakker sømløst sammen via felles AI-logikk og dataintegrasjon.
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li><strong>Modul 1: Innhold og læring:</strong> Kurs, nano-læring og mikrosteg, tilpasset rolle, språk og kontekst. All kunnskap er bygget på Markdown – slik at vi kan filtrere og gjenbruke innholdet dynamisk. Eira, vår AI-veileder, foreslår innhold når brukeren trenger det – ikke bare når lederen sier det. Brukes til onboarding, fagbrevforberedelse, oppfrisking og sertifisering.</li>
              <li><strong>Modul 2: Kvalitetssystem:</strong> Prosedyrebygging basert på ferdige maler – ingen trenger å skrive fra blank side. Automatiske påminnelser om revisjon. Ledere kan tilpasse og distribuere prosedyrer til spesifikke roller og steder. Eira veileder den som skriver – og sikrer at prosedyrene er forståelige.</li>
              <li><strong>Modul 3: Teknotassen:</strong> En AI-veileder for innføring av ny velferdsteknologi. Brukeren får sjekklister, oppgavestier og visuelle forklaringer på hva som skal gjøres. Alt tilpasset den enkeltes rolle og tempo.</li>
              <li><strong>Modul 4: Kommunikasjon:</strong> Kryptert meldingsfeed som holder kommunikasjonen i linje med GDPR. Faglig chat med AI-støtte – ingen flere Snap-grupper uten sporbarhet. Ingen journalføring, men faglig dialog som lagrer spor til læring og forbedring.</li>
              <li><strong>Modul 5: Oppgavedeling:</strong> AI-kartlegging av kompetanse og preferanser. Match med arbeidsoppgaver i kommunen – også kobling mot NAVs databaser. Eira kan foreslå kurspakker som gjør folk klar for oppgaven. Oppgaver kan deles mellom frivillige, ufaglærte og fagpersoner – med dokumentert ansvarsforståelse.</li>
            </ul>
            <br/>
            👉 Alt dette kobles sammen av Eira – vår AI-agent – som både er brukerens hjelper og lederens kompass for å forstå hva organisasjonen faktisk kan, gjør og trenger mer av.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-12">
            <AccordionTrigger className="text-xl font-semibold">12. Hva har vi allerede – og hva skal vi bygge ferdig</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            <strong>Dette har vi i dag:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>En robust, driftet teknologi for innholdsproduksjon, kunnskapsdeling og kryptert kommunikasjon.</li>
                <li>AI-integrasjoner for søk, anbefalinger og samtaler – testet i pilot hos reelle brukere.</li>
                <li>70 kommuner som kunder, over 10 000 brukere som allerede jobber smartere med vår plattform.</li>
                <li>Signerte avtaler i Sverige, med årlig potensial på 20 millioner NOK – uten at vi har justert eller oppgradert teknologien ennå.</li>
            </ul>
            <br/>
            <strong>Dette skal vi gjøre videre:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Bygge ferdig full AI-logikk for oppgavefordeling og kompetansekartlegging.</li>
                <li>Slå sammen alt til én samlet plattformopplevelse – I-know.</li>
                <li>Gjøre modellen plug-and-play for NGO'er, vikarbyråer og nasjonale helsesystemer i andre land.</li>
            </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-13">
            <AccordionTrigger className="text-xl font-semibold">13. Markedspotensialet – fra norsk problem til global eksportvare</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            Med dagens system står vi stødig i Norge – og har bevis på at systemet virker. Med I-know har vi potensial til å ta en rettferdig og skalerbar versjon av Ugandas manuelle modell og gjøre den tilgjengelig for helsetjenester over hele verden.
            <br/><br/>
            Bare i Norge kan vi hjelpe kommuner å spare inn på vikarbruk og turnover for 1,5–2 milliarder kroner årlig (Kilde: KS og Fafo). Internasjonalt vet vi at helsesektoren kan vinne tilbake 1,1 billioner dollar i produktivitet (Kilde: McKinsey, 2023).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-14">
            <AccordionTrigger className="text-xl font-semibold">14. Forretningsmodell og salgsstrategi</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            <strong>Hvordan tjener vi penger?</strong>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Vi selger moduler som abonnement (SaaS).</li>
              <li>Vi tilbyr tilpasning for store aktører (white label).</li>
              <li>Vi samarbeider med NGO'er som kan distribuere løsningen i lavinntektsland – med rimelig lisensstruktur.</li>
              <li>Vi tilbyr kurs- og prosedyrepakker som tilleggskjøp.</li>
            </ul>
            <br/>
            <strong>Hvordan selger vi det?</strong>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Vi starter med eksisterende norske kunder – som allerede kjenner oss.</li>
              <li>Vi skalerer direkte til Norden og ut i Europa.</li>
              <li>Vi bygger partnerskap med globale aktører som WHO, UNICEF og store vikarbyråer.</li>
              <li>Vi bruker vår dokumenterte suksess for å vise at dette er mer enn en idé – det er en løsning som fungerer.</li>
            </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-15">
            <AccordionTrigger className="text-xl font-semibold">15. Kapital og struktur – hva vi trenger, og hvorfor</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            <strong>Kapitalbehov:</strong>
            <p>Totalt behov for kapital i første runde: 90 millioner NOK.</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>60 millioner NOK brukes til å kjøpe ut nåværende eiere i SkillAid og Jodacare. Dette gir JodaSkills én samlet, sterk eierstruktur – helt avgjørende for å sikre fart og en trygg ryggrad for internasjonal ekspansjon.</li>
                <li>30 millioner NOK går direkte inn i drift, videre produktutvikling og skalering av salgsapparatet.</li>
            </ul>
            <br/>
            <strong>Gründerkrav:</strong>
            <p>Gründerne stiller som garantister for faglig integritet, innovasjonstempo og markedskontakt – men vi ønsker et profesjonelt CEO-lag som kan ta visjonen fra 10 000 brukere til 1 million, globalt.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-16">
            <AccordionTrigger className="text-xl font-semibold">16. Organisasjon – et team som vet hva det gjør</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            <strong>Ny CEO:</strong>
            <p>Som beskrevet i vår stillingsutlysning skal JodaSkills ledes av en internasjonal, vekstorientert CEO med solid erfaring fra teknologisk skalering. Rollen er allerede definert og rekruttering er i gang.</p>
            <br/>
            <strong>Gründerne:</strong>
            <p>Fungerer som produktutviklere, markedseksperter og bærere av kjerneforståelsen for hva som virker i helse.</p>
            <br/>
            <strong>Salgsapparat:</strong>
            <p>Vi bygger et spisset salgsteam som kjenner markedet for helsetjenester, NGO'er og internasjonale partnere.</p>
            <br/>
            <strong>AI-assistenter:</strong>
            <p>Vi automatiserer store deler av innholdsproduksjon, opplæring og datadrevet rådgivning – for å holde faste kostnader lave.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-17">
            <AccordionTrigger className="text-xl font-semibold">17. Konklusjon – et digitalt Uganda, tilgjengelig for verden</AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
            Vi vet hvordan dette skal gjøres. Vi har brukt årene på å teste det manuelt, akkurat slik Uganda har gjort – men nå har vi teknologien, AI og internasjonale partnerskap som kan gjøre modellen skalerbar og rettferdig.
            <br/><br/>
            Dette er ikke en ny app.<br/>
            Dette er et fundament for å fylle helseverdenens største hull – med respekt for folk, fag og ressurser.
            <br/><br/>
            <strong>Kilder:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                <li>WHO (2006): Working Together for Health</li>
                <li>WHO (2018): Community Health Worker Guidelines</li>
                <li>WHO HRH Strategy 2030</li>
                <li>OECD (2008): The Looming Crisis in the Health Workforce</li>
                <li>McKinsey (2023): Closing the Healthcare Workforce Gap</li>
                <li>Fafo (2023): Mobilitet i helse- og omsorgstjenestene</li>
                <li>Helsedirektoratet (2020, 2022, 2024): Kompetanseløft, Velferdsteknologi</li>
                <li>KS (2024): Status Velferdsteknologi</li>
                <li>Sykepleien.no, Kommunal Rapport</li>
            </ul>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
};

export default FullInvestorCase;