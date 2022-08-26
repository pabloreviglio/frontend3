import { Card } from '../Card/Card'
import style from './ListCard.module.css'
export const ListCards = ({ list }) => {
  return (
    <div className={style.list}>
      {list.map(item => (
        <Card key={item.id} {...item} types={item.type} />
      ))}
    </div>
  )
}
