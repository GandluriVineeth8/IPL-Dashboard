// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props

  const {name, id, teamImageURL} = teamDetails

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <div className="team-contairs">
          <div className="tem-container">
            <img src={teamImageURL} className="team-img" />
            <h1 className="team-name">{name}</h1>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
