import Link from 'next/link'

import { CMSLink } from '@/components/Link'
import { getCachedGlobal } from '@/utilities/getGlobals'

import styles from './footer.module.css'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={`${styles.column} ${styles.badgeColumn}`}>
            <Link className={styles.badgeLink} href="/" aria-label="TestoCore home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.badge}
                src="/footer/verification-badge.png"
                alt="LegitScript Certified"
                width={292}
                height={316}
              />
            </Link>
          </div>

          <div className={styles.column}>
            <ul className={styles.detailsList}>
              <li className={styles.detail}>
                <span className={styles.label}>Address</span>
                <span className={styles.value}>
                  4733 W Atlantic Ave Suite C8,
                  <br />
                  Delray Beach, FL 33445
                </span>
              </li>
              <li className={styles.detail}>
                <span className={styles.label}>Mon - Fri</span>
                <span className={styles.value}>8.30 am - 6.00 pm</span>
              </li>
              <li className={styles.detail}>
                <span className={styles.label}>Sat</span>
                <span className={styles.value}>10 am - 6 pm</span>
              </li>
              <li className={styles.detail}>
                <span className={styles.label}>Sun</span>
                <span className={styles.value}>Closed</span>
              </li>
            </ul>
          </div>

          <div className={`${styles.column} ${styles.contactColumn}`}>
            <ul className={styles.detailsList}>
              <li className={styles.detail}>
                <span className={styles.label}>Phone</span>
                <a className={styles.value} href="tel:+15617748944">
                  561-774-8944
                </a>
              </li>
              <li className={styles.detail}>
                <span className={styles.label}>Email</span>
                <a className={styles.value} href="mailto:info@testocorehrt.com">
                  info@testocorehrt.com
                </a>
              </li>
              <li className={styles.detail}>
                <span className={styles.label}>Website</span>
                <a className={styles.value} href="https://testocorehrt.com">
                  testocorehrt.com
                </a>
              </li>
            </ul>

            <div className={styles.socials} role="group" aria-label="Social media">
              <span className={styles.socialIcon} role="img" aria-label="Instagram">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/footer/social-base.svg" alt="" width={50} height={50} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.instagramGlyph}
                  src="/footer/social-instagram.svg"
                  alt=""
                />
              </span>
              <span className={styles.socialIcon} role="img" aria-label="Facebook">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/footer/social-base.svg" alt="" width={50} height={50} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.facebookGlyph}
                  src="/footer/social-facebook.svg"
                  alt=""
                />
              </span>
              <span className={styles.socialIcon} role="img" aria-label="TikTok">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/footer/social-tiktok.svg" alt="" width={50} height={50} />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © 2026 TestoCore HRT Solutions LLC. All rights reserved. Designed by{' '}
            <span className={styles.credit}>Boston SEO</span>
          </p>
          <nav className={styles.legalLinks} aria-label="Footer navigation">
            {navItems.length > 0 ? (
              navItems.map(({ link }, index) => (
                <CMSLink className={styles.legalLink} key={index} {...link} />
              ))
            ) : (
              <>
                <span className={styles.legalText}>Privacy policy</span>
                <span className={styles.separator} aria-hidden="true">
                  ‖
                </span>
                <span className={styles.legalText}>Terms of service</span>
              </>
            )}
          </nav>
        </div>
      </div>
    </footer>
  )
}
