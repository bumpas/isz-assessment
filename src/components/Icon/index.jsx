import styles from './Icon.module.css'

export function Icon({ as: SvgComponent, size = 24, label, className = '' }) {
  return (
    <span
      className={`${styles.icon} ${className}`}
      style={{ '--icon-size': `${size}px` }}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
    >
      <SvgComponent aria-hidden="true" />
    </span>
  )
}
