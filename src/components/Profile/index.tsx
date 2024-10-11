import { useContext } from "react";
import { Bio, ContentContainer, ContentHeader, Icons, IconsContainer, LinkContainer, ProfileContainer } from "./styles";
import { ArrowSquareOut, Building, GithubLogo, Users } from '@phosphor-icons/react';
import { ProfileContext } from "../../context";
export function ProfileCard() {

    const { profile } = useContext(ProfileContext);

    return (
        <ProfileContainer>
            <img src={profile?.avatar} alt="Profile" />
            <ContentContainer>
                <ContentHeader>
                    <strong>{profile?.name}</strong>
                    <LinkContainer href={profile?.html_url} target="_blank">
                        GITHUB
                        <ArrowSquareOut size={20} />
                    </LinkContainer>
                </ContentHeader>
                <Bio>{profile?.bio}</Bio>
                <IconsContainer>
                    <Icons>
                        <GithubLogo size={20} />
                        <strong>{profile?.username}</strong>
                    </Icons>
                    <Icons>
                        <Building size={20} />
                        <strong>{profile?.company}</strong>
                    </Icons>
                    <Icons>
                        <Users size={20} />
                        <strong>{profile?.followers} seguidores</strong>
                    </Icons>
                </IconsContainer>
            </ContentContainer>
        </ProfileContainer>
    )
}