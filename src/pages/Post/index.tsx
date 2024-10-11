import { useEffect, useState } from "react";
import { PostCard } from "../../components/PostCard";
import { api } from "../../lib";
import { DetailsCard, PostContainer } from "./styles";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";

interface repoProps {
    title: string;
    watchers: number;
    user: string;
    created_at: any;
    postUrl: string;
}

interface repoDetailsProps {
    description: string;
}


export function Post() {
    const params = useParams();

    const [repo, setRepo] = useState({} as repoProps);
    const [repoDetails, setRepoDetails] = useState({} as repoDetailsProps);

    async function getRepo() {
        const response = await api.get(`repos/medinavs/${params.name}`);

        const { name, watchers, owner, created_at, html_url, } = response.data;
        setRepo({
            title: name,
            watchers,
            user: owner.login,
            created_at,
            postUrl: html_url
        })
    }

    async function getDetails() {
        const response = await api.get('users/medinavs/repos');

        const filteredResponse = response.data.filter((item: any) => item.name === params.name);

        const { description } = filteredResponse[0];
        setRepoDetails({
            description
        })
    }



    useEffect(() => {
        getRepo();
        getDetails();
    }, [])

    
    return (
        <>
            <Header />
            <PostContainer>
                <PostCard
                    title={repo.title}

                    watchers={repo.watchers}
                    user={repo.user}
                    created_at={repo.created_at}
                    postUrl={repo.postUrl}
                />
                <DetailsCard>
                    <p>{repoDetails.description}</p>
                </DetailsCard>
            </PostContainer>
        </>
    )
}