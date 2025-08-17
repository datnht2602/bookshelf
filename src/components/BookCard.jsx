function BookCard({ book, onSeeMore }) {
  const {
    title = 'No title available',
    authors = ['Unknown Author'],
    imageLinks ={}
  } = book.volumeInfo;

  const thumbnail = imageLinks.thumbnail || 'hhttps://placehold.co/600x400';
  return (
    <div className="col-md-4 mb-3">
        <div className="card">
            <img className="card-img-top" src={thumbnail} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{authors.join(', ')}</p>
                <button className="btn btn-primary" onClick={() => onSeeMore(book)}> See more</button>
            </div>
        </div>
    </div>
  )
}

export default BookCard;