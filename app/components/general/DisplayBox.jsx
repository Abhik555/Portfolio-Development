'use client';
export default function DisplayBox({ title, type , img}) {
  if (type === 0) {
    return (
      <div className="flex w-52 h-36 bg-python justify-center items-center font-medium text-lg rounded-3xl hover:w-[212px] hover:h-[154px] ease-in-out duration-100">
        {title}
      </div>
    );
  }else{
    return (
        <div className="flex w-52 h-36 bg-slate-700 justify-center items-center font-medium text-lg rounded-3xl">
          {title}
        </div>
      );
  }
}
