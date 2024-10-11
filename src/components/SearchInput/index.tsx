import { useContext, useEffect } from "react";
import { Search, SearchContainer, SearchHeader } from "./styles";
import { ProfileContext } from "../../context";
import { set, useForm } from "react-hook-form";

export function SearchInput() {
    const { profile, setQuery } = useContext(ProfileContext);

    const { register, watch } = useForm();

    const searchQuery = watch("search");

    useEffect(() => {

        setTimeout(() => {
            setQuery(searchQuery);
        }, 1000)
        
    }, [searchQuery])

    return (
        <SearchContainer>
        <SearchHeader>
            <h2>Publicacoes</h2>
            <p>{profile?.public_repos} Publicacoes</p>
        </SearchHeader>
        <Search placeholder="Buscar conteudo" {...register("search")}/>
        </SearchContainer>
    )
}