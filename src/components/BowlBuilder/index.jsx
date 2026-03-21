import styles from './BowlBuilder.module.css';
import { Icon } from '../Icon';
import { MenuSection } from '../MenuSection';
import { MENU_SECTIONS } from '../../data/menuSections';
import BowlIcon from '../../icons/bowl.svg?react';

export function BowlBuilder() {
  return (
    <section className={styles.builder} aria-label="Menu options for building a bowl">
      <h1 className={styles.heading}>
        <Icon as={BowlIcon} size={32} />
        Build a Bowl
      </h1>
      <div className={styles.menuList}>
        {MENU_SECTIONS.map(section => (
          <MenuSection key={section.title} section={section} />
        ))}
      </div>
    </section>
  );
}