import { profile } from '@/data';
import { useLanguage } from '@/i18n';
import { Icon, Section, type IconName } from '@/components/ui';
import styles from './Contact.module.css';

interface ContactLink {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  download?: boolean;
}

export function Contact() {
  const { t } = useLanguage();

  const links: ContactLink[] = [
    { icon: 'mail', label: t.contact.email, value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: 'linkedin',
      label: t.contact.linkedin,
      value: profile.linkedinHandle,
      href: profile.linkedin,
    },
    {
      icon: 'phone',
      label: t.contact.phone,
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    {
      icon: 'download',
      label: t.contact.resume,
      value: t.contact.download,
      href: profile.cvPath,
      download: true,
    },
  ];

  return (
    <Section
      id="contact"
      index="06"
      eyebrow={t.contact.eyebrow}
      title={t.contact.title}
      intro={t.contact.intro}
    >
      <ul className={styles.grid}>
        {links.map((link) => {
          const external = link.href.startsWith('http');
          return (
            <li key={link.icon}>
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
