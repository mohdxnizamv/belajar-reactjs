function Article() {
  const name = "mohdxnizamv";
  const family = ["Mohd Nizamuddin", "NurHidayat", "Muhammad Nur Naim"];

  return (
    <>
      <div>{name}</div>
      <div>
        {family.map((keluarga) => {
          return (
            <>
              <div>{keluarga}</div>
              <div>{keluarga}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Article;
