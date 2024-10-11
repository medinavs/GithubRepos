import { GithubLogo } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";

export function Header() {
    return(
        <HeaderContainer>
            <h1>
                Github Repos
                <GithubLogo size={50}/>
            </h1>
        </HeaderContainer>
    )
}