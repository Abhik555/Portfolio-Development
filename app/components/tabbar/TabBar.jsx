export default function TabBar({tab , setTab}){

    const tabs = ['Certificates' , 'Skills']

    return(
        <div className="flex flex-row gap 5 justify-start items-center w-fit h-auto">
            {
                tabs.map((title , index) =>{

                    if(tab === index){
                        return(
                            <button key={index}  className="flex justify-center items-center text-white font-semibold text-lg mr-5 p-2 border-b-4 ease-linear duration-150 ">
                                {title}
                            </button>
                        );
                    }else{
                        return(
                            <button key={index} onClick={() => setTab(index)} className="flex justify-center items-center text-white mr-5 font-semibold ease-linear duration-150">
                                {title}
                            </button>
                        );
                    }
                })
            }
        </div>
    );
}