function Article(props) {
  return (
    <>
      <div>{props.name}</div>
      <div>
        {props.family.map((keluarga) => {
          return <div>{keluarga}</div>;
        })}
      </div>
    </>
  );
}

export default Article;
