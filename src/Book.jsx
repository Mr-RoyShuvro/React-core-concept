import './Book.css'
export default function Book({book}){
    const {name, price} = book;
    return(
        <div className='book'>
            <h2>Book Name: {name}</h2>
            <p>Price: {price}</p>
        </div>
    )
}