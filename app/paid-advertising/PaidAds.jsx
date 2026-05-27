"use client";
import React, { useEffect, useRef } from 'react';
import styles from './PaidAds.module.scss';
import Link from "next/link";
const BingAdsPage = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef([]);

  // Page Overview
  const overview = {
    title: 'Bing Ads Advertising',
    subtitle: 'Reach Undiscovered Audiences at Lower Costs',
    description: 'Tap into the Microsoft Advertising network—reaching millions of users on Bing, Yahoo, and AOL. Lower competition means better ROI for your business.',
    stats: [
      { value: '36%', label: 'Lower CPC than Google' },
      { value: '100M+', label: 'Unique Searchers' },
      { value: '33%', label: 'Desktop Market Share' },
      { value: '45+', label: 'Countries Reached' }
    ]
  };

  // Why Bing Ads
  const whyBing = [
    {
      id: 1,
      title: 'Lower Competition',
      description: 'Fewer advertisers means lower costs and better ad positions.',
      icon: '🏆',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Older, Affluent Audience',
      description: 'Bing users are typically older with higher household income.',
      icon: '💼',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Better ROI',
      description: 'Lower CPC combined with quality traffic = higher returns.',
      icon: '📈',
      color: 'orange'
    },
    {
      id: 4,
      title: 'Microsoft Integration',
      description: 'Native integration with Windows, Edge, and Microsoft products.',
      icon: '🪟',
      color: 'teal'
    }
  ];

  // Bing Network
  const networkPartners = [
    {
      name: 'Bing',
      icon: '🔍',
      audience: 'Core search engine users',
      share: 'Search'
    },
    {
      name: 'Yahoo',
      icon: '📧',
      audience: 'Yahoo mail & portal users',
      share: 'Part of network'
    },
    {
      name: 'AOL',
      icon: '🔄',
      audience: 'AOL users & partners',
      share: 'Part of network'
    },
    {
      name: 'Microsoft Sites',
      icon: '💻',
      audience: 'MSN, Outlook, Edge users',
      share: 'Native inventory'
    },
    {
      name: 'Syndicated Search Partners',
      icon: '🤝',
      audience: 'Partner search engines',
      share: 'Extended reach'
    }
  ];

  // Ad Types
  const adTypes = [
    {
      type: 'Search Ads',
      description: 'Text ads on search results pages',
      icon: '📝',
      features: ['Headlines', 'Descriptions', 'Display URL', 'Ad Extensions']
    },
    {
      type: 'Shopping Ads',
      description: 'Product listings with images and prices',
      icon: '🛒',
      features: ['Product Images', 'Prices', 'Merchant Name', 'Promotions']
    },
    {
      type: 'Audience Ads',
      description: 'Native ads on Microsoft Audience Network',
      icon: '👥',
      features: ['Native Format', 'Image Ads', 'Video Ads', 'Responsive Ads']
    },
    {
      type: 'Dynamic Search Ads',
      description: 'Automatically generated ads from your website',
      icon: '⚡',
      features: ['AI-Generated', 'Website Based', 'Auto-Targeting', 'Wide Coverage']
    },
    {
      type: 'Microsoft Audience Network',
      description: 'Reach users across MSN, Outlook, Edge',
      icon: '🌐',
      features: ['Native', 'Video', 'Image', 'Carousel']
    }
  ];

  // Targeting Options
  const targetingOptions = [
    'Keywords & Match Types',
    'Location & Radius',
    'Device Targeting',
    'Day & Time Scheduling',
    'Demographics (Age, Gender)',
    'LinkedIn Profile Targeting',
    'Remarketing Lists',
    'In-Market Audiences',
    'Custom Audiences'
  ];

  // Ad Extensions
  const adExtensions = [
    {
      name: 'Sitelink Extensions',
      description: 'Additional links to specific pages',
      icon: '🔗'
    },
    {
      name: 'Call Extensions',
      description: 'Phone number for direct calls',
      icon: '📞'
    },
    {
      name: 'Location Extensions',
      description: 'Store address and map',
      icon: '📍'
    },
    {
      name: 'Callout Extensions',
      description: 'Extra text highlights',
      icon: '💬'
    },
    {
      name: 'Image Extensions',
      description: 'Visuals in search ads',
      icon: '🖼️'
    },
    {
      name: 'Review Extensions',
      description: 'Third-party reviews',
      icon: '⭐'
    },
    {
      name: 'Action Extensions',
      description: 'Buttons like "Book Now"',
      icon: '🎯'
    }
  ];

  // Match Types
  const matchTypes = [
    {
      type: 'Broad Match',
      description: 'Related searches, including misspellings and synonyms',
      example: 'digital marketing → online advertising services'
    },
    {
      type: 'Phrase Match',
      description: 'Searches that include the exact phrase',
      example: '"digital marketing agency" → best digital marketing agency'
    },
    {
      type: 'Exact Match',
      description: 'Searches that match the exact term closely',
      example: '[digital marketing agency] → digital marketing agency'
    },
    {
      type: 'Negative Keywords',
      description: 'Prevent ads from showing for unwanted terms',
      example: '-free, -jobs (to avoid irrelevant clicks)'
    }
  ];

  // Benefits
  const benefits = [
    'Lower CPC than Google (up to 36% less)',
    'Less competition = better ad positions',
    'Older, more affluent audience (45-65 age group)',
    'Higher conversion rates for certain industries',
    'Import Google campaigns easily',
    'Better support from Microsoft',
    'No click fraud from bot traffic'
  ];

  // Industries That Perform Well
  const industries = [
    'Legal Services',
    'Financial Services',
    'Healthcare',
    'Home Services',
    'B2B Software',
    'Education',
    'Automotive',
    'Real Estate'
  ];

  // Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Import & Audit',
      description: 'Import existing Google campaigns or build from scratch'
    },
    {
      step: '02',
      title: 'Optimize for Bing',
      description: 'Adjust keywords, bids, and targeting for Bing audience'
    },
    {
      step: '03',
      title: 'Launch & Monitor',
      description: 'Go live with daily performance tracking'
    },
    {
      step: '04',
      title: 'Scale & Refine',
      description: 'Expand winning campaigns and cut underperformers'
    }
  ];

  // FAQ
  const faqs = [
    {
      question: 'How is Bing different from Google Ads?',
      answer: 'Bing has less competition, lower CPC, and an older, more affluent audience. You can also import campaigns directly from Google.'
    },
    {
      question: 'What is the minimum budget for Bing Ads?',
      answer: 'We recommend starting with $500-1000/month to gather meaningful data and test performance.'
    },
    {
      question: 'Can I use my Google Ads campaigns on Bing?',
      answer: 'Yes! Bing Ads allows you to import your Google campaigns directly, making setup quick and easy.'
    },
    {
      question: 'Which industries perform best on Bing?',
      answer: 'Legal, financial, healthcare, and B2B services typically perform very well due to the older, higher-income audience.'
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    contentRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getColorClass = (color) => {
    switch (color) {
      case 'primary': return styles.primary;
      case 'purple': return styles.purple;
      case 'orange': return styles.orange;
      case 'teal': return styles.teal;
      default: return styles.primary;
    }
  };

  return (
    <div className={styles.wrapperBingPage} ref={sectionRef}>
      {/* Hero Section */}
      <section className={styles.wrapperHeroSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperHeroContent}>
            <div className={styles.wrapperHeroText}>
              <span className={styles.wrapperHeroBadge}>Microsoft Advertising</span>
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

              <div className={styles.wrapperHeroButtons}>
                <Link href="/contact-us">
                <button className={styles.wrapperPrimaryButton}>
                  Get Started with Bing
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                </Link>
              </div>
            </div>
            <div className={styles.wrapperHeroImage}>
              <div className={styles.wrapperImageCircle}>
                <span className={styles.wrapperImageEmoji}>
                  <img src="./bing.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bing Section */}
      <section className={styles.wrapperWhySection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Why <span className={styles.wrapperHighlight}>Bing Ads?</span></h2>
          </div>

          <div className={styles.wrapperWhyGrid}>
            {whyBing.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.wrapperWhyCard} ${getColorClass(item.color)}`}
                ref={(el) => (contentRef.current[index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperWhyIcon}>{item.icon}</div>
                <h3 className={styles.wrapperWhyTitle}>{item.title}</h3>
                <p className={styles.wrapperWhyDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bing Network */}
      <section className={styles.wrapperNetworkSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Bing <span className={styles.wrapperHighlight}>Network</span></h2>
            <p className={styles.wrapperSectionDescription}>Reach users across the Microsoft Advertising network</p>
          </div>

          <div className={styles.wrapperNetworkGrid}>
            {networkPartners.map((partner, index) => (
              <div key={index} className={styles.wrapperNetworkCard}>
                <div className={styles.wrapperNetworkIcon}>{partner.icon}</div>
                <h4 className={styles.wrapperNetworkName}>{partner.name}</h4>
                <p className={styles.wrapperNetworkAudience}>{partner.audience}</p>
                <span className={styles.wrapperNetworkShare}>{partner.share}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Types */}
      <section className={styles.wrapperAdTypesSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Ad <span className={styles.wrapperHighlight}>Types</span></h2>
          </div>

          <div className={styles.wrapperAdTypesGrid}>
            {adTypes.map((ad, index) => (
              <div key={index} className={styles.wrapperAdTypeCard}>
                <div className={styles.wrapperAdTypeHeader}>
                  <span className={styles.wrapperAdTypeIcon}>{ad.icon}</span>
                  <h4 className={styles.wrapperAdTypeTitle}>{ad.type}</h4>
                </div>
                <p className={styles.wrapperAdTypeDescription}>{ad.description}</p>
                <div className={styles.wrapperAdTypeFeatures}>
                  {ad.features.map((feature, idx) => (
                    <span key={idx} className={styles.wrapperAdTypeFeature}>{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Extensions */}
      <section className={styles.wrapperExtensionsSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Ad <span className={styles.wrapperHighlight}>Extensions</span></h2>
            <p className={styles.wrapperSectionDescription}>Make your ads larger and more informative</p>
          </div>

          <div className={styles.wrapperExtensionsGrid}>
            {adExtensions.map((ext, index) => (
              <div key={index} className={styles.wrapperExtensionCard}>
                <span className={styles.wrapperExtensionIcon}>{ext.icon}</span>
                <div className={styles.wrapperExtensionContent}>
                  <h4 className={styles.wrapperExtensionName}>{ext.name}</h4>
                  <p className={styles.wrapperExtensionDescription}>{ext.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Match Types */}
      <section className={styles.wrapperMatchTypesSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Keyword <span className={styles.wrapperHighlight}>Match Types</span></h2>
          </div>

          <div className={styles.wrapperMatchTypesGrid}>
            {matchTypes.map((match, index) => (
              <div key={index} className={styles.wrapperMatchTypeCard}>
                <h4 className={styles.wrapperMatchTypeTitle}>{match.type}</h4>
                <p className={styles.wrapperMatchTypeDescription}>{match.description}</p>
                <div className={styles.wrapperMatchTypeExample}>
                  <strong>Example:</strong> {match.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting Options */}
      <section className={styles.wrapperTargetingSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Targeting <span className={styles.wrapperHighlight}>Options</span></h2>
          </div>

          <div className={styles.wrapperTargetingList}>
            {targetingOptions.map((option, index) => (
              <span key={index} className={styles.wrapperTargetingItem}>{option}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className={styles.wrapperBenefitsListSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Key <span className={styles.wrapperHighlight}>Benefits</span></h2>
          </div>

          <div className={styles.wrapperBenefitsList}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.wrapperBenefitListItem}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Industries */}
      <section className={styles.wrapperIndustriesSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Top Performing <span className={styles.wrapperHighlight}>Industries</span></h2>
          </div>

          <div className={styles.wrapperIndustriesGrid}>
            {industries.map((industry, index) => (
              <div key={index} className={styles.wrapperIndustryItem}>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Process */}
      <section className={styles.wrapperProcessSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Simple <span className={styles.wrapperHighlight}>Process</span></h2>
          </div>

          <div className={styles.wrapperProcessSteps}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.wrapperProcessStep}>
                <span className={styles.wrapperStepNumber}>{step.step}</span>
                <h4 className={styles.wrapperStepTitle}>{step.title}</h4>
                <p className={styles.wrapperStepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.wrapperFaqSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Quick <span className={styles.wrapperHighlight}>Questions</span></h2>
          </div>

          <div className={styles.wrapperFaqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.wrapperFaqItem}>
                <h4 className={styles.wrapperFaqQuestion}>{faq.question}</h4>
                <p className={styles.wrapperFaqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default BingAdsPage;