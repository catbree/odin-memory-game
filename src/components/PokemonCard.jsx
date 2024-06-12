export default function PokemonCard({ index, name, imageUrl, onClick }) {
    
    return (
        <div key={index} className='pokemon-card' onClick={onClick}>
            <img src={imageUrl} alt={name}></img>
            <h2>{name}</h2>
        </div>
    )
}