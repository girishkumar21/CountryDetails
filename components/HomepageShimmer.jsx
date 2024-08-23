import './HomepageShimmer.css'

const HomepageShimmer = () => {
    const mapped = Array.from({length:10}).map((val, i)=>{
        return(
            <div key={i} className="country-card home-shimmer"></div>
        )
    })
  return (
    <div className="countries-container">
        {mapped}
    </div>
  )
}

export default HomepageShimmer
