"use client";
import {Suspense, useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import Link from "next/link";
import withAuth from "../../../components/withAuth";
import Loader from "../../../components/Loader";
import GreenButton from "../../../components/ui/buttons/GreenButton";
import LateralColor from "../../../components/ui/lateralColor/LateralColor";
import SearchBar from "../../../components/ui/inputs/SearchBar";


function CatwaysPage() {
    const router = useRouter();

    return (
        <>
            <article className="flex flex-col p-8 h-96">
                <CatwaysList/>
            </article>
        </>
    )

}

function Catway(props) {
    return (
        <>
            <li onClick={props.onClick}
                className="list-none relative bg-cyan-50 text-black p-5 flex justify-between hover:cursor-pointer">
                <LateralColor color="bg-blue-700" />
                <p>
                    <strong>Catway Number: </strong> {props.catwayNumber}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4.615 19q-.69 0-1.152-.462Q3 18.075 3 17.385v-2.116h1v2.116q0 .23.192.423q.193.192.423.192h14.77q.23 0 .423-.192q.192-.193.192-.423V6.615q0-.23-.192-.423Q19.615 6 19.385 6H4.615q-.23 0-.423.192Q4 6.385 4 6.615v2.116H3V6.615q0-.69.463-1.152Q3.925 5 4.615 5h14.77q.69 0 1.152.463q.463.462.463 1.152v10.77q0 .69-.462 1.152q-.463.463-1.153.463H4.615Zm7.27-3.577l-.708-.72l2.21-2.203H3v-1h10.387l-2.21-2.204l.708-.72L15.308 12l-3.423 3.423Z"/></svg>
            </li>
        </>
    )
}

function CatwaysList() {
    const [catways, setCatways] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredCatways, setFilteredCatways] = useState([]);
    const router = useRouter();

    const fetchdata = async () => {
        const response = await axios.get(`${process.env.URL}/catways/`);
        const catways = await response.data.catways;
        setCatways(catways);
        setFilteredCatways(catways);
    }

    const handleClick = (id) => {
        router.push(`/dashboard/catways/${id}`);
    }

    const handleChange = (e) => {
        const recherche = e.target.value;
        setSearchText(prev => recherche);
        if(recherche.length !== 0) {
            const filtered = catways.filter(catway => catway.catwayNumber.toString().includes(recherche));
            setFilteredCatways(filtered);
        } else {
            setFilteredCatways(catways);
        }
    }

    const navigateToCreationForm = () => {
        router.push('/dashboard/catways/create');
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <>
            <div className="flex justify-between mb-3">
                <SearchBar handleChange={handleChange} searchText={searchText} text="Saisissez un catway" />
                <GreenButton onClick={navigateToCreationForm} text="Créer" />
            </div>

            <ul className="grid grid-cols-1 gap-1">
                {
                    filteredCatways.map(item => {
                        return <Catway
                            key={item._id}
                            catwayNumber={item.catwayNumber}
                            onClick={() => {
                                handleClick(item._id)
                            }}
                        />
                    })
                }
            </ul>
        </>
    )
}

export default withAuth(CatwaysPage)