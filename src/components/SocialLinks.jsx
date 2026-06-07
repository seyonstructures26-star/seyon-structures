import { SOCIAL_LINKS } from "../data/contact";

function FacebookIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 0 1 1.77 1.153 4.92 4.92 0 0 1 1.153 1.77c.163.457.349 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.153 1.77 4.92 4.92 0 0 1-1.77 1.153c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.77-1.153 4.92 4.92 0 0 1-1.153-1.77c-.163-.457-.349-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.153-1.77 4.92 4.92 0 0 1 1.77-1.153c.457-.163 1.257-.349 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.622c-3.15 0-3.516.012-4.747.069-1.026.047-1.584.218-1.954.363a3.28 3.28 0 0 0-1.184.77 3.28 3.28 0 0 0-.77 1.184c-.145.37-.316.928-.363 1.954-.057 1.231-.069 1.597-.069 4.747s.012 3.516.069 4.747c.047 1.026.218 1.584.363 1.954.17.434.398.79.77 1.184.394.372.75.6 1.184.77.37.145.928.316 1.954.363 1.231.057 1.597.069 4.747.069s3.516-.012 4.747-.069c1.026-.047 1.584-.218 1.954-.363a3.28 3.28 0 0 0 1.184-.77 3.28 3.28 0 0 0 .77-1.184c.145-.37.316-.928.363-1.954.057-1.231.069-1.597.069-4.747s-.012-3.516-.069-4.747c-.047-1.026-.218-1.584-.363-1.954a3.28 3.28 0 0 0-.77-1.184 3.28 3.28 0 0 0-1.184-.77c-.37-.145-.928-.316-1.954-.363-1.231-.057-1.597-.069-4.747-.069zM12 7.378a4.622 4.622 0 1 1 0 9.244 4.622 4.622 0 0 1 0-9.244zm0 1.622a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.884-3.19a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0z" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

export default function SocialLinks({ variant = "default" }) {
  const styles = {
    default:
      "w-11 h-11 bg-brand/10 border border-white/10 rounded-sm flex items-center justify-center text-slate-300 hover:bg-brand hover:text-white hover:border-brand transition-colors duration-200",
    footer:
      "w-10 h-10 bg-steel border border-white/10 rounded-sm flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white hover:border-brand transition-colors duration-200",
  };

  const iconSize = variant === "footer" ? 18 : 20;

  return (
    <div className="flex flex-wrap gap-3">
      {SOCIAL_LINKS.map(({ label, href, icon }) => {
        const Icon = icons[icon];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${label}`}
            className={styles[variant]}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
