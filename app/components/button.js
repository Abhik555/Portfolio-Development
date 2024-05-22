export default function Button({title ,width , height}){
    return(
        <div className="flex flex-row w-auto h-auto items-center justify-center align-middle text-center bg-gradient-to-b from-blue-700 to-blue-500 pt-1 pb-1 pr-2 pl-2 rounded-xl hover:from-blue-800 hover:to-blue-700 cursor-default">
            <a className="text-center text-white">
                {title}
            </a>
        </div>
    );
}