"use client";
import React, { useEffect, useRef } from 'react';
import styles from './WebDevelopment.module.scss';

const WebDevelopmentPage = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef([]);

  // Page Overview
  const overview = {
    title: 'Web Development',
    subtitle: 'Custom Websites That Drive Results',
    description: 'From content-managed sites to powerful e-commerce stores and fully custom platforms—we build websites that are fast, secure, and built for growth.',
    stats: [
      { value: '150+', label: 'Websites Launched' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '40%', label: 'Avg. Speed Improvement' },
      { value: '24/7', label: 'Support & Maintenance' }
    ]
  };

  // Development Platforms
  const platforms = [
    {
      id: 1,
      name: 'WordPress',
      icon: './wordpress.png',
      description: 'Flexible content management for blogs, business sites, and complex portals.',
      bestFor: ['Blogs & Magazines', 'Business Websites', 'News Portals', 'Membership Sites', 'Learning Management'],
      features: [
        'Custom Theme Development',
        'Plugin Integration',
        'WooCommerce Stores',
        'Multilingual Support',
        'SEO Optimized',
        'Easy Content Updates'
      ],
      color: 'wordpress',
      stats: '43% of all websites'
    },
    {
      id: 2,
      name: 'Shopify',
      icon: './shopify.png',
      description: 'Powerful e-commerce platform for businesses ready to sell online.',
      bestFor: ['Online Stores', 'Dropshipping', 'Digital Products', 'Print-on-Demand', 'Multi-channel Selling'],
      features: [
        'Custom Theme Design',
        'App Integrations',
        'Payment Gateway Setup',
        'Inventory Management',
        'Mobile Optimized',
        'Abandoned Cart Recovery'
      ],
      color: 'shopify',
      stats: '4.8M+ active stores'
    },
    {
      id: 3,
      name: 'Custom Coded',
      icon: './browser.png',
      description: 'Fully bespoke solutions built from scratch for unique business needs.',
      bestFor: ['Complex Applications', 'Marketplaces', 'SaaS Platforms', 'Enterprise Solutions', 'Custom Portals'],
      features: [
        'React/Next.js Frontend',
        'Node.js/PHP Backend',
        'Custom Database Design',
        'API Development',
        'Scalable Architecture',
        'Complete Design Freedom'
      ],
      color: 'custom',
      stats: '100% tailored to you'
    }
  ];

  // Platform Comparison
  const comparisonFeatures = [
    {
      feature: 'Ease of Use',
      wordpress: '⭐⭐⭐',
      shopify: '⭐⭐⭐⭐',
      custom: '⭐⭐'
    },
    {
      feature: 'Customization',
      wordpress: '⭐⭐⭐⭐',
      shopify: '⭐⭐⭐',
      custom: '⭐⭐⭐⭐⭐'
    },
    {
      feature: 'E-commerce Features',
      wordpress: '⭐⭐⭐',
      shopify: '⭐⭐⭐⭐⭐',
      custom: '⭐⭐⭐⭐'
    },
    {
      feature: 'Scalability',
      wordpress: '⭐⭐⭐',
      shopify: '⭐⭐⭐⭐',
      custom: '⭐⭐⭐⭐⭐'
    },
    {
      feature: 'Maintenance',
      wordpress: '⭐⭐⭐',
      shopify: '⭐⭐⭐⭐',
      custom: '⭐⭐⭐⭐'
    },
    {
      feature: 'Time to Launch',
      wordpress: '⭐⭐⭐⭐',
      shopify: '⭐⭐⭐⭐⭐',
      custom: '⭐⭐⭐'
    }
  ];

  // Our Process
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We learn about your business, goals, and target audience to create a strategic roadmap.',
      deliverables: ['Requirements Analysis', 'Sitemap', 'Wireframes', 'Tech Stack Recommendation']
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create beautiful, user-friendly interfaces that reflect your brand.',
      deliverables: ['UI/UX Design', 'Interactive Prototypes', 'Mobile Responsive', 'Brand Integration']
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our developers bring the design to life with clean, efficient code.',
      deliverables: ['Frontend Development', 'Backend Integration', 'CMS Setup', 'Custom Features']
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing across devices and browsers to ensure flawless performance.',
      deliverables: ['Cross-browser Testing', 'Mobile Testing', 'Performance Optimization', 'Security Audit']
    },
    {
      step: '05',
      title: 'Launch & Deploy',
      description: 'Smooth deployment to production with zero downtime.',
      deliverables: ['Server Configuration', 'DNS Setup', 'Data Migration', 'Launch Monitoring']
    },
    {
      step: '06',
      title: 'Ongoing Support',
      description: 'Continuous maintenance, updates, and improvements after launch.',
      deliverables: ['Regular Updates', 'Security Patches', 'Backup Management', 'Performance Monitoring']
    }
  ];

  // WordPress Features
  const wordpressFeatures = [
    {
      category: 'Themes',
      items: ['Custom Theme Development', 'Child Theme Setup', 'Theme Customization', 'Responsive Design']
    },
    {
      category: 'Plugins',
      items: ['Custom Plugin Development', 'WooCommerce Integration', 'SEO Optimization (Yoast/RankMath)', 'Security (Wordfence/Sucuri)']
    },
    {
      category: 'Performance',
      items: ['Caching Setup', 'Image Optimization', 'Database Optimization', 'CDN Integration']
    },
    {
      category: 'Content',
      items: ['Custom Post Types', 'Advanced Custom Fields', 'Gutenberg Blocks', 'Multilingual (WPML/Polylang)']
    }
  ];

  // Shopify Features
  const shopifyFeatures = [
    {
      category: 'Store Design',
      items: ['Custom Theme Development', 'Section-based Design', 'Mobile-first Approach', 'Checkout Customization']
    },
    {
      category: 'Products',
      items: ['Product Listings', 'Variant Management', 'Inventory Tracking', 'Digital Downloads']
    },
    {
      category: 'Marketing',
      items: ['SEO Optimization', 'Email Marketing Integration', 'Social Media Integration', 'Discount & Promotions']
    },
    {
      category: 'Apps & Integrations',
      items: ['Payment Gateways', 'Shipping Solutions', 'Accounting Integration', 'Reviews & Ratings']
    }
  ];

  // Custom Development Features
  const customFeatures = [
    {
      category: 'Frontend',
      items: ['React / Next.js', 'Vue.js / Nuxt.js', 'TypeScript', 'Tailwind CSS / Styled Components']
    },
    {
      category: 'Backend',
      items: ['Node.js / Express', 'PHP / Laravel', 'Python / Django', 'Ruby on Rails']
    },
    {
      category: 'Database',
      items: ['MySQL / PostgreSQL', 'MongoDB', 'Firebase', 'GraphQL / REST APIs']
    },
    {
      category: 'DevOps',
      items: ['AWS / Azure / GCP', 'Docker / Kubernetes', 'CI/CD Pipelines', 'Serverless Architecture']
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      title: 'Mobile-First Approach',
      description: 'All websites are built mobile-first to ensure perfect experiences on every device.',
      icon: '📱'
    },
    {
      title: 'SEO Optimized',
      description: 'Clean code, fast loading, and proper structure for better search rankings.',
      icon: '🔍'
    },
    {
      title: 'Performance Focused',
      description: 'Optimized for speed with 90+ PageSpeed scores and Core Web Vitals compliance.',
      icon: '⚡'
    },
    {
      title: 'Secure by Default',
      description: 'SSL certificates, security hardening, and regular updates to protect your site.',
      icon: '🔒'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business—from startup to enterprise.',
      icon: '📈'
    },
    {
      title: 'Ongoing Support',
      description: '24/7 maintenance, updates, and priority support for all clients.',
      icon: '🛠️'
    }
  ];

  // Tech Stack
  const techStack = [
    {
      category: 'CMS & E-commerce',
      technologies: ['WordPress', 'WooCommerce', 'Shopify', 'Liquid', 'Webflow']
    },
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'PHP', 'Python', 'Laravel', 'Express']
    },
    {
      category: 'Database',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase']
    },
    {
      category: 'DevOps',
      technologies: ['AWS', 'Vercel', 'Netlify', 'Docker', 'GitHub Actions']
    }
  ];

  // Portfolio Highlights
  const portfolio = [
    {
      name: 'Luxury Fashion Store',
      platform: 'Shopify',
      description: 'High-end e-commerce store with custom theme and integrated lookbook.',
      image: '👗'
    },
    {
      name: 'Global News Portal',
      platform: 'WordPress',
      description: 'High-traffic news site with custom Gutenberg blocks and paywall integration.',
      image: '📰'
    },
    {
      name: 'SaaS Analytics Platform',
      platform: 'Custom (React/Node.js)',
      description: 'Real-time analytics dashboard with custom API and data visualization.',
      image: '📊'
    },
    {
      name: 'Membership Learning Site',
      platform: 'WordPress + LearnDash',
      description: 'Complete LMS with course management, quizzes, and certificates.',
      image: '🎓'
    },
    {
      name: 'Multi-vendor Marketplace',
      platform: 'Custom (Next.js)',
      description: 'Platform connecting buyers and sellers with commission management.',
      image: '🏪'
    },
    {
      name: 'Restaurant Ordering System',
      platform: 'Shopify + Custom',
      description: 'Online ordering with table reservations and delivery management.',
      image: '🍔'
    }
  ];

  // FAQ
  const faqs = [
    {
      question: 'Which platform is right for my business?',
      answer: 'It depends on your needs: WordPress for content-heavy sites, Shopify for e-commerce, and custom for unique functionality. We help you choose the best option during our discovery phase.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Timeline varies by complexity: WordPress sites (4-8 weeks), Shopify stores (3-6 weeks), custom websites (8-16 weeks).'
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes! We offer maintenance packages including updates, backups, security monitoring, and performance optimization.'
    },
    {
      question: 'Can I update the content myself?',
      answer: 'Absolutely! We build with user-friendly CMS options so you can easily update text, images, and products without technical knowledge.'
    },
    {
      question: 'Do you handle hosting and domain?',
      answer: 'We can set up hosting and domain registration for you, or work with your existing providers.'
    },
    {
      question: 'Is my website mobile-friendly?',
      answer: 'Every site we build is fully responsive and looks perfect on all devices—phones, tablets, and desktops.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    contentRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getPlatformColor = (color) => {
    switch (color) {
      case 'wordpress': return styles.wordpress;
      case 'shopify': return styles.shopify;
      case 'custom': return styles.custom;
      default: return '';
    }
  };

  const getRatingStars = (rating) => {
    return rating;
  };

  return (
    <div className={styles.wrapperWebDevPage} ref={sectionRef}>
      {/* Hero Section */}
      <section className={styles.wrapperHeroSection}>
        <div className={styles.wrapperBackgroundPattern}>
          <div className={styles.wrapperPatternGradient}></div>
          <div className={styles.wrapperPatternGrid}></div>
        </div>

        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperHeroContent}>
            <div className={styles.wrapperHeroText}>
              <span className={styles.wrapperHeroBadge}>Web Development</span>
              <h1 className={styles.wrapperHeroTitle}>{overview.title}</h1>
              <p className={styles.wrapperHeroSubtitle}>{overview.subtitle}</p>
              <p className={styles.wrapperHeroDescription}>{overview.description}</p>
              
              <div className={styles.wrapperHeroStats}>
                {overview.stats.map((stat, index) => (
                  <div key={index} className={styles.wrapperHeroStat}>
                    <span className={styles.wrapperStatValue}>{stat.value}</span>
                    <span className={styles.wrapperStatLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* <div className={styles.wrapperHeroButtons}>
                <button className={styles.wrapperPrimaryButton}>
                  Start Your Project
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className={styles.wrapperSecondaryButton}>
                  View Portfolio
                </button>
              </div> */}
            </div>
            <div className={styles.wrapperHeroImage}>
              <div className={styles.wrapperImageCircle}>
                <span className={styles.wrapperImageEmoji}>💻</span>
              </div>
              <div className={styles.wrapperFloatingIcons}>
                <span className={styles.wrapperFloatingIcon}>
                  <img src="./wordpress.png" alt="WordPress" />
                </span>
                <span className={styles.wrapperFloatingIcon}>
                  <img src="./shopify.png" alt="Shopify" />
                </span>
                <span className={styles.wrapperFloatingIcon}>
                  <img src="./browser.png" alt="Custom" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className={styles.wrapperPlatformsSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <span className={styles.wrapperSectionSubtitle}>Choose Your Platform</span>
            <h2 className={styles.wrapperSectionTitle}>Development <span className={styles.wrapperHighlight}>Solutions</span></h2>
            <p className={styles.wrapperSectionDescription}>
              From content management to e-commerce and fully custom solutions—we've got you covered.
            </p>
          </div>

          <div className={styles.wrapperPlatformsGrid}>
            {platforms.map((platform, index) => (
              <div
                key={platform.id}
                className={`${styles.wrapperPlatformCard} ${getPlatformColor(platform.color)}`}
                ref={(el) => (contentRef.current[index] = el)}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.wrapperPlatformHeader}>
                  <span className={styles.wrapperPlatformIcon}><img src={platform.icon} alt={platform.name} /></span>
                  <h3 className={styles.wrapperPlatformName}>{platform.name}</h3>
                  <span className={styles.wrapperPlatformStats}>{platform.stats}</span>
                </div>
                <p className={styles.wrapperPlatformDescription}>{platform.description}</p>
                
                <div className={styles.wrapperPlatformBestFor}>
                  <strong>Best for:</strong>
                  <div className={styles.wrapperBestForTags}>
                    {platform.bestFor.map((item, idx) => (
                      <span key={idx} className={styles.wrapperBestForTag}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.wrapperPlatformFeatures}>
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className={styles.wrapperPlatformFeature}>
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WordPress Deep Dive */}
      <section className={styles.wrapperWordPressSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <span className={styles.wrapperSectionSubtitle}>WordPress Development</span>
            <h2 className={styles.wrapperSectionTitle}>Powerful <span className={styles.wrapperHighlight}>Content Management</span></h2>
          </div>

          <div className={styles.wrapperFeaturesGrid}>
            {wordpressFeatures.map((feature, index) => (
              <div key={index} className={styles.wrapperFeatureCategory}>
                <h3 className={styles.wrapperFeatureCategoryTitle}>{feature.category}</h3>
                <ul className={styles.wrapperFeatureList}>
                  {feature.items.map((item, idx) => (
                    <li key={idx} className={styles.wrapperFeatureListItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopify Deep Dive */}
      <section className={styles.wrapperShopifySection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <span className={styles.wrapperSectionSubtitle}>Shopify Development</span>
            <h2 className={styles.wrapperSectionTitle}>E-commerce <span className={styles.wrapperHighlight}>Excellence</span></h2>
          </div>

          <div className={styles.wrapperFeaturesGrid}>
            {shopifyFeatures.map((feature, index) => (
              <div key={index} className={styles.wrapperFeatureCategory}>
                <h3 className={styles.wrapperFeatureCategoryTitle}>{feature.category}</h3>
                <ul className={styles.wrapperFeatureList}>
                  {feature.items.map((item, idx) => (
                    <li key={idx} className={styles.wrapperFeatureListItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Development Deep Dive */}
      <section className={styles.wrapperCustomSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <span className={styles.wrapperSectionSubtitle}>Custom Development</span>
            <h2 className={styles.wrapperSectionTitle}>Bespoke <span className={styles.wrapperHighlight}>Solutions</span></h2>
          </div>

          <div className={styles.wrapperFeaturesGrid}>
            {customFeatures.map((feature, index) => (
              <div key={index} className={styles.wrapperFeatureCategory}>
                <h3 className={styles.wrapperFeatureCategoryTitle}>{feature.category}</h3>
                <ul className={styles.wrapperFeatureList}>
                  {feature.items.map((item, idx) => (
                    <li key={idx} className={styles.wrapperFeatureListItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.wrapperProcessSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Our <span className={styles.wrapperHighlight}>Process</span></h2>
            <p className={styles.wrapperSectionDescription}>A proven approach to delivering exceptional websites</p>
          </div>

          <div className={styles.wrapperProcessGrid}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.wrapperProcessCard}>
                <span className={styles.wrapperProcessNumber}>{step.step}</span>
                <h3 className={styles.wrapperProcessTitle}>{step.title}</h3>
                <p className={styles.wrapperProcessDescription}>{step.description}</p>
                <div className={styles.wrapperProcessDeliverables}>
                  {step.deliverables.map((item, idx) => (
                    <span key={idx} className={styles.wrapperProcessTag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.wrapperWhySection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Why <span className={styles.wrapperHighlight}>Choose Us</span></h2>
          </div>

          <div className={styles.wrapperWhyGrid}>
            {whyChooseUs.map((item, index) => (
              <div key={index} className={styles.wrapperWhyCard}>
                <span className={styles.wrapperWhyIcon}>{item.icon}</span>
                <h3 className={styles.wrapperWhyTitle}>{item.title}</h3>
                <p className={styles.wrapperWhyDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={styles.wrapperTechSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Our <span className={styles.wrapperHighlight}>Tech Stack</span></h2>
            <p className={styles.wrapperSectionDescription}>Modern technologies we use to build your website</p>
          </div>

          <div className={styles.wrapperTechGrid}>
            {techStack.map((stack, index) => (
              <div key={index} className={styles.wrapperTechCard}>
                <h3 className={styles.wrapperTechCategory}>{stack.category}</h3>
                <div className={styles.wrapperTechList}>
                  {stack.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.wrapperTechItem}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {/* <section className={styles.wrapperPortfolioSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Recent <span className={styles.wrapperHighlight}>Work</span></h2>
          </div>

          <div className={styles.wrapperPortfolioGrid}>
            {portfolio.map((item, index) => (
              <div key={index} className={styles.wrapperPortfolioCard}>
                <div className={styles.wrapperPortfolioImage}>{item.image}</div>
                <div className={styles.wrapperPortfolioContent}>
                  <h3 className={styles.wrapperPortfolioName}>{item.name}</h3>
                  <span className={styles.wrapperPortfolioPlatform}>{item.platform}</span>
                  <p className={styles.wrapperPortfolioDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className={styles.wrapperFaqSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Frequently Asked <span className={styles.wrapperHighlight}>Questions</span></h2>
          </div>

          <div className={styles.wrapperFaqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.wrapperFaqItem}>
                <h3 className={styles.wrapperFaqQuestion}>{faq.question}</h3>
                <p className={styles.wrapperFaqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default WebDevelopmentPage;