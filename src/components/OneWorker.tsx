type Props = {
  name: string;
  role: string;
  image: string;
  description: string;
  nickname: string;
};

const OneWorker: React.FC<Props> = ({ name, role, image, description, nickname }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center w-full font-monserrat">
      <img src={image} alt={name} className="w-40 h-40 object-cover rounded-full mb-4 shadow" />
      <h3 className="text-[#6CA0D8] font-semibold text-[3vmin]">{nickname}</h3>
      <h3 className="font-medium italic">{name}</h3>
      <p className="text-[#666] font-medium italic mb-[1vh]">{role}</p>
      <p className="text-[3vmin] md:text-[1vmin]">{description}</p>
    </div>
  );
};

export default OneWorker;
