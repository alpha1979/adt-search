const ListItem = ({
  imageUrl,
  title,
  destination
}) => {

  return <tr>
    <td><img src={imageUrl} width={140} alt={title} /></td>
    <td>{title}</td>
    <td>{destination}</td>
  </tr>
};

export default ListItem;
