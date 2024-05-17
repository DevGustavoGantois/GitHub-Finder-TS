import { UserProps } from "../types/user"

import {MdLocationPin} from "react-icons/md"
import { FaCalendarAlt } from 'react-icons/fa';

import classes from "./User.module.css"



const User = ({avatar_url, login, created_at, bio, location, followers, following}: UserProps) => {
  return (
    <div className={classes.user}>
       <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <p className={classes.location}>
        <MdLocationPin /> <span>{location}</span>
      </p>
      <p className={classes.user}>
        <FaCalendarAlt/>
        <p>{created_at}</p>
      </p>
      <p className={classes.user}>
        <h3>Descrição:</h3>
        <p>{bio}</p>
      </p>
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
    </div>
    </div>
  </div>
  )
}

export default User
