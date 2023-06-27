export default function Cards(props) {
  return (
    <article className="cards">
      <div className="icon">
        <p>{`${props.icon}`}</p>
      </div>
      <p>{`${props.title}`}</p>
      <p>{`${props.text}`}</p>
    </article>
  );
}
