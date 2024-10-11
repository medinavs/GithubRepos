import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { ProfileCard } from "../../components/Profile";
import { SearchInput } from "../../components/SearchInput";
import { CardsContainer, HomeContainer } from "./styles";
import { api } from "../../lib";
import { ProfileContext } from "../../context";

export function Home() {
    const {repos, setRepos } = useContext(ProfileContext);

    async function getRepos() {
        const response = await api.get('users/medinavs/repos');
        
        setRepos(response.data);
    }


    useEffect(() => {
        getRepos();
    }, []);

    return (
        <>
            <Header />
            <HomeContainer>
                <ProfileCard />
                <SearchInput />
                <CardsContainer>
                {repos && repos.length > 0 ? (
                    repos.map((repo: any) => (
                        <Card
                            key={repo.id}
                            repoName={repo.name}
                            title={repo.name}
                            description={repo.description}
                            created_at={repo.created_at}
                        />
                    ))
                ) : (
                    <p>Nao foram encontrados repositorios.</p>
                )}
                </CardsContainer>
            </HomeContainer>
        </>
    )
}