import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowRight, Star, Shield, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">FailLearn</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600">Özellikler</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">Fiyatlandırma</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Kullanıcı Yorumları</a>
              <Button variant="outline">Giriş Yap</Button>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Ücretsiz Başla
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Başarısızlıklardan <span className="text-blue-600">Öğren</span>,<br />
              Başarıya <span className="text-blue-600">Dönüştür</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Başarısızlıklar artık son değil, yeni bir başlangıç. Deneyimlerini paylaş, 
              başkalarının deneyimlerinden öğren ve birlikte büyüyelim.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-blue-600 text-white px-8 py-6 text-lg">
                Hemen Başla
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Nasıl Çalışır?
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Neler Sunuyoruz?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deneyim Paylaşımı</h3>
              <p className="text-gray-600">
                Başarısızlık deneyimlerini anonim olarak paylaş, 
                başkalarının deneyimlerinden öğren.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Güvenli Platform</h3>
              <p className="text-gray-600">
                Anonim paylaşım seçeneği ve güvenli ortam ile 
                deneyimlerini rahatça paylaş.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mentorluk</h3>
              <p className="text-gray-600">
                Deneyimli kullanıcılardan öğren, 
                kendi deneyimlerinle başkalarına yol göster.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Fiyatlandırma</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Ücretsiz</h3>
              <p className="text-3xl font-bold mb-6">₺0 <span className="text-gray-500 text-base font-normal">/ay</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Aylık 2 paylaşım hakkı</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Temel kategorilere erişim</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="text-red-500" />
                  <span className="text-gray-400">Anonim paylaşım</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Başla</Button>
            </div>

            <div className="bg-blue-600 p-8 rounded-xl shadow-lg text-white transform scale-105">
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-3xl font-bold mb-6">₺49 <span className="text-gray-200 text-base font-normal">/ay</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-white" />
                  <span>Sınırsız paylaşım</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white" />
                  <span>Tüm kategorilere erişim</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white" />
                  <span>Anonim paylaşım</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white" />
                  <span>Özel mesajlaşma</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                Hemen Başla
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Kurumsal</h3>
              <p className="text-3xl font-bold mb-6">₺499 <span className="text-gray-500 text-base font-normal">/ay</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Premium özellikleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Özel grup oluşturma</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Analitik raporlar</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">İletişime Geç</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Kullanıcılarımız Ne Diyor?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <p className="text-gray-600 mb-4">
                "Başarısızlıklarımı paylaşmak başta zordu ama buradaki topluluk 
                sayesinde bunların birer öğrenme fırsatı olduğunu anladım."
              </p>
              <p className="font-semibold">Ahmet Y.</p>
              <p className="text-sm text-gray-500">Yazılım Geliştirici</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <p className="text-gray-600 mb-4">
                "Başkalarının deneyimlerinden öğrenmek, kendi hatalarımı 
                tekrarlamamama yardımcı oldu."
              </p>
              <p className="font-semibold">Ayşe M.</p>
              <p className="text-sm text-gray-500">Girişimci</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <p className="text-gray-600 mb-4">
                "Kurumsal üyelik sayesinde ekibimiz deneyimlerini paylaşıyor 
                ve birlikte öğreniyoruz."
              </p>
              <p className="font-semibold">Mehmet K.</p>
              <p className="text-sm text-gray-500">Takım Lideri</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Başarısızlıklarınızı Başarıya Dönüştürmeye Hazır mısınız?
          </h2>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
            Hemen Başla <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">FailLearn</h3>
              <p className="text-sm">
                Başarısızlıklardan öğrenerek büyüyen bir topluluk.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Ürün</h4>
              <ul className="space-y-2 text-sm">
                <li>Özellikler</li>
                <li>Fiyatlandırma</li>
                <li>SSS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Şirket</h4>
              <ul className="space-y-2 text-sm">
                <li>Hakkımızda</li>
                <li>İletişim</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Yasal</h4>
              <ul className="space-y-2 text-sm">
                <li>Gizlilik Politikası</li>
                <li>Kullanım Şartları</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 FailLearn. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;