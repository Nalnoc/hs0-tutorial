export default function Output({ photo, name, title, fact }) {
    return (
      <div>
        <img src={photo ?? ""} alt="profile photo" />
        <h1>{name}</h1>
        <p>{title}</p>
        <p>Fun Fact:{fact}</p>
      </div>
    );
  }
  