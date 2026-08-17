'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {LogOut} from "lucide-react";
import Navitems from "@/components/Navitems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in");
    }

    const user = { name: 'Dhruv', email: 'dhruvctrl@gmail.com' };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button variant="ghost" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500">
                        <Avatar className="h-8 w-8 rounded-full">
                            <AvatarImage src="https://share.google/VTxQxjJhuTZFgmifC" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="hidden md:flex md:flex-col items-start">
                            <span className="text-base font-medium text-gray-400">
                                {user.name}
                            </span>
                        </div>
                    </Button>
                }
            />
            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>
                        <div className="flex relative items-center gap-3 py-2">
                            <Avatar className="h-12 w-12 rounded-full">
                                <AvatarImage src="https://share.google/VTxQxjJhuTZFgmifC" />
                                <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                    {user.name[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-base font-medium text-gray-400">
                                    {user.name}
                                </span>
                                <span className="text-sm text-gray-500">{user.email}</span>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                </DropdownMenuGroup>
                    <DropdownMenuSeparator className="bg-gray-600"/>
                    <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">LogOut</DropdownMenuItem>
                <DropdownMenuSeparator className=" hidden sm:block bg-gray-600"/>
                <nav className="sm:hidden">
                    <Navitems/>
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserDropdown;