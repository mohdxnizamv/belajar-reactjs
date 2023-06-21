function Article(props) {
  return (
    <>
      <div>{props.name}</div>
      <div>
        {props.family.map((title) => {
          return <div>{title}</div>;
        })}
      </div>
    </>
  );
}

export default Article;
