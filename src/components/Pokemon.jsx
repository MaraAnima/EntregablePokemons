function Pokemon({ name, type, image }) {
    return (
      <div className="card" style={{ maxWidth: "200px" }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Type: {type}</p>
        </div>
      </div>
    );
  }
  
  export default Pokemon;