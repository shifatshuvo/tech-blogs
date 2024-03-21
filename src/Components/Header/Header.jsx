import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 border-gray-300 border-b-2 bg-gray-300">
      <h1 className="md:text-4xl text-3xl font-bold text-gray-800">
        <span className="text-blue-700">T</span>ech{" "}
        <span className="text-blue-700">B</span>log
      </h1>
      <img
        className="border border-blue-600 rounded-full"
        src={profile}
        alt="profile img"
      />
    </header>
  );
};

export default Header;
