import { profile } from '@/data';
import { Icon, Section, type IconName } from '@/components/ui';
import styles from './Contact.module.css';

interface ContactLink {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  download?: boolean;
}

const links: ContactLink[] = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'in/mohamed-hajbi',
    href: profile.linkedin,
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  { icon: 'download', label: 'Résumé', value: 'Download my CV', href: profile.cvPath, download: true },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Let's build something together"
      intro="Open to software engineering roles — backend or full-stack, on-site, hybrid or remote. Feel free to reach out."
    >
      <ul className={styles.grid}>
        {links.map((link) => {
          const external = link.href.startsWith('http');
          return (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.card}
                download={link.download || undefined}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className={styles.icon}>
                  <Icon name={link.icon} size={20} />
                </span>
                <span className={styles.text}>
                  <small>{link.label}</small>
                  <strong>{link.value}</strong>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
