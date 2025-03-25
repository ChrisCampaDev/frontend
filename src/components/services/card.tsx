import Image from "next/image";

interface cardData {
  title: string;
  text: string;
}

function card(data: cardData) {
  return (
    <div className=" hover:scale-100 transition duration-4000  text-center max-w-60 ">
      <div>
        <Image
          className="bg-gray-600 rounded-t-xl"
          src="/file.svg"
          width={300}
          height={250}
          alt="imagen de testeo"
        />
        <div className="bg-white rounded-b-xl text-teal-500 p-2 flex flex-col gap-3">
          <h2>{data.title}</h2>
          <p className="text-sm text-slate-600">{data.text}</p>
          <button className="bg-teal-500 text-white py-2 px-4 w-1/2 m-auto rounded-xl mb-3">
            Solicitar
          </button>
        </div>
      </div>
    </div>
  );
}

export default card;
