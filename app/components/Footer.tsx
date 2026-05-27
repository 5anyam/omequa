import { Zap, Mail, Phone, MapPin, Globe, MessageCircle, Share2 } from "lucide-react";

const links = {
  Products: ["Omega-3 Fish Oil", "Omega-3 + D3", "Triple Pack", "All Supplements"],
  Company: ["About Us", "Our Science", "Lab Reports", "Blog"],
  Support: ["FAQ", "Shipping Info", "Returns", "Contact Us"],
};

export default function Footer() {
  return (
    <footer id="about" className="bg-blue-950 text-white">
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-black mb-3">
            Start Your Wellness Journey Today
          </h3>
          <p className="text-blue-100 mb-6 text-sm">
            30-day money-back guarantee. No questions asked.
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-white text-blue-800 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-all hover:shadow-xl active:scale-95"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">Omequa</span>
                <span className="text-[9px] text-blue-400 font-medium tracking-widest block leading-none">
                  LIFE SCIENCES
                </span>
              </div>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed mb-6 max-w-xs">
              Premium, clinically-backed nutritional supplements crafted for
              modern wellness. Lab tested, sustainably sourced.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <Mail className="w-4 h-4 text-blue-500" />
                support@omequalife.com
              </div>
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <Phone className="w-4 h-4 text-blue-500" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <MapPin className="w-4 h-4 text-blue-500" />
                Bangalore, Karnataka, India
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-bold text-sm text-white mb-4 tracking-wider">{heading}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-blue-300 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-900 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-400 text-xs">
            © 2025 Omequa Life Sciences. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { Icon: Globe, label: "Website" },
              { Icon: MessageCircle, label: "WhatsApp" },
              { Icon: Share2, label: "Share" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-blue-900 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4 text-blue-300" />
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-blue-400 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-400 hover:text-white text-xs transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
