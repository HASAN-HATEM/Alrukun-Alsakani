/**
 * Footer Component - Contemporary Geometric Design
 * Features: Company info, contact details, geometric pattern background
 */

import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 hexagon-pattern opacity-10" />
      
      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6 cursor-pointer group">
  <div className="relative w-12 h-12">
    <img
      src="/images/Logo.png"
      alt="Alrukun Alsakani Logo"
      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <div>
    <h3 className="text-lg font-bold text-[#F5F5F5]">
      الركن السكني
    </h3>
    <p className="text-sm text-[#E0E0E0]">
      للصيانة والتشغيل
    </p>
  </div>
</div>



            <p className="text-sm opacity-90 leading-relaxed">
              مؤسسة سعودية متخصصة في تقديم خدمات الصيانة والتشغيل الشاملة للمباني السكنية والتجارية بأعلى معايير الجودة والاحترافية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all"
                >
                  من نحن
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all"
                >
                  خدماتنا
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all"
                >
                  لماذا نحن
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all"
                >
                  اتصل بنا
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              <li className="text-sm opacity-90">صيانة الكهرباء</li>
              <li className="text-sm opacity-90">صيانة السباكة</li>
              <li className="text-sm opacity-90">صيانة التكييف</li>
              <li className="text-sm opacity-90">صيانة المصاعد</li>
              <li className="text-sm opacity-90">خدمة اتحاد الملاك</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                <div>
                  <p className="text-sm font-medium">الهاتف</p>
                  <a href="tel:0501867025" className="text-sm opacity-90 hover:text-secondary transition-colors">
                    0501867025
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                <div>
                  <p className="text-sm font-medium">البريد الإلكتروني</p>
                  <a href="mailto:Hani-RS@outlook.com" className="text-sm opacity-90 hover:text-secondary transition-colors break-all">
                    Hani-RS@outlook.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" />
                <div>
                  <p className="text-sm font-medium">الموقع</p>
                  <a href="https://www.alrukunalsakani.com" target="_blank" rel="noopener noreferrer" className="text-sm opacity-90 hover:text-secondary transition-colors">
                    www.alrukunalsakani.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} الركن السكني للصيانة والتشغيل. جميع الحقوق محفوظة.
            </p>
            <p className="text-sm opacity-75">
              صُمم بعناية لتقديم أفضل تجربة مستخدم
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
