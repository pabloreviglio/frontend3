import styles from './Card.module.css'

export const Card = ({ name, types, id, base }) => {
  return (
    <div className={styles.card} tabIndex={id}>
      <h2>{name}</h2>
      <div className={styles.info}>
        <ul className={styles.types}>
          {types.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
        <ul className={styles.baseList}>
          <li>HP: {base.HP}</li>
          <li>Attack: {base.Attack}</li>
          <li>Defense: {base.Defense}</li>
          <li>Sp. Attack: {base['Sp. Attack']}</li>
          <li>Sp. Defense: {base['Sp. Defense']}</li>
          <li>Speed: {base.Speed}</li>
        </ul>
      </div>
    </div>
  )
}
