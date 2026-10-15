
"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type IconName =
  | "arrow"
  | "chat"
  | "ceiling"
  | "wall"
  | "light"
  | "partition"
  | "sparkle"
  | "check";

function Icon({
  name,
  size = 22,
}: {
  name: IconName;
  size?: number;
}) {
  let content: ReactNode;

  switch (name) {
    case "arrow":
      content = <path d="M7 17 17 7M7 7h10v10" />;
      break;
    case "chat":
      content = (
        <>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
          <path d="M8 10h8M8 14h5" />
        </>
      );
      break;
    case "ceiling":
      content = (
        <>
          <path d="M3 7h18M5 7v10h14V7" />
          <path d="M8 17v-4h8v4M3 20h18" />
        </>
      );
      break;
    case "wall":
      content = (
        <>
          <path d="M4 4h16v16H4z" />
          <path d="M4 9h16M4 15h16M10 4v5M15 9v6M9 15v5" />
        </>
      );
      break;
    case "light":
      content = (
        <>
          <path d="M9 18h6M10 22h4M8 14a7 7 0 1 1 8 0c-1 .8-1 2-1 2h-6s0-1.2-1-2Z" />
          <path d="M12 2v2M4.9 4.9l1.4 1.4M19.1 4.9l-1.4 1.4" />
        </>
      );
      break;
    case "partition":
      content = (
        <>
          <path d="M4 3h16v18H4z" />
          <path d="M12 3v18M4 9h8M12 15h8" />
        </>
      );
      break;
    case "sparkle":
      content = (
        <>
          <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
          <path d="m19 15 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
        </>
      );
      break;
    case "check":
      content = <path d="m5 12 4 4L19 6" />;
      break;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}

// WhatsApp number without "+" or the local leading zero.
const WHATSAPP_NUMBER = "201016729062";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Put your actual project photos in public/images with these names.
// You can add or remove projects from this array.
const projects = [
  {
    title: "مشروع جبس بورد 01",
    category: "أسقف جبس بورد",
    image: "/images/project-01.jpg",
  },
  {
    title: "مشروع تشطيبات 02",
    category: "تشطيبات داخلية",
    image: "/images/project-02.jpg",
  },
  {
    title: "مشروع ديكورات 03",
    category: "ديكورات داخلية",
    image: "/images/project-03.jpg",
  },
  {
    title: "مشروع جبس بورد 04",
    category: "أسقف وديكورات",
    image: "/images/project-04.jpg",
  },
  {
    title: "مشروع تشطيبات 05",
    category: "تشطيبات داخلية",
    image: "/images/project-05.jpg",
  },
];

const services: {
  number: string;
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: "ceiling",
    title: "الأسقف المعلقة",
    description:
      "تصميمات جبس بورد عصرية تتناسق مع مساحة المكان وتفاصيله.",
  },
  {
    number: "02",
    icon: "wall",
    title: "الديكورات الجدارية",
    description:
      "لمسات جمالية للجدران تضيف شخصية مميزة للتصميم الداخلي.",
  },
  {
    number: "03",
    icon: "light",
    title: "تفاصيل الإضاءة",
    description:
      "تصميمات جبس بورد تبرز جمال الإضاءة وتكمل شكل المساحة.",
  },
  {
    number: "04",
    icon: "partition",
    title: "القواطيع والتقسيمات",
    description:
      "حلول لتقسيم المساحات بما يتناسب مع طبيعة المكان واحتياجاته.",
  },
];

const faqs = [
  {
    question: "إزاي أعرف تكلفة شغل الجبس بورد؟",
    answer:
      "التكلفة بتختلف حسب مساحة المشروع والتصميم والخامات وتفاصيل التنفيذ. ابعتلنا تفاصيل مشروعك على واتساب عشان نناقش احتياجاتك.",
  },
  {
    question: "هل ممكن أنفذ تصميم من صورة عندي؟",
    answer:
      "تقدر تبعتلنا الصورة أو التصميم اللي في بالك على واتساب، ونناقش معاك إمكانية التنفيذ حسب طبيعة المكان.",
  },
  {
    question: "هل أقدر أطلب معاينة للمشروع؟",
    answer:
      "تواصل معانا وشاركنا المنطقة ونوع المشروع، وهنناقش معاك الخطوة المناسبة وإمكانية المعاينة.",
  },
  {
    question: "هل بتقدموا الخدمة في منطقتي؟",
    answer:
      "ابعتلنا اسم منطقتك على واتساب عشان نقدر نوضح لك مدى توفر الخدمة فيها.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const projectsSliderRef = useRef<HTMLDivElement>(null);

  const generalMessage =
    "أهلًا Eid Gypsum، محتاج استفسر عن خدمات الجبس بورد والتشطيبات.";

  const navItems = [
    { href: "#services", label: "خدماتنا" },
    { href: "#projects", label: "أعمالنا" },
    { href: "#process", label: "خطوات العمل" },
    { href: "#faq", label: "الأسئلة الشائعة" },
  ];

  // Move the slider one card at a time.
  const scrollProjects = (direction: -1 | 1) => {
    const viewport = projectsSliderRef.current;
    if (!viewport) return;

    const card = viewport.querySelector<HTMLElement>(".project-card");
    const track = viewport.querySelector<HTMLElement>(".projects-track");

    if (!card) return;

    const gap = track
      ? parseFloat(getComputedStyle(track).columnGap) || 0
      : 0;

    viewport.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  // Reveal elements when they enter the viewport.
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      [
        ".hero-copy",
        ".hero-visual",
        ".trust-item",
        ".service-card",
        ".project-card",
        ".process-step",
        ".faq-intro",
        ".faq-item",
        ".final-cta .section-kicker",
        ".final-cta h2",
        ".final-cta > p",
        ".final-cta > a",
      ].join(", ")
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.transitionDelay = `${(index % 4) * 90}ms`;
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Navbar background and reading progress while scrolling.
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const nextScrolled = scrollTop > 24;

      setIsScrolled((current) =>
        current === nextScrolled ? current : nextScrolled
      );

      const root = document.documentElement;
      const maxScroll = root.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      root.style.setProperty("--scroll-progress", `${progress}%`);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main id="home">
      <div className="scroll-progress" aria-hidden="true" />

      <div className="announcement">
        <span className="announcement-dot" />
        <span>كل تفصيلة بتفرق في شكل المكان</span>
      </div>

      {/* NAVBAR */}
      <header
        className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
      >
        <a
          href="#home"
          className="brand"
          aria-label="Eid Gypsum الصفحة الرئيسية"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/images/eid-gypsum-logo.png-removebg-preview.png"
            alt="Eid Gypsum"
            className="brand-logo"
            style={{
              width: "clamp(125px, 14vw, 165px)",
              height: "48px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            className="mobile-nav-cta"
            href={getWhatsAppLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            تواصل معنا
          </a>
        </nav>

        <a
          className="nav-cta"
          href={getWhatsAppLink(generalMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>اطلب استفسارك</span>
          <Icon name="arrow" size={17} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* HERO */}
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            حلول الجبس بورد والتشطيبات الداخلية
          </div>

          <h1>
            تفاصيل تصنع الفرق،
            <br />
            وتشطيب <span>يليق بمساحتك.</span>
          </h1>

          <p className="hero-description">
            بنساعدك تحوّل فكرتك لمساحة متناسقة بتفاصيل مدروسة،
            من تصميمات الجبس بورد لحد اللمسات النهائية.
            احكيلنا عن مشروعك ونبدأ من هنا.
          </p>

          <div className="hero-actions">
            <a
              className="button button-gold"
              href={getWhatsAppLink(
                "أهلًا Eid Gypsum، حابب أستفسر عن تنفيذ مشروع جبس بورد أو تشطيبات."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="chat" size={19} />
              <span>ابدأ محادثة واتساب</span>
              <Icon name="arrow" size={17} />
            </a>

            <a className="button button-outline" href="#projects">
              شوف أعمالنا
            </a>
          </div>

          <div className="hero-points">
            <div>
              <span className="point-icon">
                <Icon name="check" size={16} />
              </span>
              <span>اهتمام بالتفاصيل</span>
            </div>
            <div>
              <span className="point-icon">
                <Icon name="check" size={16} />
              </span>
              <span>تصميم يناسب مساحتك</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=90"
              alt="تصميم داخلي عصري وإلهام لأعمال الجبس بورد"
              fetchPriority="high"
            />

            <div className="image-shade" />

            <div className="hero-image-caption">
              <span className="caption-line" />
              <div>
                <small>DESIGN WITH PURPOSE</small>
                <strong>جمال في كل تفصيلة</strong>
              </div>
            </div>
          </div>

          <div className="hero-stamp">
            <Icon name="sparkle" size={25} />
            <span>تصميم</span>
            <span className="stamp-divider" />
            <span>تنفيذ</span>
            <span className="stamp-divider" />
            <span>تشطيب</span>
          </div>

          <span className="hero-decoration decoration-one" />
          <span className="hero-decoration decoration-two" />
        </div>
      </section>

      {/* TRUST */}
      <section className="trust-strip">
        <div className="trust-inner">
          <div className="trust-heading">
            <span>01 / EID GYPSUM</span>
            <strong>مساحتك تستحق اهتمامًا بالتفاصيل.</strong>
          </div>

          <div className="trust-item">
            <Icon name="sparkle" size={23} />
            <div>
              <strong>تصميم مدروس</strong>
              <span>حلول تناسب طبيعة المكان</span>
            </div>
          </div>

          <div className="trust-item">
            <Icon name="check" size={23} />
            <div>
              <strong>وضوح في التفاصيل</strong>
              <span>مناقشة متطلبات المشروع</span>
            </div>
          </div>

          <div className="trust-item">
            <Icon name="chat" size={23} />
            <div>
              <strong>تواصل مباشر</strong>
              <span>ابدأ استفسارك على واتساب</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section-wrap" id="services">
        <div className="section-heading">
          <div>
            <span className="section-kicker">WHAT WE DO / 02</span>
            <h2>
              حلول متكاملة،
              <br />
              <span>وتفاصيل تناسبك.</span>
            </h2>
          </div>

          <p>
            لكل مساحة احتياجاتها. اختار الخدمة اللي بتدور عليها،
            وخلينا نناقش معاك تفاصيل مشروعك.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <a
              className="service-card"
              href={getWhatsAppLink(
                `أهلًا Eid Gypsum، محتاج أستفسر عن خدمة ${service.title}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              key={service.number}
            >
              <div className="service-top">
                <span className="service-icon">
                  <Icon name={service.icon} size={28} />
                </span>
                <span className="service-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <span className="service-link">
                <span>اسأل عن الخدمة</span>
                <Icon name="arrow" size={18} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* PROJECTS SLIDER */}
      <section className="projects-section" id="projects">
        <div className="section-wrap">
          <div className="section-heading projects-heading">
            <div>
              <span className="section-kicker">SELECTED SPACES / 03</span>
              <h2>
                شوف التفاصيل،
                <br />
                <span>وتخيّل مساحتك.</span>
              </h2>
            </div>

            <div className="projects-heading-side">
              <p>
                مجموعة من مشاريع الجبس بورد والتشطيبات الداخلية.
                اسحب الصور لاكتشاف المزيد، وتواصل معنا لو عندك فكرة مشابهة.
              </p>

              <a
                className="text-link"
                href={getWhatsAppLink(
                  "أهلًا Eid Gypsum، حابب أناقش فكرة مشروعي وأعرف تفاصيل التنفيذ."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                ناقش فكرتك معانا <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>

          <div className="projects-carousel-controls">
            <p className="carousel-hint">
              اسحب الصور لاستكشاف أعمالنا
            </p>

            <div className="carousel-buttons">
              <button
                className="carousel-button"
                type="button"
                onClick={() => scrollProjects(-1)}
                aria-label="المشروع السابق"
                title="المشروع السابق"
              >
                ←
              </button>

              <button
                className="carousel-button"
                type="button"
                onClick={() => scrollProjects(1)}
                aria-label="المشروع التالي"
                title="المشروع التالي"
              >
                →
              </button>
            </div>
          </div>

          <div
            className="projects-viewport"
            dir="ltr"
            ref={projectsSliderRef}
          >
            <div className="projects-track">
              {projects.map((project, index) => (
                <article className="project-card" key={project.image}>
                  <a
                    className="project-image-wrap"
                    href={getWhatsAppLink(
                      `أهلًا Eid Gypsum، مهتم بمشروع ${project.title} وعايز أستفسر عن تنفيذ تصميم مشابه.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`استفسر عن ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />

                    <span className="project-overlay">
                      <span className="project-open">
                        <Icon name="arrow" size={22} />
                      </span>
                    </span>

                    <span className="project-index">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                  </a>

                  <div className="project-info">
                    <div>
                      <span>{project.category}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <Icon name="arrow" size={19} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="image-note">
            استبدل الصور بأعمال Eid Gypsum الحقيقية قبل النشر.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process section-wrap" id="process">
        <div className="section-heading">
          <div>
            <span className="section-kicker">OUR PROCESS / 04</span>
            <h2>
              البداية بسيطة،
              <br />
              <span>والخطوات واضحة.</span>
            </h2>
          </div>

          <p>
            بنبدأ بفهم احتياجاتك، ثم نناقش التفاصيل عشان تكون الصورة
            واضحة قبل الاتفاق على التنفيذ.
          </p>
        </div>

        <div className="process-grid">
          <article className="process-step">
            <span className="process-number">01</span>
            <div className="process-line" />
            <h3>احكيلنا عن مشروعك</h3>
            <p>شاركنا نوع المكان والمنطقة والفكرة اللي في بالك.</p>
          </article>

          <article className="process-step">
            <span className="process-number">02</span>
            <div className="process-line" />
            <h3>ناقش التفاصيل</h3>
            <p>نناقش الخدمة المطلوبة والتصميم واحتياجات المساحة.</p>
          </article>

          <article className="process-step">
            <span className="process-number">03</span>
            <div className="process-line" />
            <h3>حدد الخطوة الجاية</h3>
            <p>نتفق على نطاق العمل والتكلفة والجدول المناسب للمشروع.</p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="section-wrap faq-layout">
          <div className="faq-intro">
            <span className="section-kicker">GOOD TO KNOW / 05</span>
            <h2>
              عندك سؤال؟
              <br />
              <span>إحنا معاك.</span>
            </h2>

            <p>
              جمعنالك إجابات لأهم الأسئلة. ولو محتاج تفاصيل أكتر،
              تواصل معانا مباشرة.
            </p>

            <a
              className="button button-outline"
              href={getWhatsAppLink(
                "أهلًا Eid Gypsum، عندي سؤال بخصوص خدماتكم."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              اسألنا على واتساب <Icon name="arrow" size={17} />
            </a>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article className="faq-item" key={faq.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  <span className="faq-plus">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta section-wrap" id="contact">
        <div className="cta-decoration" />

        <span className="section-kicker">
          LET'S START SOMETHING / 06
        </span>

        <h2>
          عندك مشروع في بالك؟
          <br />
          <span>خلينا نبدأ من هنا.</span>
        </h2>

        <p>
          احكيلنا عن مساحتك والتصميم اللي بتفكر فيه،
          وابدأ أول خطوة مع Eid Gypsum.
        </p>

        <a
          className="button button-gold"
          href={getWhatsAppLink(
            "أهلًا Eid Gypsum، عندي مشروع وعايز أبدأ مناقشة التفاصيل."
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="chat" size={19} />
          <span>تواصل معانا على واتساب</span>
          <Icon name="arrow" size={17} />
        </a>

        <span className="cta-footnote">
          تواصل مباشر لمناقشة احتياجات مشروعك
        </span>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <a
            href="#home"
            className="brand footer-brand"
            aria-label="Eid Gypsum الصفحة الرئيسية"
          >
            <img
              src="/images/eid-gypsum-logo.png-removebg-preview.png"
              alt="Eid Gypsum"
              className="brand-logo"
              style={{
                width: "clamp(125px, 14vw, 165px)",
                height: "48px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </a>

          <p>
            تصميمات جبس بورد وتشطيبات داخلية،
            مع اهتمام بالتفاصيل من أول فكرة.
          </p>

          <a
            className="footer-whatsapp"
            href={getWhatsAppLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="chat" size={19} />
            ابدأ محادثة
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Eid Gypsum. All rights reserved.</span>
          <a href="#home">العودة للأعلى ↑</a>
          <span>DESIGN · BUILD · INSTALL</span>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        className="floating-whatsapp"
        href={getWhatsAppLink(generalMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مع Eid Gypsum على واتساب"
      >
        <Icon name="chat" size={24} />
        <span>كلّمنا على واتساب</span>
      </a>
    </main>
  );
}
