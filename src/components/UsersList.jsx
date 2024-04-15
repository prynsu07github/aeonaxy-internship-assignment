const user = [
  {
    name: "Erica Dhawan",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Devon Price",
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    name: "GEN",
    avatar: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Scott Galloway",
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    name: "Kaki Okumura",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Hal H. Harris",
    avatar: "https://bit.ly/prosper-baba",
  },
  {
    name: "OneZero",
    avatar: "https://bit.ly/code-beast",
  },
  {
    name: "Carvell Wellace",
    avatar: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Elemental",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Sarah Cottrell",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "Forge",
    avatar: "https://bit.ly/ryan-florence",
  },
  {
    name: "LEVEL",
    avatar: "https://bit.ly/dan-abramov",
  },
];
const UsersList = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-16 md:mt-24 font-roboto">
      {user.map((user, index) => (
        <div
          key={index}
          className="[&:nth-child(1)]:border-y-2 md:[&:nth-child(2)]:border-y-2 lg:[&:nth-child(3)]:border-y-2 [&:nth-child(1)]:pt-3 md:[&:nth-child(2)]:pt-3 lg:[&:nth-child(3)]:pt-3 flex gap-5 items-center border-b-2 pb-3 border-y-black"
        >
          <img src={user.avatar} alt={user} className="h-12 md:h-16 rounded-full" />
          <p className="text-xl md:text-3xl">{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
