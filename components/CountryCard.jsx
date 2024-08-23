import { Link } from "react-router-dom"

const CountryCard = ({name, flag, population, region, capital, data}) => {
  return (
    <Link state={data} className="country-card" to={`/${name}`}>
        <div className='imageDiv'>
            <img src={flag} alt={name + ' flag'}/>
        </div>
          
          <div className="card-text">
              <h3 className="card-title">{name}</h3>
              <p><b>Population: </b>{population}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital}</p>
          </div>
  </Link>
  )
}

export default CountryCard