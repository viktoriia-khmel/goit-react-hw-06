import { HiPhone } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import s from './Contact.module.css'

const Contact = ({ data: {id, name, number}, onDelete }) => {
  return (
      <div className={s.wrapper}>
          <div className={s.datacontainer}>
              <p><HiUser /> {name}</p>
              <p><HiPhone /> {number}</p>
          </div>
          
          <button className={s.btn} type="submit" onClick={()=>onDelete(id)}>Delete</button>
    </div>
  )
}

export default Contact
