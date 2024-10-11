import { Link } from "react-router-dom";
import { Bio, Icons, IconsContainer, PostCardContainer, PostCardContentContainer, PostCardHeader, PostCardInfos } from "./styles";
import { ArrowSquareOut, CaretLeft, Eye, GithubLogo } from "@phosphor-icons/react";
import { CalendarDots } from "@phosphor-icons/react/dist/ssr";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostCardProps {
    title: string;
    watchers: number;
    user: string;
    created_at: any;
    postUrl: string;
}

export function PostCard({ title, watchers, user, created_at, postUrl }: PostCardProps) {

    const dateFormatted = formatDistanceToNow(created_at ? new Date(created_at)
        : new Date(), { locale: ptBR, addSuffix: true });

    return (
        <PostCardContainer>
            <PostCardContentContainer>
                <PostCardHeader>
                    <Link to="/">
                        <CaretLeft />
                        Voltar
                    </Link>
                    <Link to={postUrl} target="_blank">
                        VER NO GITHUB
                        <ArrowSquareOut size={20} />
                    </Link>
                </PostCardHeader>
                <PostCardInfos>
                    <Bio>{title}</Bio>
                    <IconsContainer>
                        <Icons>
                            <GithubLogo size={20} />
                            <span>{user}</span>
                        </Icons>
                        <Icons>
                            <CalendarDots size={20} />
                            <span>{dateFormatted}</span>
                        </Icons>
                        <Icons>
                            <Eye size={20} />
                            <span>{watchers} visualizadores</span>
                        </Icons>
                    </IconsContainer>
                </PostCardInfos>
            </PostCardContentContainer>
        </PostCardContainer>
    )
}