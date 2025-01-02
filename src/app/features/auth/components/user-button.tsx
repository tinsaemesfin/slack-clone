'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useCurrentUser } from "../hooks/useCurrentUser";
import { Loader, LogOut } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

  const UserButton = () => {
    const {data,isLoading} = useCurrentUser();
    const { signOut } = useAuthActions();

    if(isLoading){
        <Loader className="size-4 animate-spin text-muted-foreground" />
    }
    if(!data){
        return null;
    }
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none relative">
            <Avatar className="size-10 hover:opacity-75 transition">
                <AvatarImage src={data?.image} />
                <AvatarFallback>{data.name?data.name.charAt(0).toUpperCase() :'-_-'}</AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="right" className="w-60">
            <DropdownMenuLabel>{data?.name}</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>signOut()}>
                <LogOut className="mr-2 size-4" />
                Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
  }
  
  export default UserButton