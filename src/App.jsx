import './App.css'
import { gql, useQuery } from '@apollo/client'

const DOGS = gql`
  query Dogs {
    dogs {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`

function App() {
  // console.log(DOGS)
  console.log(useQuery(DOGS))

  const { data, loading, error} = useQuery(DOGS)

  if(loading) return "ロード中..."
  if(error) return `エラー！${error}`

  return (
    <>
      <h1>GraphQLとReact</h1>
      <div className='dogsContainer'>
        {data.dogs.map((dog) => (
          <div key={dog.id}>
            <div className='dogCard'>
              <img src={dog.thumbnail.url} alt="" />
              <p>{dog.name}</p>
              <p>{dog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
