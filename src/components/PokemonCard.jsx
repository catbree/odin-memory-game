export default function PokemonCard({ index, name, imageUrl }) {
    return (
        <div key={index} className='pokemon-card'>
            <img src={imageUrl} alt={name}></img>
            <h2>{name}</h2>
        </div>
    )
}