import { Clock } from "@phosphor-icons/react";
import { CardContainer, CardContentContainer, CardContentDescription, CardContentHeader } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

interface CardProps {
    repoName: string;
    title: string;
    description: string;
    created_at: any;
}

export function Card({ title, description, created_at, repoName }: CardProps) {
    const navigate = useNavigate();

    const dateFormatted = formatDistanceToNow(created_at ? new Date(created_at)
        : new Date(), { locale: ptBR, addSuffix: true });

    const handleNavigate = () => {
        navigate(`/post/${repoName}`);
    }

    return (
        <CardContainer onClick={handleNavigate}>
            <CardContentContainer>
                <CardContentHeader>
                    <h2>{title}</h2>
                    <p>
                        {dateFormatted}
                        <Clock size={18}/>
                    </p>
                </CardContentHeader>
                <CardContentDescription>
                    {description}
                </CardContentDescription>
            </CardContentContainer>
        </CardContainer>
    )
}