


export default function AccountCard({title, option, icon}) {


    return (
        <>
            <li className="flex flex-col bg-white w-60 h-fit p-5 rounded-2xl border-2 shadow-md hover:shadow-xl duration-200 hover:transition-all">
                <div className="flex justify-between">
                    <p className="font-bold text-xl">{title}</p>
                    {icon}
                </div>
                <p className="text-gray-700">{option}</p>
            </li>
        </>
    )

}