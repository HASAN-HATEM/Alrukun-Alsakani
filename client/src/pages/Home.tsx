/**
 * Home Page - Contemporary Geometric Design
 * Design Philosophy: Geometric patterns, diagonal layouts, warm browns and golds
 * Features: Hero, About, Services, Why Us, Stats, Contact sections
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Award,
  CheckCircle2,
  Clock,
  CalendarDays,
  UserCog,
  Droplets,
  Gauge,
  Lightbulb,
  Mail,
  MessageCircle,
  Phone,
  Shield,
  Snowflake,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-building.png"
            alt="مباني سكنية حديثة"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/70 to-primary/50" />
          {/* Hexagonal pattern overlay */}
          <div className="absolute inset-0 hexagon-pattern opacity-20" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/30">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-primary-foreground">
                  خدمات صيانة وتشغيل احترافية
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-tight text-shadow-lg">
              الركن السكني
              <span className="block text-secondary mt-2">للصيانة والتشغيل</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 leading-relaxed text-shadow-md">
              نقدم خدمات الصيانة والتشغيل الشاملة للمباني السكنية والتجارية بأعلى معايير الجودة والاحترافية. فريقنا المتخصص يضمن لك راحة البال وسلامة ممتلكاتك.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/966501867025?text=مرحباً%2C%20أود%20الاستفسار%20عن%20خدماتكم" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 py-6 h-auto"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  تواصل معنا
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 font-bold text-lg px-8 py-6 h-auto"
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                تعرف على خدماتنا
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-secondary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30 diagonal-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl transform rotate-3" />
              <img
                src="/images/maintenance-team.png"
                alt="فريق الصيانة المحترف"
                className="relative rounded-2xl shadow-2xl w-full"
              />
              {/* Decorative hexagons */}
              <div className="absolute -top-6 -right-6 w-24 h-24 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50 5, 95 27.5, 95 72.5, 50 95, 5 72.5, 5 27.5"
                    className="fill-secondary"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-bold text-secondary uppercase tracking-wider">
                  من نحن
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                شريكك الموثوق في
                <span className="text-secondary block">الصيانة والتشغيل</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
مؤسسة الركن السكني للخدمات السريعة والموثوقة مع الجودة العالية التي تضمن استمرارية تشغيل المبنى بأفضل شكل ممكن، وبما يحقق راحة وسلامة الملاك أو المستأجرين للمبنى
نوفر لكم الخدمات المتكاملة والإحترافية لجميع أنواع المباني السكنية نحن متخصصون في تقديم خدمات الصيانة للكهرباء والسباكة والتكييف والصيانة العامة لجميع المباني السكنية.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <Card className="border-2 border-secondary/20 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">رؤيتنا</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
أن نكون الخيار الموثوق والاول في المملكة في تشغيل وصيانة المرافق بالاعتماد
على سرعة الانجاز والمرونة والشفافية والتطوير المستمر في تقديم أفضل
الخدمات لضمان رضى العملاء.                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20 bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">مهمتنا</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      تقديم خدمات متكاملة باحترافية عالية ترتكز على الجودة والسرعة والاستدامة وتحقق رضا عملائنا من خلال حلول ذكية تلائم احتياجاتهم.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">فريق متخصص ومحترف</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">خدمة 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium"> ضمان الجودة
جميع خدماتنا مصحوبة بعقود واضحة وضمان كامل وذلك لضمان إستمرارية
الاداء المثالي للمباني وحماية أستثمارك على المدى الطويل.</span>
                </div>

              <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium"> خدمة سريعة وموثوقة
نوفر في الركن السكني بالرياض خدمة صيانة طارئة للمباني التي تم التعاقد معها
على مدار الساعة لضمان تلبية جميع الاحتياجات في أي وقت مهما كانت طبيعة
المشكلة أو حجمها.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="/images/services-pattern.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-secondary uppercase tracking-wider">
                خدماتنا
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              خدمات شاملة لحل
              <span className="text-secondary block">احتياجات المباني</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              نقدم في الركن السكني صيانة شاملة في مدينة الرياض ووضع حلول الصيانة المتكاملة التي تشمل جميع جوانب المبنى
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">صيانة الكهرباء والإنارة</h3>
                <p className="text-muted-foreground leading-relaxed">
صيانة الكهرباء لضمان عمل المبنى بدقة عالية وأمان كامل للمستخدمين.
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Snowflake className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">صيانة التكييف والتبريد</h3>
                <p className="text-muted-foreground leading-relaxed">
صيانة أجهزة التكييف والتبريد لراحة المستخدمين وتحقيق درجة الحرارة
والبرودة المثالية.                </p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Droplets className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">صيانة السباكة</h3>
                <p className="text-muted-foreground leading-relaxed">
صيانة السباكة والتمديدات الصحية للحفاظ على بيئة صحية وآمنة.
                </p>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gauge className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">صيانة المصاعد</h3>
                <p className="text-muted-foreground leading-relaxed">
صيانة المصاعد وأنظمة الحريق لضمان سالمة المبنى واإللتزام بالمعايير
السعودية.                </p>
              </CardContent>
            </Card>

            {/* Service 5 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Wrench className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">النظافة الدورية</h3>
                <p className="text-muted-foreground leading-relaxed">
النظافة الدورية والفحص المستمر للمبنى بنظام الزيارات أو حارس مقيم.                </p>
              </CardContent>
            </Card>

            {/* Service 6 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">صيانة الواجهات واألسطح</h3>
                <p className="text-muted-foreground leading-relaxed">
صيانة الواجهات والاسطح للحفاظ على المبنى في أفضل حالاته على المدى
الطويل.                </p>
              </CardContent>
            </Card>

            {/* Service 6 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">خدمة إتحاد المالك</h3>
                <p className="text-muted-foreground leading-relaxed">
تقديم خدمة إتحاد المالك للمباني السكنية، حيث نعمل على تأسيس الجمعيات
وإدارتها بإحترافية تضمن الشفافية وحسن الانتفاع من العقار، بالاضافة إلى الحفاظ
على الاجزاء المشتركة وتعزيز التعاون بين المالك ونحرص على تقديم حلول
متكاملة تواكب الانظمة المعتمدة في المملكة العربية السعودية، مع ضمان أعلى
مستويات الكفاءة والاستدامة.               </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-muted/30 diagonal-section-reverse">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-secondary uppercase tracking-wider">
                لماذا نحن
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              لماذا تختار
              <span className="text-secondary block">الركن السكني؟</span>
            </h2>
            <p className="text-lg text-muted-foreground">
بكل بساطة لدينا فريق خبراء متخصص يتكون من المهندسين والفنيين
المعتمدين ذوي الخبرة الواسعة في صيانة وتشغيل المباني وذلك لضمان تنفيذ كافة
الاعمال بأعلى مستوى من الجودة والاحترافية مع سرعة الانجاز والالتزام
بالمواعيد المحددة.            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">الاستجابة السريعة</h3>
              <p className="text-muted-foreground leading-relaxed">
                نوفر خدمة صيانة طارئة على مدار الساعة لضمان تلبية جميع احتياجاتك في أي وقت
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">الإتقان</h3>
              <p className="text-muted-foreground leading-relaxed">
                نسعى لتقديم خدمات ذات جودة عالية على مستوى من الجودة والاحترافية مع سرعة الإنجاز
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">الشفافية</h3>
              <p className="text-muted-foreground leading-relaxed">
                جميع خدماتنا مصحوبة بعقود واضحة وضمان كامل لضمان استمرارية الأداء المثالي
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                <Lightbulb className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">ابتكار الحلول</h3>
              <p className="text-muted-foreground leading-relaxed">
                نقدم حلول متكاملة ومبتكرة تلائم احتياجاتك وتواكب الأنظمة المعتمدة في المملكة
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">الحرص على رضى العميل</h3>
              <p className="text-muted-foreground leading-relaxed">
                نضع رضا عملائنا في المقام الأول ونلتزم بتقديم أفضل الخدمات لضمان رضاهم التام
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">فريق متخصص</h3>
              <p className="text-muted-foreground leading-relaxed">
                فريقنا يتكون من المهندسين والفنيين المحترفين ذوي الخبرة الواسعة في الصيانة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/building-systems.png"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 hexagon-pattern opacity-10" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-3 text-center">
  <CalendarDays className="w-10 h-10 text-secondary animate-pulse" />
  <div>
    <div className="text-5xl md:text-6xl font-black text-secondary leading-none">
      سنوات
    </div>
    <p className="text-lg font-medium opacity-90">من الخبرة</p>
  </div>
</div>

            <div className="flex items-center justify-center gap-3 text-center">
  <UserCog className="w-10 h-10 text-secondary animate-pulse" />
  <div>
    <div className="text-5xl md:text-6xl font-black text-secondary leading-none">
      محترفون
    </div>
    <p className="text-lg font-medium opacity-90">موظفون</p>
  </div>
</div>

            <div className="flex items-center justify-center gap-3 text-center">
  <Clock className="w-10 h-10 text-secondary animate-pulse" />
  <div>
    <div className="text-5xl md:text-6xl font-black text-secondary leading-none">
      24/7
    </div>
    <p className="text-lg font-medium opacity-90">خدمة متواصلة</p>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-sm font-bold text-secondary uppercase tracking-wider">
                  تواصل معنا
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                هل لديك استفسار؟
                <span className="text-secondary block">نحن هنا لمساعدتك</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                تواصل معنا الآن واحصل على استشارة مجانية لاحتياجات الصيانة والتشغيل
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone Card */}
              <Card className="border-2 border-secondary/20 hover:border-secondary/50 transition-colors bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">اتصل بنا</h3>
                  <p className="text-muted-foreground mb-4">تواصل معنا مباشرة عبر الهاتف</p>
                  <a
                    href="tel:0501867025"
                    className="text-2xl font-bold text-secondary hover:text-secondary/80 transition-colors"
                  >
                    0501867025
                  </a>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="border-2 border-accent/20 hover:border-accent/50 transition-colors bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">راسلنا</h3>
                  <p className="text-muted-foreground mb-4">أرسل لنا استفسارك عبر البريد الإلكتروني</p>
                  <a
                    href="mailto:Hani-RS@outlook.com"
                    className="text-xl font-bold text-accent hover:text-accent/80 transition-colors break-all"
                  >
                    Hani-RS@outlook.com
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-black text-primary mb-4">
                  جاهز لبدء مشروعك؟
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  احصل على عرض سعر مجاني واستشارة احترافية من فريقنا المتخصص
                </p>
                <a href="https://wa.me/966501867025?text=مرحباً%2C%20أود%20الاستفسار%20عن%20خدماتكم" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 py-6 h-auto"
                  >
                    <MessageCircle className="w-5 h-5 ml-2" />
                    تواصل معنا عبر واتساب
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
