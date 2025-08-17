function BookDetail({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{book.volumeInfo.title}</h5>
          </div>
          <div className="modal-body">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              className="img-fluid mb-3"
            />
            <p>
              <strong>Authors:</strong> {book.volumeInfo.authors?.join(", ")}
            </p>
            <p>
              <strong>Published Date:</strong> {book.volumeInfo.publishedDate}
            </p>
            <p>
              <strong>Descriptions:</strong> {book.volumeInfo.description}
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
