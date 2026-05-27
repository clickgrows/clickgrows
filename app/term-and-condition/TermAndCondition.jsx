"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import style from "./Term.module.scss";

const TermsAndConditions = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.classList.add(style.visible);
    }
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "April 1, 2026";

  return (
    <div className={style.termsPage} ref={pageRef}>
      <div className={style.heroSection}>
        <div className={style.container}>
          <div className={style.heroContent}>
            <div className={style.badge}>Legal</div>
            <h1 className={style.title}>Terms & Conditions</h1>
            <p className={style.lastUpdated}>Last Updated: {lastUpdated}</p>
            <p className={style.description}>
              Please read these terms carefully before engaging our services.
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
                <li><a href="#onboarding">1. Onboarding & Payment Terms</a></li>
                <li><a href="#creative-revisions">2. Creative Revisions</a></li>
                <li><a href="#commitment">3. Commitment Period</a></li>
                <li><a href="#refund-policy">4. Refund Policy</a></li>
                <li><a href="#ownership">5. Ownership & Access</a></li>
                <li><a href="#ad-budget">6. Ad Budget Management</a></li>
                <li><a href="#services">7. Scope of Services</a></li>
                <li><a href="#client-obligations">8. Client Obligations</a></li>
                <li><a href="#intellectual-property">9. Intellectual Property</a></li>
                <li><a href="#limitation-liability">10. Limitation of Liability</a></li>
                <li><a href="#termination">11. Termination</a></li>
                <li><a href="#governing-law">12. Governing Law</a></li>
                <li><a href="#contact">13. Contact Information</a></li>
              </ul>
            </div>

            {/* Terms Content */}
            <div className={style.termsContent}>
              <section id="onboarding" className={style.section}>
                <h2>1. Onboarding & Payment Terms</h2>
                <p>
                  By engaging our services, you agree to the following payment structure:
                </p>
                <ul>
                  <li><strong>50% advance payment</strong> is required at the time of onboarding to initiate work</li>
                  <li><strong>Remaining 50% payment</strong> is due before monthly deliverables go live</li>
                  <li>All payments are non-refundable once work has commenced (see Section 4)</li>
                  <li>Invoices are due upon receipt unless otherwise specified in your service agreement</li>
                </ul>
                <p>
                  Services will not commence until the initial 50% advance payment is received. 
                  Monthly deliverables will not be published or activated until the remaining 50% payment is cleared.
                </p>
              </section>

              <section id="creative-revisions" className={style.section}>
                <h2>2. Creative Revisions</h2>
                <p>
                  To ensure efficient delivery of services, the following revision policy applies:
                </p>
                <ul>
                  <li><strong>2 rounds of creative revisions</strong> are included per month</li>
                  <li>Additional revisions beyond the included rounds may incur extra charges</li>
                  <li>Revisions must be requested in writing within 5 business days of deliverable receipt</li>
                  <li>Feedback should be clear, concise, and actionable to ensure timely completion</li>
                </ul>
                <p>
                  Revisions requested after the specified period may be treated as new work and subject to additional fees.
                </p>
              </section>

              <section id="commitment" className={style.section}>
                <h2>3. Commitment Period</h2>
                <p>
                  For optimal results and stable campaign learning:
                </p>
                <ul>
                  <li><strong>Recommended minimum commitment: 3 months</strong></li>
                  <li>This period allows for proper campaign optimization, audience learning, and performance stabilization</li>
                  <li>Ad platforms typically require 4-6 weeks for algorithm learning and optimization</li>
                  <li>Results may vary, and we recommend the full commitment period to evaluate true campaign performance</li>
                </ul>
                <p>
                  While we don't require a fixed-term contract, we strongly recommend a 3-month commitment 
                  to achieve meaningful results. Early termination may affect campaign performance.
                </p>
              </section>

              <section id="refund-policy" className={style.section}>
                <h2>4. Refund Policy</h2>
                <p>
                  Please carefully review our refund policy:
                </p>
                <ul>
                  <li><strong>No refunds will be issued after work has started and campaigns are activated</strong></li>
                  <li>The 50% onboarding deposit is non-refundable once work commences</li>
                  <li>Monthly fees are non-refundable once services have been rendered for that period</li>
                  <li>Ad spend paid to third-party platforms is non-refundable as it is spent on your behalf</li>
                  <li>If you cancel before work begins, a full refund of the deposit may be issued</li>
                </ul>
                <p>
                  By proceeding with our services, you acknowledge and accept that no refunds will be provided 
                  once work has commenced and campaigns are activated.
                </p>
              </section>

              <section id="ownership" className={style.section}>
                <h2>5. Ownership & Access</h2>
                <p>
                  We believe in complete transparency and client ownership:
                </p>
                <ul>
                  <li><strong>All ad accounts and data remain owned by you (the client)</strong></li>
                  <li>We receive partner access to manage and optimize your campaigns</li>
                  <li>You maintain full control and can revoke access at any time</li>
                  <li>All campaign data, analytics, and insights are yours to keep</li>
                  <li>Upon termination, we will provide a smooth transition plan</li>
                </ul>
                <p>
                  We will never claim ownership of your accounts, data, or intellectual property. 
                  Our access is strictly for campaign management and optimization purposes.
                </p>
              </section>

              <section id="ad-budget" className={style.section}>
                <h2>6. Ad Budget Management</h2>
                <p>
                  Advertising budget terms and responsibilities:
                </p>
                <ul>
                  <li><strong>Ad budget is paid directly by you (the client)</strong> to the respective ad platforms</li>
                  <li>We do not handle ad spend payments; you maintain direct payment control</li>
                  <li>You are responsible for ensuring sufficient funds are available in your ad accounts</li>
                  <li>We provide budget recommendations based on campaign goals and competition analysis</li>
                  <li>Any ad spend disputes must be resolved directly with the ad platform</li>
                </ul>
                <p>
                  We will work within your specified budget to maximize results. 
                  Campaign performance may be affected by budget constraints.
                </p>
              </section>

              <section id="services" className={style.section}>
                <h2>7. Scope of Services</h2>
                <p>
                  Our services include but are not limited to:
                </p>
                <ul>
                  <li>Paid media management (Google Ads, Meta Ads, etc.)</li>
                  <li>Social media marketing and management</li>
                  <li>Search engine optimization (SEO)</li>
                  <li>Content creation and creative development</li>
                  <li>Analytics and performance reporting</li>
                  <li>Strategy development and consultation</li>
                </ul>
                <p>
                  Specific deliverables will be outlined in your service agreement. 
                  Any services outside the agreed scope will require a separate agreement.
                </p>
              </section>

              <section id="client-obligations" className={style.section}>
                <h2>8. Client Obligations</h2>
                <p>To ensure successful campaign execution, you agree to:</p>
                <ul>
                  <li>Provide timely feedback and approvals for creative assets</li>
                  <li>Ensure ad accounts have sufficient funds for campaign spend</li>
                  <li>Grant necessary access permissions to ad platforms and analytics tools</li>
                  <li>Communicate any business changes that may affect campaigns</li>
                  <li>Respond to requests within 2-3 business days to maintain campaign momentum</li>
                  <li>Provide required assets (logos, images, brand guidelines) before project commencement</li>
                </ul>
                <p>
                  Delays in client-side deliverables may impact campaign timelines and results.
                </p>
              </section>

              <section id="intellectual-property" className={style.section}>
                <h2>9. Intellectual Property</h2>
                <p>
                  <strong>Our Intellectual Property:</strong> All strategies, methodologies, proprietary processes, 
                  and software tools remain our exclusive property.
                </p>
                <p>
                  <strong>Client Intellectual Property:</strong> All brand assets, creative materials, and campaign 
                  data remain your property. We do not claim ownership of any client-provided materials.
                </p>
                <p>
                  <strong>Created Assets:</strong> Custom-created assets (ad creatives, content) become your property 
                  upon full payment. We retain the right to showcase anonymized work in our portfolio.
                </p>
              </section>

              <section id="limitation-liability" className={style.section}>
                <h2>10. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, we shall not be liable for:
                </p>
                <ul>
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Third-party platform changes or algorithm updates affecting campaign performance</li>
                  <li>Results that vary based on market conditions, competition, and other external factors</li>
                  <li>Ad platform account suspensions or policy violations not caused by our management</li>
                </ul>
                <p>
                  Our total liability shall not exceed the fees paid by you for the services during the preceding 3 months.
                </p>
              </section>

              <section id="termination" className={style.section}>
                <h2>11. Termination</h2>
                <p>
                  <strong>By Client:</strong> You may terminate services with written notice. No refunds will be issued 
                  for the current month's services. Upon termination, we will provide a transition plan and revoke access.
                </p>
                <p>
                  <strong>By Us:</strong> We reserve the right to terminate services if:
                </p>
                <ul>
                  <li>Payments are not received on time</li>
                  <li>Client fails to provide necessary access or feedback</li>
                  <li>Violation of these terms occurs</li>
                  <li>Campaigns violate ad platform policies</li>
                </ul>
              </section>

              <section id="governing-law" className={style.section}>
                <h2>12. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                  without regard to its conflict of law provisions. Any disputes arising under these Terms shall be 
                  resolved exclusively in the courts located in Delaware, USA.
                </p>
              </section>

              <section id="contact" className={style.section}>
                <h2>13. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className={style.contactList}>
                  <li><strong>Email:</strong> clickgrows1@gmail.com</li>
                  <li><strong>Phone:</strong>+91 7065887777</li>
                  <li><strong>Address:</strong>Plot B-24 U G/F Kh No105/7 Gali No 6 , Raja Puri Uttam Nagar Near Pathak Clinic New Delhi -110059</li>
                </ul>
              </section>

              <div className={style.acceptance}>
                <p>
                  By engaging our services and making the onboarding payment, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;