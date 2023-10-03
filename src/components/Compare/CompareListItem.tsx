interface CompareListItemProps {
  name: string;
}

const CompareListItem = ({ name }: CompareListItemProps) => {
  return (
    <div className="flex items-center mb-2 last:mb-0">
      <div className="w-12 h-12 bg-white">
        <img
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          alt={name}
          className="w-12 h-12  object-contain"
        />
      </div>
      <p className="mx-5 mb-0 flex-1">{name}</p>
    </div>
  );
};

export default CompareListItem;
