import styles from './Accordion.module.css';

export function Accordion({ title, children, defaultOpen = false }) {
  return (
    <details className={styles.accordion} open={defaultOpen}>
      <summary className={styles.summary}>{title}</summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
