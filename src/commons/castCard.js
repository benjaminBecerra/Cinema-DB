
const CastCard = ({ data, handleIdSearch }) => {




  return (
    <div class="card mx-4">
      <div class="card-image">
        <figure class="image is-128x64">
          <img src={data.profile_path?`https://image.tmdb.org/t/p/w500${data.profile_path}`: "https://style.anu.edu.au/_anu/4/images/placeholders/person_6x8.png" } alt="" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left content">
            <h5>{data.name}</h5>
          </div>
        </div>
        <div class="content">
          {data.job === 'Director' ? "Director" : `(${data.character})`}
        </div>
      </div>
    </div>

  )
}

export default CastCard
