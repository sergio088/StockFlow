interface dashboard {
  text1: number;
  text2: string;
}

export default function Card({ text1, text2 }: dashboard) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative mb-8 items-center rounded-[10px] bg-white py-10 px-6 shadow-1">
            <div className="flex flex-col items-center">
              <p className="font-bold text-2xl">{text1}</p>
              <p className="mt-1 text-base text-body-color ">{text2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
