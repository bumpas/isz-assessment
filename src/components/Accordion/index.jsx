import styles from './Accordion.module.css';

export function Accordion({ title, name, children, defaultOpen = false }) {
  return (
    <details {...(name && { name })} className={styles.accordion} open={defaultOpen}>
      <summary className={styles.summary}>{title}</summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
