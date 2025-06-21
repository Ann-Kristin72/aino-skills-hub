
import React from 'react';
import { ArrowRight, Globe, Users, TrendingUp, Target, DollarSign, Building, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const InvestorCase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-teal-700 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/lovable-uploads/028f85ad-996a-4602-8037-a808908a4e9b.png" 
                alt="JodaSkills Logo" 
                className="w-16 h-16"
              />
              <Badge className="bg-orange-500 hover:bg-orange-600 text-lg px-4 py-2">
                Globalt Business Case
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              JodaSkills & AiNo
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-teal-100 leading-relaxed">
              Digitaliserer Ugandas suksessmodell for global helsebemanning
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Globe className="w-5 h-5" />
                <span>Global skalering</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <DollarSign className="w-5 h-5" />
                <span>1,1 billioner USD potensial</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <Users className="w-5 h-5" />
                <span>72 000+ helsearbeidere i Norge</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        
        {/* Problem Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Et verdensproblem vi har valgt å løse
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siden WHO la frem rapporten "Working Together for Health" i 2006, har verden visst at vi står overfor en bemanningskrise i helsetjenestene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-red-700">Problemets omfang</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  <strong>2006:</strong> 57 land hadde kritisk mangel på leger, sykepleiere og jordmødre. Globalt gap: 2,4 millioner helsearbeidere.
                </p>
                <p className="text-gray-700">
                  <strong>2025:</strong> Problemet er forsterket. Norge bruker over 4 milliarder kroner årlig på vikarer, mens 72 530 årsverk utføres av ansatte uten helsefaglig utdanning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-700">Norsk virkelighet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  <strong>Demografi som unnskyldning:</strong> Vi bruker "demografi" som forklaring, men løser ikke grunnproblemet - manglende planlegging og utdanning.
                </p>
                <p className="text-gray-700">
                  <strong>Turnover-kostnad:</strong> KS anslår at turnover for ufaglærte alene koster kommunesektoren over 297 millioner kroner årlig.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-teal-50 border-teal-200">
            <CardHeader>
              <CardTitle className="text-teal-800 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Ugandas suksessmodell
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Uganda bygget på 1990-tallet opp over 179 000 Community Health Workers som dekker 75% av landet. Resultater:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">506→336</div>
                  <div className="text-sm text-gray-600">Mødredødelighet per 100k</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">52%→80%</div>
                  <div className="text-sm text-gray-600">Vaksinedekning barn</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">50%↓</div>
                  <div className="text-sm text-gray-600">Malariadødsfall</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Solution Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AiNo - Ugandas modell, digitalt og globalt
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi digitaliserer prinsippene bak Ugandas Community Health Worker-modell for et globalt, moderne helsesystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Users className="w-8 h-8 text-teal-600" />,
                title: "Innhold og læring",
                description: "Nano-læring og mikrostep tilpasset rolle, språk og kontekst. Eira AI-veileder foreslår innhold når det trengs."
              },
              {
                icon: <Building className="w-8 h-8 text-orange-600" />,
                title: "Kvalitetssystem",
                description: "Prosedyrebygging basert på ferdige maler. Automatiske påminnelser og AI-veiledning for forståelige prosedyrer."
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-600" />,
                title: "Teknotassen",
                description: "AI-veileder for innføring av velferdsteknologi med sjekklister og visuelle forklaringer."
              },
              {
                icon: <Globe className="w-8 h-8 text-green-600" />,
                title: "Kommunikasjon",
                description: "Kryptert meldingsfeed som holder kommunikasjonen GDPR-kompatibel med faglig chat og AI-støtte."
              },
              {
                icon: <Target className="w-8 h-8 text-red-600" />,
                title: "Oppgavedeling",
                description: "AI-kartlegging av kompetanse og match med arbeidsoppgaver, inkludert kobling mot NAVs databaser."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
                title: "Eira AI-agent",
                description: "Brukerens hjelper og lederens kompass for å forstå hva organisasjonen kan, gjør og trenger."
              }
            ].map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {module.icon}
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Market Potential */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-teal-600 to-orange-500 text-white">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <DollarSign className="w-8 h-8" />
                Markedspotensialet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Norge</h4>
                  <ul className="space-y-2">
                    <li>• 1,5-2 milliarder kroner årlig besparelse på vikarbruk</li>
                    <li>• 297 millioner kroner i redusert turnover</li>
                    <li>• 70 kommuner som eksisterende kunder</li>
                    <li>• 10 000+ brukere på plattformen allerede</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Globalt</h4>
                  <ul className="space-y-2">
                    <li>• 1,1 billioner USD i økt produktivitet (McKinsey)</li>
                    <li>• 7% reduksjon i global sykdomsbyrde</li>
                    <li>• Signerte avtaler i Sverige: 20M NOK potensial</li>
                    <li>• Partnerskap med WHO, UNICEF og NGO'er</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Business Model */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Forretningsmodell og struktur
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-teal-700">Hvordan tjener vi penger?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                  <span>Moduler som abonnement (SaaS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                  <span>Tilpasning for store aktører (white label)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                  <span>NGO-samarbeid i lavinntektsland</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                  <span>Kurs- og prosedyrepakker som tillegg</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Kapitalbehov</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-orange-800 mb-2">90M NOK</div>
                    <div className="text-sm text-orange-600">Total kapitalbehov første runde</div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Oppkjøp SkillAid/Jodacare</span>
                      <span className="font-semibold">60M NOK</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Drift og skalering</span>
                      <span className="font-semibold">30M NOK</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-20">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Kilder og referanser</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h5 className="font-semibold mb-2">Internasjonale kilder:</h5>
                  <ul className="space-y-1">
                    <li>• WHO (2006): Working Together for Health</li>
                    <li>• WHO (2018): Community Health Worker Guidelines</li>
                    <li>• WHO HRH Strategy 2030</li>
                    <li>• OECD (2008): The Looming Crisis in the Health Workforce</li>
                    <li>• McKinsey (2023): Closing the Healthcare Workforce Gap</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Norske kilder:</h5>
                  <ul className="space-y-1">
                    <li>• Fafo (2023): Mobilitet i helse- og omsorgstjenestene</li>
                    <li>• Helsedirektoratet (2020-2024): Kompetanseløft</li>
                    <li>• KS (2024): Status Velferdsteknologi</li>
                    <li>• Sykepleien.no, Kommunal Rapport</li>
                    <li>• NAV Statistikk 2024</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-teal-600 to-orange-500 text-white">
            <CardContent className="py-12">
              <h2 className="text-4xl font-bold mb-4">
                Et digitalt Uganda, tilgjengelig for verden
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Vi vet hvordan dette skal gjøres. Vi har brukt årene på å teste det manuelt, akkurat slik Uganda har gjort – men nå har vi teknologien, AI og internasjonale partnerskap som kan gjøre modellen skalerbar og rettferdig.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white text-teal-700 text-lg px-6 py-3">
                  Ikke en ny app
                </Badge>
                <Badge className="bg-white text-orange-700 text-lg px-6 py-3">
                  Et fundament for fremtiden
                </Badge>
                <Badge className="bg-white text-yellow-700 text-lg px-6 py-3">
                  Respekt for folk, fag og ressurser
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default InvestorCase;
