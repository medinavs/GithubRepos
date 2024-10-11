import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/index";


interface ProfileData {
    name: string;
    username: string;
    avatar: string;
    bio: string;
    html_url: string;
    company?: string;
    followers: number;
    following: number;
    public_repos: number;
}

interface ProfileContextData {
    profile: ProfileData;
    repos: any;
    setRepos: (repos: any) => void;
    setQuery: (query: string) => void;
}



interface ProfileProviderProps {
    children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ProfileProviderProps) {
    const [profile, setProfile] = useState({} as ProfileData);
    const [repos, setRepos] = useState([]);
    const [query, setQuery] = useState('');

    async function getProfile() {
        const response = await api.get('users/medinavs');
        const { name, login, avatar_url, bio, followers, following, public_repos, html_url, company } = response.data;

        setProfile({
            name,
            username: login,
            avatar: avatar_url,
            html_url,
            company,
            bio,
            followers,
            following,
            public_repos
        });
    }

    async function searchPublish() {
        const response = await api.get(`search/repositories?q=${query}+user:medinavs`);
        
        setRepos(response.data.items);
    }

    useEffect(() => {
        getProfile();
    }, []);

    useEffect(() => {
        searchPublish();
    }, [query]);

    return (
        <ProfileContext.Provider value={{ profile, setQuery, repos, setRepos}}>
            { children }
        </ProfileContext.Provider>
    )
}