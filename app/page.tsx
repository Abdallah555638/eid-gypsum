
"use client";

import {
  useEffect,
  useState,
  useRef,
  type FormEvent,
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

// رقم واتساب بصيغة دولية: بدون + أو الصفر المحلي الأول.
const WHATSAPP_NUMBER = "201016729062";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const projects = [
  {
    title: "تصميمات أسقف عصرية",
    category: "أسقف جبس بورد",
    image: "/assets/image%20%281%29.jpg",
  },
  {
    title: "تفاصيل داخلية أنيقة",
    category: "تشطيبات داخلية",
    image: "/assets/image%20%282%29.jpg",
  },
  
  {
    title: "تصميمات أسقف عصرية",
    category: "أسقف وديكورات",
    image: "/assets/image%20%284%29.jpg",
  },
  {
    title: "تفاصيل داخلية أنيقة",
    category: "تشطيبات داخلية",
    image: "/assets/image%20%285%29.jpg",
  },
  {
    title: "تصميم متكامل للمساحة",
    category: "أسقف جبس بورد",
    image: "/assets/image%20%286%29.jpg",
  },
  {
    title: "تصميمات أسقف عصرية",
    category: "ديكورات داخلية",
    image: "/assets/image%20%287%29.jpg",
  },
  {
    title: "تصميمات أسقف عصرية",
    category: "تشطيبات داخلية",
    image: "/assets/image%20%288%29.jpg",
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
  const projectsTrackRef = useRef<HTMLDivElement>(null);

  // تحريك سلايدر الأعمال بمقدار كارت واحد في كل مرة.
  const scrollProjects = (direction: "next" | "prev") => {
    const track = projectsTrackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".project-card");
    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "24") || 24;
    const distance = (card?.getBoundingClientRect().width || track.clientWidth) + gap;

    // لأن اتجاه الصفحة عربي (RTL)، السهم التالي يتحرك ناحية اليسار.
    track.scrollBy({
      left: direction === "next" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const generalMessage =
    "أهلًا Eid Gypsum، محتاج أستفسر عن خدمات الجبس بورد والتشطيبات.";

  const navItems = [
    { href: "#services", label: "خدماتنا" },
    { href: "#projects", label: "أعمالنا" },
    { href: "#process", label: "خطوات العمل" },
    { href: "#faq", label: "الأسئلة الشائعة" },
  ];

  // تجهيز بيانات الفورم في رسالة واتساب.
  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const projectType = String(
      formData.get("projectType") || ""
    ).trim();
    const location = String(
      formData.get("location") || ""
    ).trim();
    const area = String(formData.get("area") || "").trim();
    const details = String(
      formData.get("details") || ""
    ).trim();

    const message = [
      "أهلًا Eid Gypsum، عايز أستفسر عن تنفيذ مشروع.",
      "",
      `الاسم: ${name}`,
      `رقم الموبايل: ${phone}`,
      `نوع المشروع: ${projectType}`,
      location ? `المنطقة: ${location}` : "",
      area ? `المساحة التقريبية: ${area}` : "",
      details ? `تفاصيل المشروع: ${details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = getWhatsAppLink(message);
    const newWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    // بديل لو المتصفح منع فتح نافذة جديدة.
    if (!newWindow) {
      window.location.href = whatsappUrl;
    }
  };

  // إظهار أقسام الصفحة تدريجيًا أثناء النزول.
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
        ".lead-form-copy",
        ".lead-form",
        ".final-cta .section-kicker",
        ".final-cta h2",
        ".final-cta > p",
        ".final-cta > a",
      ].join(", ")
    );

    elements.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.transitionDelay = `${(index % 4) * 70}ms`;
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
        threshold: 0.1,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // شريط تقدم القراءة وتغيير شكل الـ Navbar أثناء التمرير.
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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main id="home">
      <div className="scroll-progress" aria-hidden="true" />

      {/* Announcement */}
      <div className="announcement">
        <span className="announcement-dot" />
        <span>كل تفصيلة بتفرق في شكل المكان</span>
      </div>

      {/* Navbar */}
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
            href="#contact-form"
            onClick={() => setMenuOpen(false)}
          >
            اطلب عرض سعر
          </a>
        </nav>

        <a className="nav-cta" href="#contact-form">
          <span>اطلب عرض سعر</span>
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

      {/* Hero */}
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

      {/* Trust */}
      <section className="trust-strip">
        <div className="trust-inner">
          <div className="trust-heading">
            <span>EID GYPSUM</span>
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

      {/* Services */}
      <section className="services section-wrap" id="services">
        <div className="section-heading">
          <div>
            <span className="section-kicker">WHAT WE DO</span>
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

      {/* Projects carousel */}
      <section className="projects-section" id="projects">
        <div className="section-wrap">
          <div className="section-heading projects-heading">
            <div>
              <span className="section-kicker">SELECTED SPACES</span>
              <h2>
                شوف التفاصيل،
                <br />
                <span>وتخيّل مساحتك.</span>
              </h2>
            </div>

            <div className="projects-heading-side">
              <p>
                شوف أفكار متنوعة للتصميم والتشطيبات، واختار الستايل
                الأقرب لتصورك قبل ما تناقش تفاصيل مشروعك.
              </p>

              <a
                className="text-link"
                href="#contact-form"
              >
                ناقش مشروعك معانا <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>

          <div className="projects-carousel">
            <div className="projects-carousel-toolbar">
              <span>اسحب أو استخدم الأسهم لمشاهدة باقي الأعمال</span>
              <div className="projects-carousel-buttons">
                <button
                  className="projects-carousel-button"
                  type="button"
                  onClick={() => scrollProjects("prev")}
                  aria-label="عرض الأعمال السابقة"
                >
                  <span aria-hidden="true">→</span>
                </button>
                <button
                  className="projects-carousel-button"
                  type="button"
                  onClick={() => scrollProjects("next")}
                  aria-label="عرض الأعمال التالية"
                >
                  <span aria-hidden="true">←</span>
                </button>
              </div>
            </div>

            <div className="projects-carousel-track" ref={projectsTrackRef}>
            {projects.map((project, index) => (
              <article className="project-card" key={`${project.image}-${index}`}>

                <a
                  className="project-image-wrap"
                  href={getWhatsAppLink(
                    `أهلًا Eid Gypsum، مهتم بفكرة ${project.title} وعايز أستفسر عن تنفيذ تصميم مشابه.`
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

        </div>
      </section>

      {/* Process */}
      <section className="process section-wrap" id="process">
        <div className="section-heading">
          <div>
            <span className="section-kicker">OUR PROCESS </span>
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
            <span className="section-kicker">GOOD TO KNOW </span>
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

      {/* Lead form */}
      <section className="lead-form-section" id="contact-form">
        <div className="section-wrap lead-form-layout">
          <div className="lead-form-copy">
            <span className="section-kicker">
              START YOUR PROJECT 
            </span>

            <h2>
              عندك مشروع في بالك؟
              <br />
              <span>احكيلنا عنه.</span>
            </h2>

            <p>
              سواء بتجهز شقة أو فيلا أو مساحة تجارية، شاركنا تفاصيل
              مشروعك عشان نقدر نناقش معاك الخدمة المناسبة والخطوة الجاية.
            </p>

            <div className="lead-form-benefits">
              <div>
                <Icon name="check" size={19} />
                <span>حدد نوع المشروع واحتياجاتك</span>
              </div>

              <div>
                <Icon name="check" size={19} />
                <span>شاركنا المنطقة والمساحة التقريبية</span>
              </div>

              <div>
                <Icon name="chat" size={19} />
                <span>كمّل التواصل مباشرة على واتساب</span>
              </div>
            </div>
          </div>

          <form className="lead-form" onSubmit={handleLeadSubmit}>
            <div className="form-heading">
              <span>PROJECT INQUIRY</span>
              <h3>تفاصيل مشروعك</h3>
              <p>
                املأ البيانات الأساسية، والحقول بعلامة * مطلوبة.
              </p>
            </div>

            <div className="form-grid">
              <label className="form-field">
                <span>الاسم بالكامل *</span>
                <input
                  type="text"
                  name="name"
                  placeholder="اكتب اسمك"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </label>

              <label className="form-field">
                <span>رقم الموبايل *</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="01XXXXXXXXX"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={25}
                  required
                />
              </label>

              <label className="form-field">
                <span>نوع المشروع *</span>
                <select
                  name="projectType"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    اختار نوع المشروع
                  </option>
                  <option value="شقة سكنية">شقة سكنية</option>
                  <option value="فيلا">فيلا</option>
                  <option value="محل تجاري">محل تجاري</option>
                  <option value="مكتب إداري">مكتب إداري</option>
                  <option value="مشروع آخر">مشروع آخر</option>
                </select>
              </label>

              <label className="form-field">
                <span>المنطقة أو المدينة</span>
                <input
                  type="text"
                  name="location"
                  placeholder="مثال: القاهرة الجديدة"
                  autoComplete="address-level2"
                  maxLength={100}
                />
              </label>

              <label className="form-field form-field-full">
                <span>المساحة التقريبية</span>
                <select name="area" defaultValue="">
                  <option value="">
                    اختار المساحة (اختياري)
                  </option>
                  <option value="أقل من 100 متر">
                    أقل من 100 م²
                  </option>
                  <option value="100–200 متر">100–200 م²</option>
                  <option value="أكثر من 200 متر">
                    أكثر من 200 م²
                  </option>
                  <option value="لسه مش محدد">لسه مش محدد</option>
                </select>
              </label>

              <label className="form-field form-field-full">
                <span>تفاصيل إضافية عن المشروع</span>
                <textarea
                  name="details"
                  rows={4}
                  maxLength={1000}
                  placeholder="محتاج أسقف جبس بورد، ديكورات جدارية، أو تشطيبات؟ احكيلنا عن فكرتك..."
                />
              </label>
            </div>

            <button
              className="button button-gold form-submit"
              type="submit"
            >
              <Icon name="chat" size={19} />
              <span>إرسال الطلب عبر واتساب</span>
              <Icon name="arrow" size={17} />
            </button>

            <p className="form-note">
              بياناتك هتتجهز في رسالة واتساب، ومش هتتبعت إلا لما تضغط
              إرسال داخل واتساب.
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta section-wrap" id="contact">
        <div className="cta-decoration" />

        <span className="section-kicker">
          LET'S START SOMETHING
        </span>

        <h2>
          جاهز تبدأ مشروعك؟
          <br />
          <span>خلينا نبدأ من هنا.</span>
        </h2>

        <p>
          احكيلنا عن مساحتك والتصميم اللي بتفكر فيه،
          وابدأ أول خطوة مع Eid Gypsum.
        </p>

        <a className="button button-gold" href="#contact-form">
          <span>اطلب عرض سعر</span>
          <Icon name="arrow" size={17} />
        </a>

        <span className="cta-footnote">
          تواصل مباشر لمناقشة احتياجات مشروعك
        </span>
      </section>

      {/* Footer */}
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

      {/* Floating WhatsApp */}
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
