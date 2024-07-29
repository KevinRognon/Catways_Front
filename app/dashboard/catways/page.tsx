"use client";
import {Suspense, useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
import Link from "next/link";
import withAuth from "../../../components/withAuth";
import Loader from "../../../components/Loader";
import GreenButton from "../../../components/ui/buttons/GreenButton";


function CatwaysPage() {
    const router = useRouter();

    return (
        <>
            <article className="flex flex-col p-8 h-96">
                <Suspense fallback={<Loader />}>
                    <CatwaysList/>
                </Suspense>
            </article>
        </>
    )

}

function Catway(props) {
    return (
        <>
            <li onClick={props.onClick}
                className="list-none bg-cyan-700 text-cyan-100 p-5 flex flex-col justify-center hover:cursor-pointer">
                <p>
                    <strong>Catway Number: </strong> {props.catwayNumber}
                </p>
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
            <div className="flex flex-col mb-3">
                <input className="w-1/3 p-2 text-black" type="text" value={searchText} name="search"
                    placeholder="Saisissez un catway" onChange={(e) => handleChange(e)}/>

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