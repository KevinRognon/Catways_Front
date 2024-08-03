

export default function SearchBar({searchText, handleChange, text}) {

    return (
        <>
            <div className="flex items-center w-52 relative">
                <input className="w-full p-2 rounded-3xl pl-5 text-black" type="text" value={searchText} name="search"
                    placeholder={text} onChange={(e) => handleChange(e)}/>
                <svg className="absolute right-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"/>
                </svg>
            </div>
        </>
    )
}