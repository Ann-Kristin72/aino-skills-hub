import React from "react";
import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/Logo1.png"
              alt="JodaSkills Logo"
              className="w-16 h-16"
            />
            <div className="text-2xl font-bold text-gray-900">
              JodaSkills & I-know
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link to="/investor-case">
              <Button className="bg-teal-600 hover:bg-teal-700">
                {t("nav.investorCase")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t("hero.title1")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">
              {" "}
              {t("hero.title2")}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <Link to="/investor-case">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 text-lg px-8 py-6"
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="text-center border-l-4 border-l-teal-500">
            <CardHeader>
              <Globe className="w-12 h-12 text-teal-600 mx-auto" />
              <CardTitle className="text-teal-700">
                {t("stats.stat1_title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-teal-800">1,1T USD</div>
              <p className="text-gray-600">{t("stats.stat1_desc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center border-l-4 border-l-orange-500">
            <CardHeader>
              <Users className="w-12 h-12 text-orange-600 mx-auto" />
              <CardTitle className="text-orange-700">
                {t("stats.stat2_title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-800">72K+</div>
              <p className="text-gray-600">{t("stats.stat2_desc")}</p>
            </CardContent>
          </Card>

          <Card className="text-center border-l-4 border-l-yellow-500">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-yellow-600 mx-auto" />
              <CardTitle className="text-yellow-700">
                {t("stats.stat3_title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-800">4B NOK</div>
              <p className="text-gray-600">{t("stats.stat3_desc")}</p>
            </CardContent>
          </Card>
        </div>

        {/* Problem & Solution Preview */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("problem.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t("problem.subtitle")}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {t("solution.subtitle")}
            </p>
            <Link to="/investor-case">
              <Button variant="outline" size="lg">
                {t("hero.cta")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-teal-100 to-orange-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("solution.title")}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                {t("solution.modules.content.description")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                {t("solution.modules.quality.description")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                {t("solution.modules.communication.description")}
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {t("solution.modules.tasks.description")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
