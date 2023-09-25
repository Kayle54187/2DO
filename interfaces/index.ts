export interface AvatarComponentProps{
    completion_rate: string;
    status: "Daily" | "Work" | "Projects" | "Ideas";
}

export interface AvatarImageProps{
    completion_rate: string;
}

export interface FeedItemProps {
    completion_rate: string;
    status: "Daily" | "Work" | "Projects" | "Ideas";
    title: string;
}

export interface TodoItemProps {
    status: "Daily" | "Work" | "Projects" | "Ideas";
}