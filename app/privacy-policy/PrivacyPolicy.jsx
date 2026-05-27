"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import style from "./Policy.module.scss";

const PrivacyPolicy = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.classList.add(style.visible);
    }
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "April 1, 2026";

  return (
    <div className={style.privacyPage} ref={pageRef}>
      <div className={style.heroSection}>
        <div className={style.container}>
          <div className={style.heroContent}>
            <div className={style.badge}>Privacy</div>
            <h1 className={style.title}>Privacy Policy</h1>
            <p className={style.lastUpdated}>Last Updated: {lastUpdated}</p>
            <p className={style.description}>
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </div>

      <div className={style.contentSection}>
        <div className={style.container}>
          <div className={style.contentWrapper}>
            {/* Table of Contents */}
            <div className={style.toc}>
              <h3>Table of Contents</h3>
              <ul>
                <li><a href="#introduction">1. Introduction</a></li>
                <li><a href="#information-collect">2. Information We Collect</a></li>
                <li><a href="#how-use">3. How We Use Your Information</a></li>
                <li><a href="#sharing">4. Information Sharing</a></li>
                <li><a href="#data-security">5. Data Security</a></li>
                <li><a href="#ad-accounts">6. Ad Account & Platform Data</a></li>
                <li><a href="#cookies">7. Cookies & Tracking Technologies</a></li>
                <li><a href="#your-rights">8. Your Rights & Choices</a></li>
                <li><a href="#data-retention">9. Data Retention</a></li>
                <li><a href="#children">10. Children's Privacy</a></li>
                <li><a href="#international">11. International Data Transfers</a></li>
                <li><a href="#policy-changes">12. Policy Changes</a></li>
                <li><a href="#contact">13. Contact Us</a></li>
              </ul>
            </div>

            {/* Privacy Policy Content */}
            <div className={style.privacyContent}>
              <section id="introduction" className={style.section}>
                <h2>1. Introduction</h2>
                <p>
                  Welcome to ClickGrows ("we," "our," "us"). We are committed to protecting your privacy 
                  and handling your personal information with transparency and care. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our 
                  services, visit our website, or interact with us.
                </p>
                <p>
                  By using our services, you consent to the practices described in this Privacy Policy. 
                  If you do not agree with this policy, please do not use our services.
                </p>
              </section>

              <section id="information-collect" className={style.section}>
                <h2>2. Information We Collect</h2>
                <h3>2.1 Personal Information You Provide</h3>
                <p>We collect information you voluntarily provide to us, including:</p>
                <ul>
                  <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                  <li><strong>Account Credentials:</strong> Login information for ad platforms (Google Ads, Meta Ads, etc.) when you grant us partner access</li>
                  <li><strong>Billing Information:</strong> Payment details for our services (processed securely via third-party payment processors)</li>
                  <li><strong>Communication:</strong> Information from emails, calls, or messages you send us</li>
                  <li><strong>Business Information:</strong> Business details, goals, and marketing strategies you share</li>
                </ul>

                <h3>2.2 Information Automatically Collected</h3>
                <p>When you visit our website, we automatically collect:</p>
                <ul>
                  <li><strong>Usage Data:</strong> Pages visited, time spent, links clicked, and navigation patterns</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Location Data:</strong> Approximate geographic location based on IP address</li>
                </ul>

                <h3>2.3 Information from Third Parties</h3>
                <p>We may receive information about you from:</p>
                <ul>
                  <li>Ad platforms (Google, Meta, etc.) when you grant us partner access</li>
                  <li>Analytics providers like Google Analytics</li>
                  <li>Social media platforms when you interact with our content</li>
                </ul>
              </section>

              <section id="how-use" className={style.section}>
                <h2>3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                  <li><strong>Provide Services:</strong> Manage and optimize your advertising campaigns, create content, and deliver marketing services</li>
                  <li><strong>Communication:</strong> Respond to inquiries, provide updates, and send important service notifications</li>
                  <li><strong>Campaign Management:</strong> Access ad accounts to implement and optimize campaigns (with your explicit permission)</li>
                  <li><strong>Analytics:</strong> Analyze campaign performance and provide reporting</li>
                  <li><strong>Improve Services:</strong> Enhance our offerings based on client feedback and usage patterns</li>
                  <li><strong>Legal Compliance:</strong> Comply with applicable laws, regulations, and legal requests</li>
                  <li><strong>Billing:</strong> Process payments and manage invoices</li>
                </ul>
                <p>
                  We do not sell your personal information to third parties or use it for purposes 
                  incompatible with those disclosed in this policy.
                </p>
              </section>

              <section id="sharing" className={style.section}>
                <h2>4. Information Sharing</h2>
                <p>We may share your information in the following circumstances:</p>
                <ul>
                  <li><strong>With Your Consent:</strong> When you give us explicit permission to share your information</li>
                  <li><strong>Service Providers:</strong> With third-party vendors who help us operate our business (payment processors, analytics providers, email services)</li>
                  <li><strong>Ad Platforms:</strong> To access and manage your ad accounts as authorized by you</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
                <p>
                  All service providers are contractually obligated to maintain the confidentiality of your information 
                  and use it only for the purposes specified.
                </p>
              </section>

              <section id="data-security" className={style.section}>
                <h2>5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul>
                  <li>Encryption of data in transit using SSL/TLS protocols</li>
                  <li>Secure access controls and authentication methods</li>
                  <li>Regular security assessments and vulnerability scanning</li>
                  <li>Limited employee access to client data on a need-to-know basis</li>
                  <li>Use of secure, industry-standard platforms for data storage and processing</li>
                </ul>
                <p>
                  While we strive to protect your information, no method of transmission over the internet or 
                  electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </section>

              <section id="ad-accounts" className={style.section}>
                <h2>6. Ad Account & Platform Data</h2>
                <p>
                  <strong>Your Ownership:</strong> As stated in our Terms & Conditions, all ad accounts and data 
                  remain owned by you. We only receive partner or manager access to your accounts with your explicit consent.
                </p>
                <p>
                  <strong>Access Scope:</strong> Our access is limited to what is necessary to manage and optimize your campaigns. 
                  We do not have access to your billing information on ad platforms.
                </p>
                <p>
                  <strong>Revoking Access:</strong> You can revoke our access at any time through the ad platform's 
                  user management settings. Upon termination of services, we will immediately revoke all access.
                </p>
                <p>
                  <strong>Platform Terms:</strong> Your use of ad platforms is also governed by their respective 
                  privacy policies and terms of service (Google, Meta, etc.).
                </p>
              </section>

              <section id="cookies" className={style.section}>
                <h2>7. Cookies & Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website:
                </p>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (Google Analytics)</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p>
                  You can control cookies through your browser settings. However, disabling certain cookies may 
                  affect website functionality.
                </p>
              </section>

              <section id="your-rights" className={style.section}>
                <h2>8. Your Rights & Choices</h2>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of your personal information we hold</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Data Portability:</strong> Receive your data in a structured, commonly used format</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information in Section 13. 
                  We will respond within 30 days.
                </p>
              </section>

              <section id="data-retention" className={style.section}>
                <h2>9. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to:
                </p>
                <ul>
                  <li>Provide our services and fulfill our contractual obligations</li>
                  <li>Comply with legal and regulatory requirements (typically 3-7 years for financial records)</li>
                  <li>Resolve disputes and enforce our agreements</li>
                </ul>
                <p>
                  After the retention period, your information will be securely deleted or anonymized.
                </p>
              </section>

              <section id="children" className={style.section}>
                <h2>10. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under 18 years of age. We do not knowingly 
                  collect personal information from children. If we become aware that we have collected 
                  information from a child under 18, we will take steps to delete it promptly.
                </p>
              </section>

              <section id="international" className={style.section}>
                <h2>11. International Data Transfers</h2>
                <p>
                  We operate primarily in the United States. If you are accessing our services from outside 
                  the US, your information may be transferred to, stored, and processed in the US, where 
                  data protection laws may differ from those in your country.
                </p>
                <p>
                  By using our services, you consent to the transfer of your information to the US.
                </p>
              </section>

              <section id="policy-changes" className={style.section}>
                <h2>12. Policy Changes</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of material changes by:
                </p>
                <ul>
                  <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                  <li>Sending an email notification for significant changes</li>
                  <li>Providing notice through your account dashboard</li>
                </ul>
                <p>
                  Your continued use of our services after changes become effective constitutes acceptance 
                  of the revised policy.
                </p>
              </section>

              <section id="contact" className={style.section}>
                <h2>13. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or how we handle your information, please contact us:
                </p>
                <ul className={style.contactList}>
                  <li><strong>Email:</strong> clickgrows1@gmail.com</li>
                  <li><strong>Phone:</strong> +91 7065887777 </li>
                  <li><strong>Address:</strong> Plot B-24 U G/F Kh No105/7 Gali No 6 , Raja Puri Uttam Nagar Near Pathak Clinic New Delhi - 110059</li>
                </ul>
                <p>
                  For data privacy requests, please use "Privacy Request" in the subject line.
                </p>
              </section>

              <div className={style.acceptance}>
                <p>
                  By using our services, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;