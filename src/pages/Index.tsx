
import React from 'react';
import { ArrowRight, Globe, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">JodaSkills & AiNo</div>
          <Link to="/investor-case">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Se investor case
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Fremtidens
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600"> helsebemanning</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Vi digitaliserer Ugandas suksessmodell for global helsebemanning og skaper en bærekraftig løsning for verdens bemanningskrise.
          </p>
          <Link to="/investor-case">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-6">
              Les hele investor caset
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="text-center border-l-4 border-l-emerald-500">
            <CardHeader>
              <Globe className="w-12 h-12 text-emerald-600 mx-auto" />
              <CardTitle className="text-emerald-700">Global impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-800">1,1T USD</div>
              <p className="text-gray-600">Potensial i økt produktivitet globalt</p>
            </CardContent>
          </Card>

          <Card className="text-center border-l-4 border-l-blue-500">
            <CardHeader>
              <Users className="w-12 h-12 text-blue-600 mx-auto" />
              <CardTitle className="text-blue-700">Norsk marked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-800">72K+</div>
              <p className="text-gray-600">Helsearbeidere uten fagutdanning</p>
            </CardContent>
          </Card>

          <Card className="text-center border-l-4 border-l-purple-500">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto" />
              <CardTitle className="text-purple-700">Besparelser</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-800">4B NOK</div>
              <p className="text-gray-600">Årlig på vikarer i Norge alene</p>
            </CardContent>
          </Card>
        </div>

        {/* Problem & Solution Preview */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fra krise til mulighet</h2>
            <p className="text-lg text-gray-600 mb-6">
              Siden WHO advarte om bemanningskrisen i 2006, har problemet bare blitt større. Men Uganda viste veien - med lokale helsearbeidere som nå dekker 75% av landet med imponerende resultater.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Vi tar denne suksessmodellen og gjør den digital, skalerbar og tilgjengelig for hele verden.
            </p>
            <Link to="/investor-case">
              <Button variant="outline" size="lg">
                Les hele historien
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AiNo - vår løsning</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                AI-drevet læring og kompetanseutvikling
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Modulbasert SaaS-plattform
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Kryptert kommunikasjon og kvalitetssystem
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Intelligent oppgavefordeling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
