import Image from "next/image";

type Props = {};

export function ProfilePicture() {
  return (
    <button className="relative group">
      <Image
        className="border border-black rounded-full"
        width={48}
        height={48}
        src="https://avatars.dicebear.com/api/croodles/stefan.svg"
        alt="Profile Picture"
      />

      <div className="bg-white absolute bottom-0 right-0 rounded-full border p-0.5 border-black transform translate-x-1 translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>

        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-25 bg-black" />
      </div>
    </button>
  );
}
