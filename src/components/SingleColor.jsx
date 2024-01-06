const SingleColor = ({color, index}) => {
  const {hex, weight} = color;
  return (
    <article className={index > 10 ? 'color color-light' : 'color'} style={{ background: `#${hex}` }}>
      <p>#{hex}</p>
      <p>{weight}%</p>
    </article>
  );
}
export default SingleColor