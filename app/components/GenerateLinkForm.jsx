const GenerateLinkForm = ({ onSubmit, newName, setNewName }) => (
    <form
      onSubmit={onSubmit}
      className="w-full z-40 flex items-center fixed bottom-0 left-1/2 -translate-x-1/2"
    >
      <input
        type="text"
        placeholder="Enter your name here..."
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        className="border-2 p-3 w-[65%] md:w-[75%] rounded-[10px] bg-purple-500 placeholder:text-gray-200 text-center text-white border-pink-500 animate-scaleSequence"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-3 md:px-8 py-3 rounded-[10px] border-[3px] w-[35%] md:w-[25%] border-purple-500 animate-scaleSequence"
      >
        ‮O‮G👉
      </button>
    </form>
  );

  export default GenerateLinkForm;
