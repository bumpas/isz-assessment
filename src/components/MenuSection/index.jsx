import styles from './MenuSection.module.css';
import { Accordion } from '../Accordion';

export function MenuSection({ section }) {
  return (
    <Accordion name="menu" title={section.title}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{section.legend}</legend>
        {section.options.map(option => (
          <label key={option.value} className={styles.optionLabel}>
            <input type={section.type} name={section.name} value={option.value} />
            <span>{option.label}</span>
            {option.upcharge && (
              <span aria-label={option.upcharge.announcement} className={styles.upcharge}>
                {option.upcharge.label}
              </span>
            )}
          </label>
        ))}
      </fieldset>
    </Accordion>
  );
}